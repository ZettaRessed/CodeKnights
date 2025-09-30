'use server';
/**
 * @fileOverview Provides contextual AI help to players stuck on coding challenges.
 *
 * - getContextualHelp - A function that retrieves AI-generated hints and guidance.
 * - ContextualHelpInput - The input type for the getContextualHelp function.
 * - ContextualHelpOutput - The return type for the getContextualHelp function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContextualHelpInputSchema = z.object({
  challengeDescription: z
    .string()
    .describe('The description of the coding challenge.'),
  playerCode: z
    .string()
    .describe('The code the player has written so far.'),
  playerLevel: z
    .number()
    .describe('The player level in the game, influences hint complexity.'),
  attemptsRemaining: z
    .number()
    .describe('The number of attempts remaining, influences hint directness.'),
});
export type ContextualHelpInput = z.infer<typeof ContextualHelpInputSchema>;

const ContextualHelpOutputSchema = z.object({
  hint: z.string().describe('A helpful hint or guidance message.'),
});
export type ContextualHelpOutput = z.infer<typeof ContextualHelpOutputSchema>;

export async function getContextualHelp(input: ContextualHelpInput): Promise<ContextualHelpOutput> {
  return contextualHelpFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contextualHelpPrompt',
  input: {schema: ContextualHelpInputSchema},
  output: {schema: ContextualHelpOutputSchema},
  prompt: `You are an AI coding coach providing hints to a player stuck on a coding challenge.

  Challenge Description: {{{challengeDescription}}}
  Player Code: {{{playerCode}}}
  Player Level: {{{playerLevel}}}
  Attempts Remaining: {{{attemptsRemaining}}}

  Provide a helpful hint or guidance message to help the player overcome the obstacle.
  The message should be tailored to the player's level and the number of attempts remaining.
  If the player has many attempts remaining, provide a subtle hint.
  If the player has few attempts remaining, provide a more direct hint.
  Do not directly give the answer. Instead, guide them towards the solution.
  The hint should be encouraging and supportive.
  Try to identify the specific issue and help the player understand it rather than just telling them what to do.
  Format the hint such that it will fit into a tooltip.
  The help should be in Spanish.
  If the Player Code is blank, give them a high level starting point for the challenge.
  Avoid giving negative feedback, instead, focus on the positive aspects of their current code and how to improve it.
  Make your response brief.
  `,
});

const contextualHelpFlow = ai.defineFlow(
  {
    name: 'contextualHelpFlow',
    inputSchema: ContextualHelpInputSchema,
    outputSchema: ContextualHelpOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);


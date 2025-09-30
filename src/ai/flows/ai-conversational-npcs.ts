// Implemented Genkit flow for dynamic NPC dialogues using an LLM to enhance game immersion.

'use server';

/**
 * @fileOverview An AI-powered conversational NPC agent.
 *
 * - converseWithNpc - A function that handles the conversation with an NPC.
 * - ConverseWithNpcInput - The input type for the converseWithNpc function.
 * - ConverseWithNpcOutput - The return type for the converseWithNpc function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConverseWithNpcInputSchema = z.object({
  npcName: z.string().describe('The name of the NPC.'),
  playerMessage: z.string().describe('The message from the player.'),
  gameState: z.string().optional().describe('The current game state as JSON string, including player progress, completed quests, and relevant world events.'),
  npcTraits: z.string().describe('Description of the NPC traits, backstory and personality.'),
});
export type ConverseWithNpcInput = z.infer<typeof ConverseWithNpcInputSchema>;

const ConverseWithNpcOutputSchema = z.object({
  npcResponse: z.string().describe('The NPC\'s response to the player.'),
});
export type ConverseWithNpcOutput = z.infer<typeof ConverseWithNpcOutputSchema>;

export async function converseWithNpc(input: ConverseWithNpcInput): Promise<ConverseWithNpcOutput> {
  return converseWithNpcFlow(input);
}

const prompt = ai.definePrompt({
  name: 'converseWithNpcPrompt',
  input: {schema: ConverseWithNpcInputSchema},
  output: {schema: ConverseWithNpcOutputSchema},
  prompt: `You are roleplaying as {{npcName}}, a character in a medieval RPG.
Your traits and backstory are as follows: {{npcTraits}}

The current game state is: {{gameState}}

Respond to the player\'s message, taking into account your traits and the game state.
Player message: {{{playerMessage}}}
`,
});

const converseWithNpcFlow = ai.defineFlow(
  {
    name: 'converseWithNpcFlow',
    inputSchema: ConverseWithNpcInputSchema,
    outputSchema: ConverseWithNpcOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

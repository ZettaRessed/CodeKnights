'use server';

/**
 * @fileOverview Provides personalized training recommendations based on player progress and areas of struggle.
 *
 * - getPersonalizedRecommendations - A function that generates personalized training recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  playerProgress: z
    .string()
    .describe("A summary of the player's progress in the game, including completed missions and unlocked skills."),
  strugglingAreas: z
    .string()
    .describe("A description of the areas where the player is struggling, such as specific coding concepts or mission types."),
  preferredLearningStyle: z
    .string()
    .optional()
    .describe("The player's preferred learning style, such as visual, auditory, or kinesthetic."),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe("A list of personalized training recommendations for the player, tailored to their progress and areas of struggle."),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI coding coach who provides personalized training recommendations to players in a coding game.

  Based on the player's progress, struggling areas, and preferred learning style, provide a list of training recommendations.

  Player Progress: {{{playerProgress}}}
  Struggling Areas: {{{strugglingAreas}}}
  Preferred Learning Style: {{{preferredLearningStyle}}}

  Recommendations:`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

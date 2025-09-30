'use server';
/**
 * @fileOverview An AI-powered learning path recommender for CodeKnights.
 *
 * - getLearningPath - A function that generates a personalized learning path for a player.
 * - LearningPathInput - The input type for the getLearningPath function.
 * - LearningPathOutput - The return type for the getLearningPath function.
 */

import {ai} from '@/ai/genkit';
import { CharacterClass } from '@/lib/character-classes';
import {z} from 'genkit';

const KingdomSchema = z.object({
    id: z.string().describe("The unique identifier for the kingdom."),
    name: z.string().describe("The name of the kingdom."),
    description: z.string().describe("A brief description of the kingdom and the technology it represents."),
});

const LearningPathInputSchema = z.object({
  characterClass: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
  }).describe("The player's chosen character class."),
  experienceLevel: z.string().describe("The player's self-reported programming experience ('new' or 'experienced')."),
  availableKingdoms: z.array(KingdomSchema).describe("The list of all available kingdoms in the game world."),
});
export type LearningPathInput = z.infer<typeof LearningPathInputSchema>;

const LearningPathOutputSchema = z.object({
  introduction: z.string().describe("A welcoming and thematic introduction from the Wizard Advisor, addressing the player by their class."),
  recommendedPath: z.array(z.object({
    kingdomId: z.string().describe("The ID of the recommended kingdom."),
    reason: z.string().describe("A brief, thematic explanation for why this kingdom is recommended at this step in the path."),
  })).describe("An ordered list of 3-5 recommended kingdoms for the player to visit, forming a learning path."),
});
export type LearningPathOutput = z.infer<typeof LearningPathOutputSchema>;

export async function getLearningPath(input: LearningPathInput): Promise<LearningPathOutput> {
  return learningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'learningPathPrompt',
  input: {schema: LearningPathInputSchema},
  output: {schema: LearningPathOutputSchema},
  prompt: `You are the "Mago Consejero" (Wizard Advisor) in the game CodeKnights. Your role is to guide new knights on their epic journey through the Reinos del Código (Kingdoms of Code).

A new knight has just taken their oath. Based on their chosen vocation (character class) and their past experience, you must devise a personalized learning path for them. This path should consist of 3 to 5 kingdoms to visit in a logical order.

Address the player in a wise, epic, and slightly mystical tone.

Here is the knight's profile:
- Vocation: {{characterClass.name}} ({{characterClass.description}})
- Experience: {{experienceLevel}}

Here are the available kingdoms:
{{#each availableKingdoms}}
- {{name}} (ID: {{id}}): {{description}}
{{/each}}

Your task:
1.  Create a welcoming introductory message for the knight, acknowledging their class and potential.
2.  Recommend a sequence of 3 to 5 kingdoms that forms a logical and effective learning path for them.
3.  For each kingdom in the path, provide a short, thematic reason why it's the next step on their journey.
    - If the experience level is 'new', start with foundational kingdoms like HTML/CSS or Python before moving to more complex ones.
    - If the experience level is 'experienced', you can suggest a more advanced or specialized path.
    - The path should align with the strengths and theme of their character class. For example, a "Hechicero del Bucle" (Python wizard) should probably start in the "Reino de la Gran Serpiente" (Python). An "Arquero del Front-End" should start with HTML/CSS and JavaScript.

Present your response in the specified JSON format.
`,
});

const learningPathFlow = ai.defineFlow(
  {
    name: 'learningPathFlow',
    inputSchema: LearningPathInputSchema,
    outputSchema: LearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

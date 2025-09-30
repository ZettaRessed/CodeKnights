'use server';

/**
 * @fileOverview An AI agent that analyzes code and suggests improvements.
 *
 * - getCodeImprovementSuggestions - A function that takes code as input and returns improvement suggestions.
 * - CodeImprovementSuggestionsInput - The input type for the getCodeImprovementSuggestions function.
 * - CodeImprovementSuggestionsOutput - The return type for the getCodeImprovementSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CodeImprovementSuggestionsInputSchema = z.object({
  code: z
    .string()
    .describe('The code to be analyzed for improvement suggestions.'),
  language: z.string().describe('The programming language of the code.'),
});
export type CodeImprovementSuggestionsInput = z.infer<
  typeof CodeImprovementSuggestionsInputSchema
>;

const CodeImprovementSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of improvement suggestions for the code.'),
});
export type CodeImprovementSuggestionsOutput = z.infer<
  typeof CodeImprovementSuggestionsOutputSchema
>;

export async function getCodeImprovementSuggestions(
  input: CodeImprovementSuggestionsInput
): Promise<CodeImprovementSuggestionsOutput> {
  return codeImprovementSuggestionsFlow(input);
}

const codeImprovementSuggestionsPrompt = ai.definePrompt({
  name: 'codeImprovementSuggestionsPrompt',
  input: {schema: CodeImprovementSuggestionsInputSchema},
  output: {schema: CodeImprovementSuggestionsOutputSchema},
  prompt: `You are a code analysis expert. You will receive code as input and
  provide a list of suggestions for improving the code.

  Language: {{{language}}}

  Code:
  \`\`\`{{{language}}}
  {{{code}}}
  \`\`\`

  Suggestions (as a numbered list):
  `, // Ensure the output is a numbered list for better readability
});

const codeImprovementSuggestionsFlow = ai.defineFlow(
  {
    name: 'codeImprovementSuggestionsFlow',
    inputSchema: CodeImprovementSuggestionsInputSchema,
    outputSchema: CodeImprovementSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await codeImprovementSuggestionsPrompt(input);
    return output!;
  }
);

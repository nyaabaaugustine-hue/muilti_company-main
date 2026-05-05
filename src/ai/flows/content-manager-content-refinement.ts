
'use server';
/**
 * @fileOverview An AI-powered tool for content managers to refine taglines and short descriptions.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CompanyInputSchema = z.object({
  name: z.string().describe('Name of the company.'),
  tagline: z.string().describe('Current tagline for the individual company.'),
  description: z.string().describe('Current short description for the individual company.'),
});

const GroupInputSchema = z.object({
  tagline: z.string().describe('Current tagline for the group of companies.'),
  description: z.string().describe('Current short description for the group of companies.'),
});

const ContentRefinerInputSchema = z.object({
  group: GroupInputSchema.optional().describe('Optional content for the overall group of companies.'),
  companies: z.array(CompanyInputSchema)
    .optional()
    .describe('An optional array of individual company data for refinement.'),
});

const CompanyOutputSchema = z.object({
  name: z.string().describe('Name of the company.'),
  refinedTagline: z.string().describe('Refined or alternative tagline for the individual company.'),
  refinedDescription: z.string().describe('Refined or alternative short description for the individual company.'),
});

const GroupOutputSchema = z.object({
  refinedTagline: z.string().describe('Refined or alternative tagline for the group of companies.'),
  refinedDescription: z.string().describe('Refined or alternative short description for the group of companies.'),
});

const ContentRefinerOutputSchema = z.object({
  group: GroupOutputSchema.optional().describe('Refined content for the overall group of companies.'),
  companies: z.array(CompanyOutputSchema)
    .optional()
    .describe('Refined individual company data.'),
});

export type ContentRefinerInput = z.infer<typeof ContentRefinerInputSchema>;
export type ContentRefinerOutput = z.infer<typeof ContentRefinerOutputSchema>;

const contentRefinerPrompt = ai.definePrompt({
  name: 'contentRefinerPrompt',
  input: { schema: ContentRefinerInputSchema },
  output: { schema: ContentRefinerOutputSchema },
  prompt: `You are an expert content refiner and copy editor for a group of modern technology companies.

{{#if group}}
## Group Content
Tagline: "{{{group.tagline}}}"
Description: "{{{group.description}}}"
{{/if}}

{{#if companies.length}}
## Company Content
{{#each companies}}
Company: "{{{this.name}}}"
Tagline: "{{{this.tagline}}}"
Description: "{{{this.description}}}"
{{/each}}
{{/if}}`,
});

const contentRefinerFlow = ai.defineFlow(
  {
    name: 'contentRefinerFlow',
    inputSchema: ContentRefinerInputSchema,
    outputSchema: ContentRefinerOutputSchema,
  },
  async (input) => {
    const { output } = await contentRefinerPrompt(input);
    return output!;
  }
);

export async function refineContent(input: ContentRefinerInput): Promise<ContentRefinerOutput> {
  return contentRefinerFlow(input);
}

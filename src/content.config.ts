import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['getting-started', 'billing', 'features', 'troubleshooting']),
    order: z.number().optional(), // for sorting within categories
  }),
});

export const collections = { knowledge };

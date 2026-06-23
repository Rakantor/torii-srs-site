import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const knowledge = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['getting-started', 'billing', 'features', 'troubleshooting']),
    order: z.number().optional(), // for sorting within categories
  }),
});

export const collections = { knowledge };
import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    categories: z.array(z.string()),
    diets: z.array(z.string()).default([]),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    nutrition: z.object({
      protein: z.string(),
      fiber: z.string(),
      glycemicLoad: z.string(),
      calories: z.string(),
    }),
    nutritionNote: z.string(),
    ingredients: z.array(z.object({
      amount: z.string(),
      item: z.string(),
    })),
    steps: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    note: z.string().optional(),
    publishDate: z.date(),
  }),
});

export const collections = { recipes };

import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    number: z.string(),
    kind: z.enum(["Research", "Engineering"]),
    title: z.string(),
    subtitle: z.string(),
    short: z.string(),
    tags: z.array(z.string()),
    metricLine: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    description: z.string(),
    pipeline: z.array(z.string()).optional(),
    experiments: z.array(z.string()).optional(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    demo: z.boolean().default(false),
    github: z.string(),
    huggingface: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { projects };

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
    experiments: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    processImage: z.string().optional(),
    process: z.array(z.object({
      num: z.string(),
      title: z.string(),
      desc: z.string(),
      setup: z.object({
        label: z.string(),
        items: z.array(z.string()),
      }).optional(),
      pointGroups: z.array(z.object({
        label: z.string().optional(),
        points: z.array(z.string()),
      })).optional(),
      note: z.object({
        label: z.string(),
        lines: z.array(z.string()),
      }).optional(),
      image: z.string().optional(),
    })).optional(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    demo: z.boolean().default(false),
    heroImage: z.string().optional(),
    github: z.string().optional(),
    report: z.string().optional(),
    huggingface: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { projects };

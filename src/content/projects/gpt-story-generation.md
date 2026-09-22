---
number: "01"
kind: Engineering
title: GPT Story Generation
subtitle: From-scratch Transformer Language Model
short: "Built a GPT-style language model from scratch with nanoGPT, trained on the ROCStories dataset for 5-sentence story generation."
tags: [PyTorch, Transformers, Language Modeling]
metricLine: 31.7M parameters · PPL 20.44 · 1st Place
metrics:
  - { value: "31.7M", label: "Parameters" }
  - { value: "20.44", label: "Test PPL" }
  - { value: "1st", label: "Competition place" }
description: >-
  Built a GPT-style language model from scratch with nanoGPT for 5-sentence
  story generation on the ROCStories dataset. Implemented a custom training
  pipeline covering GPT-2 BPE tokenization, context packing, Transformer
  architecture, pretraining, fine-tuning, and generation control. Conducted
  experiments on learning rate, warmup, dropout, training steps, and weight
  averaging, achieving a test PPL of 20.44.
pipeline:
  - ROCStories
  - GPT-2 BPE
  - Context Packing
  - Decoder-only Transformer
  - Pretraining
  - Fine-tuning
  - Weight Averaging
  - Final Checkpoint
experiments: [Learning rate, Warmup schedule, Dropout, Training Steps, Weight Averaging]
specs:
  - { label: "Architecture", value: "Decoder-only Transformer" }
  - { label: "Parameters", value: "31.7M" }
  - { label: "Layers", value: "7" }
  - { label: "Attention Heads", value: "6" }
  - { label: "Embedding Dim", value: "384" }
  - { label: "Feed-forward", value: "SwiGLU · hidden 1024 · bias-free" }
  - { label: "Normalization", value: "RMSNorm" }
  - { label: "Tokenizer", value: "GPT-2 BPE · vocab 50,304" }
  - { label: "Context", value: "Causal self-attention · tied embeddings" }
demo: true
github: https://github.com/leahylin/gpt-story-inference
order: 1
---

One thing I learned from this project was that training a language model is not
just about building the Transformer architecture. Small changes in the training
setup and generation strategy could have a noticeable impact on the final stories.
I was also surprised that a lower perplexity did not always mean better-looking
generations. If I did the project again, I would run more systematic experiments
and spend more time evaluating the quality of the generated stories.

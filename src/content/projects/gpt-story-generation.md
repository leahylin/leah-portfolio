---
number: "01"
kind: Engineering
title: GPT Story Generation
subtitle: From-scratch Transformer Language Model
short: "A GPT-style language model trained from scratch with a custom pipeline: GPT-2 BPE, SwiGLU, RMSNorm."
tags: [PyTorch, Transformers, Language Modeling]
metricLine: 31.7M parameters · PPL 15.2 · 1st Place
metrics:
  - { value: "31.7M", label: "Parameters" }
  - { value: "15.2", label: "Test PPL" }
  - { value: "1st", label: "Competition place" }
description: >-
  Built a GPT-style language model from scratch for story generation,
  implementing a custom training pipeline with GPT-2 BPE tokenization, SwiGLU
  and RMSNorm. Conducted hyperparameter experiments across learning rate,
  warmup and weight decay.
pipeline:
  - ROCStories
  - GPT-2 BPE
  - Decoder-only Transformer
  - Fine-tuning
  - 70% A + 30% B parameter average
  - Final checkpoint
experiments: [Learning rate, Warmup schedule, Weight decay]
specs:
  - { label: "Architecture", value: "Decoder-only Transformer" }
  - { label: "Parameters", value: "31.7M" }
  - { label: "Layers", value: "7" }
  - { label: "Attention heads", value: "6" }
  - { label: "Embedding dim", value: "384" }
  - { label: "Feed-forward", value: "SwiGLU · hidden 1024 · bias-free" }
  - { label: "Normalization", value: "RMSNorm" }
  - { label: "Tokenizer", value: "GPT-2 BPE · vocab 50,304" }
  - { label: "Context", value: "Causal self-attention · tied embeddings" }
demo: true
github: https://github.com/leahylin/gpt-story-inference
huggingface: https://huggingface.co/leahylin/gpt-story-generation
order: 1
---

Markdown body is rendered under **Notes** on the detail page. Write freely here —
what the problem was, what surprised you, what you would do differently.

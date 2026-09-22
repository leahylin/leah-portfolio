---
number: "01"
kind: Engineering
title: GPT Story Generation
subtitle: From-scratch Transformer Language Model
short: "Built a GPT-style language model from scratch with nanoGPT, trained on the ROCStories dataset for 5-sentence story generation."
tags: [PyTorch, Transformers, Language Modeling]
metricLine: 31.7M parameters · PPL 20.44 · 1st Place
metrics:
  - { value: "31.71M", label: "Model Parameters" }
  - { value: "20.44", label: "Held-out Test PPL" }
  - { value: "1st Place", label: "Story Generation Competition" }
  - { value: "5 Sentences", label: "Controlled Story Generation" }
description: >-
  Built a GPT-style language model from scratch with nanoGPT for 5-sentence
  story generation on the ROCStories dataset. Implemented a custom training
  pipeline covering GPT-2 BPE tokenization, context packing, Transformer
  architecture, pretraining, fine-tuning, and generation control. Conducted
  experiments on learning rate, warmup, dropout, training steps, and weight
  averaging, achieving a test PPL of 20.44.
process:
  - num: "01"
    title: "Architecture"
    desc: "31.7M-parameter decoder-only Transformer"
    pointGroups:
      - points:
          - "7 layers \u00b7 6 heads \u00b7 384 embedding dim"
          - "SwiGLU \u00b7 hidden 1024 \u00b7 bias-free + RMSNorm"
          - "GPT-2 BPE \u00b7 vocab 50,304 \u00b7 context packing"
          - "Causal self-attention \u00b7 tied embeddings"
  - num: "02"
    title: "Pretraining"
    desc: "TinyStories"
    pointGroups:
      - points:
          - "Learned basic story structure and language patterns"
  - num: "03"
    title: "Domain Adaptation"
    desc: "TinyStories + ROCStories"
    pointGroups:
      - points:
          - "Bridged the domain gap"
          - "10\u00d7 ROCStories upsampling"
  - num: "04"
    title: "Fine-tuning"
    desc: "ROCStories"
    pointGroups:
      - points:
          - "Adapted the model to 5-sentence story generation"
          - "Dropout + lower learning rate"
          - "Validation-based checkpoint selection"
  - num: "05"
    title: "Weight Averaging"
    desc: "Two fine-tuned checkpoints"
    pointGroups:
      - points:
          - "70% A + 30% B"
          - "Small but consistent PPL improvement"
  - num: "06"
    title: "Generation"
    desc: "Controlled decoding"
    pointGroups:
      - points:
          - "Temperature + top-p sampling"
          - "3-gram repetition blocking"
          - "Sentence-aware EOT control"
          - "Exactly 5-sentence stories"
experiments:
  - { label: "Learning Rate", value: "2e-4 \u00b7 3e-4 \u00b7 6e-4" }
  - { label: "Warmup", value: "50 \u00b7 500 steps" }
  - { label: "Dropout", value: "0.0 \u00b7 0.1 \u00b7 0.2" }
  - { label: "Training Steps", value: "15K \u00b7 30K \u00b7 40K \u00b7 50K" }
  - { label: "ROCStories Upsampling", value: "10\u00d7 \u00b7 50\u00d7" }
  - { label: "Weight Averaging", value: "70% A + 30% B" }
  - { label: "Generation Control", value: "Temperature=0.6 · Top-p=0.9 · Repetition penalty=1.3" }
  - { label: "Repetition Control", value: "No-repeat 3-gram blocking" }
  - { label: "Candidate Selection", value: "Best-of = 5" }
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

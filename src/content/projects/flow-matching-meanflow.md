---
number: "02"
kind: Research
title: Flow Matching & MeanFlow
subtitle: Generative Modeling with Flow-Based Methods
short: "Investigating x-, ε-, and v-prediction objectives, with a focus on one-step generation in high-dimensional settings."
tags: [PyTorch, Flow Matching, MeanFlow]
metricLine: x- / ε- / v-prediction · NFE = 1 
metrics:
  - { value: "x-prediction + v-loss", label: "Better high-dimensional performance" }
  - { value: "Larger Capacity + Schedule Shift", label: "Cleaner v-prediction results" }
  - { value: "NFE = 1", label: "One-step MeanFlow generation" }
description: >-
  Investigated Flow Matching and MeanFlow through a series of controlled
  experiments. Reproduced the prediction/loss comparisons from Back to Basics
  across different datasets and dimensions, then analyzed the degradation of
  v-prediction in high-dimensional settings. Tested model capacity and timestep
  scheduling as potential remedies, and implemented MeanFlow for one-step
  generation with NFE = 1.
demo: false
heroImage: "/projects/FM_MF.png"
process:
  - num: "01"
    title: "Baseline"
    desc: "Flow Matching + v-prediction at D = 2."
    setup:
      label: "Setup"
      items:
        - "Prediction / Loss: v-prediction / v-loss"
        - "Architecture: 5 hidden layers \u00b7 256 units \u00b7 ReLU"
        - "Time embedding: 128-d sinusoidal"
        - "Optimizer: Adam \u00b7 lr = 1e-3"
        - "Batch size: 1024"
        - "Training steps: 25,000"
        - "Sampling: Euler ODE \u00b7 50 steps"
        - "Generated samples: 2,048"
    image: "/projects/baseline.png"
  - num: "02"
    title: "Reproduce"
    desc: "4 prediction/loss combinations \u00d7 3 datasets \u00d7 3 dimensions = 36 experiments."
    pointGroups:
      - label: "Found:"
        points:
          - "v-prediction degrades in high dimensions"
          - "x-prediction scales better to high dimensions"
          - "x-prediction + v-loss performs better"
    image: "/projects/reproduce.png"
  - num: "03"
    title: "Rescue"
    desc: "Can we improve v-prediction in high dimensions?"
    pointGroups:
      - points:
          - "Tested model capacity"
          - "Tested timestep scheduling"
      - label: "Found:"
        points:
          - "Larger models reduce noise and scatter"
          - "Schedule shifting further improves results at hidden widths of 512 and 768"
          - "Best results come from larger capacity + schedule shift"
    image: "/projects/investigate.png"
  - num: "04"
    title: "MeanFlow"
    desc: "MeanFlow consistency training."
    pointGroups:
      - points:
          - "NFE = 1 \u00b7 One-step Generation"
          - "Comparable quality to multi-step sampling"
      - label: "Found:"
        points:
          - "One-step MeanFlow achieves comparable quality to multi-step Flow Matching"
          - "Generation cost reduced to NFE = 1"
    image: "/projects/meanflow.png"
report: "/FlowMatching_report.pdf"
order: 2
---

What surprised me most was how much the choice of prediction objective mattered as the data dimension increased. v-prediction worked well in low dimensions but became much harder to train at D=32, which led me to experiment with model capacity and timestep scheduling. I also found MeanFlow interesting because it approaches the sampling problem differently, allowing the model to generate a sample in a single step. This project gave me a better understanding of how seemingly small design choices can affect the behaviour of generative models.
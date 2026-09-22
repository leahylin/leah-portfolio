---
number: "04"
kind: Research
title: Self-Supervised Semantic Segmentation
subtitle: Learning Visual Representations Without Labels
short: "Learning patch representations with contrastive learning, spatial coordinates, and K-means — from a single unlabeled image."
tags: [PyTorch, CNN, Contrastive Learning, K-means]
metricLine: No labels · No pretrained models
metrics:
  - { value: "2,000", label: "Patches" }
  - { value: "K=7", label: "Clusters" }
  - { value: "4", label: "Preprocessing Variants" }
  - { value: "1", label: "Unlabeled Image" }
description: >-
  Investigated self-supervised semantic segmentation from a single unlabeled
  high-resolution image. Built a CNN-based representation learning pipeline
  from scratch, combining contrastive learning, edge-aware preprocessing,
  spatial coordinates, and K-means clustering to produce meaningful
  segmentation masks without pretrained models or manual labels.
demo: false
heroImage: "/projects/CNN-1.png"
process:
  - num: "01"
    title: "Preprocess"
    desc: "Can edge information help identify meaningful image regions?"
    setup:
      label: "Setup"
      items:
        - "Input: 1 high-resolution RGB image"
        - "Edge extraction: Sobel filters"
        - "Variants: Raw Sobel · CLAHE · Sharpening · CLAHE + Sharpening"
        - "Patch size: Small local image patches"
        - "Samples: 2,000 patches per variant"
  - num: "02"
    title: "Learn"
    desc: "Learn useful patch representations without labels."
    pointGroups:
      - label: "Method:"
        points:
          - "Generated two augmented views from each patch"
          - "Trained a CNN from scratch with contrastive loss"
          - "Pulled positive pairs together and separated negative samples"
      - label: "Found:"
        points:
          - "Contrastive learning produced meaningful patch-level representations"
          - "Removing the contrastive loss led to poor representations and weak clustering"
  - num: "03"
    title: "Cluster"
    desc: "Can learned representations be converted into meaningful regions?"
    pointGroups:
      - label: "Method:"
        points:
          - "Extracted CNN embeddings from overlapping patches"
          - "Appended scaled 2D spatial coordinates"
          - "Applied K-means clustering with K = 7"
          - "Mapped cluster assignments back to pixels"
      - label: "Found:"
        points:
          - "Combining visual features with spatial information produced coherent regions"
          - "Cluster quality depended strongly on the learned representation"
  - num: "04"
    title: "Compare"
    desc: "Which preprocessing strategy produces the most useful segmentation?"
    pointGroups:
      - label: "Compared:"
        points:
          - "Raw Sobel"
          - "CLAHE-enhanced"
          - "Sharpened"
          - "CLAHE + Sharpening"
      - label: "Found:"
        points:
          - "Raw Sobel achieved the lowest intra-cluster variance"
          - "Raw Sobel produced clearer segmentation boundaries"
          - "CLAHE + sharpening produced higher variance and more noise"
          - "Stronger preprocessing did not necessarily improve segmentation"
    image: "/projects/CNN-all.png"
report: "/CNN.pdf"
order: 4
---

What surprised me most was that stronger image preprocessing did not necessarily lead to better segmentation. Among the four variants, raw Sobel produced the lowest intra-cluster variance and clearer boundaries, while CLAHE + sharpening introduced more noise. The ablation experiments also showed how important contrastive learning was for learning useful representations. This project gave me a better understanding that segmentation quality depends not only on the clustering method, but also on the quality of the representation learned before clustering.

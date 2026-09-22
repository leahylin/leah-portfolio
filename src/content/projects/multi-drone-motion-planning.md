---
number: "03"
kind: Engineering
title: Multi-Drone Motion Planning
subtitle: RRT-Connect & Decision Making under Uncertainty
short: Two motion planning assessments covering centralized path planning and decision making under uncertainty.
tags: [Python, RRT-Connect, MCTS, MDP]
metricLine: 5 drones · 0% collision · 3K-dim space
metrics:
  - { value: "\u2191\u00a0Team Size", label: "\u2193\u00a0Success Rate" }
  - { value: "\u2191\u00a0Env. Complexity", label: "\u2191\u00a0Planning Time" }
  - { value: "\u2191\u00a0Action Space", label: "\u2193\u00a0Success Rate" }
  - { value: "\u2191\u00a0Planning Budget", label: "\u2191\u00a0Success Rate" }
description: >-
  Completed two motion planning assessments. The first implemented centralized
  Bi-directional RRT-Connect in a 3K-dimensional configuration space for
  multi-drone collision-free path planning. The second implemented Monte Carlo
  Tree Search with UCT and progressive widening for decision making under
  uncertainty, using simulation-guided action selection and smart rollouts.
demo: false
heroImage: "/projects/drone-hero.png"
process:
  - num: "01"
    title: "Assessment 1 \u2014 Bidirectional RRT-Connect"
    desc: "**Centralized** Multi-Drone Motion Planning"
    pointGroups:
      - points:
          - "Model each drone as a 3D position **(x, y, z)**"
          - "Construct a **3K-dimensional joint configuration space**"
          - "Grow two trees from the start and goal configurations"
          - "Randomly sample configurations and extend the trees"
          - "Check collision-free paths and connect the two trees"
          - "Extract and validate the final path"
          - "Analyse performance across different environment complexities and team sizes"
      - label: "Explore:"
        points:
          - "**Environment Complexity:** Harder environments required more iterations and planning time, while narrow passages reduced the success rate to **76.7%**."
          - "**Team Size:** As the number of drones increased, planning time, tree size, and path length also increased, with success dropping from **100% for 1\u20134 drones to 73.3% for 8 drones**."
    image: "/projects/drone-hero.png"
  - num: "02"
    title: "Assessment 2 \u2014 MCTS-UCT"
    desc: "**Decision Making under Uncertainty**"
    pointGroups:
      - points:
          - "Use **UCT** to balance exploration and exploitation"
          - "Apply **progressive widening** to control the growing action space"
          - "Use simulation-guided action selection and smart rollouts"
          - "**Backpropagate** discounted rewards through the search tree"
          - "Analyse performance across different team sizes and planning budgets"
      - label: "Explore:"
        points:
          - "**Team Size:** With **8 possible actions** per drone, the joint action space grew from **8 to 4,096 actions** as the team size increased from **1 to 4 drones**. Under a fixed planning budget, success dropped from **83% to 10%**."
          - "**Planning Budget:** Increasing the planning time from **0.5 to 3.5 s/step** improved success from **16.7% to 56.7%**, with diminishing returns beyond roughly **2\u20133 s/step**."
    image: "/projects/drone2.png"
report: "/multi-drone2.pdf"
order: 3
---

What surprised me most was how quickly complexity became the main challenge in multi-drone planning. In RRT-Connect, the joint configuration space grew with the number of drones, while in MCTS-UCT, the joint action space grew exponentially. Across both assessments, I found that improving planning quality often came with a higher computational cost. This project gave me a better understanding of the trade-offs involved in designing scalable planning algorithms.
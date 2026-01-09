---
title: "Mario"
description: "Build a half-pyramid of hashes (#) given a height."
difficulty: "easy"
estimated_time: "30-60 minutes"
tags: ["loops","output","beginner"]
---

Write a program that prompts the user for a non-negative integer height (e.g., between 0 and 23) and prints a right-aligned half-pyramid of that height using the `#` character. Non-positive heights should produce no pyramid.

Example (height = 3):

  #
 ##
###

Tasks:
- Prompt for an integer height and validate the input range.
- Print a half-pyramid aligned to the right for the given height.

Hints:
- Use nested loops: the outer loop over rows, the inner loops for spaces and `#` characters.
- Start with a small example on paper to determine how many spaces and hashes each row needs.

Notes: Add sample tests and expected outputs in a `tests/` folder if you want to add automated checks later.

## Getting Started

Log into [cs50.dev](https://api.phucnguyen.xyz/auth/github?returnTo=https%3A%2F%2Fphucnguyen.xyz%2Fcourses%2Fcs50%2F%3FenrollCourseSlug%3Dcs50%26enrollWeek%3D0%26openSubmit%3D1%26problem%3Dmario) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/x/mario
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/x/mario
```

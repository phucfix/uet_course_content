---
title: "Readability"
description: "Analyze a text and compute a reading-grade level using an index like Coleman-Liau."
difficulty: "medium"
estimated_time: "1-2 hours"
tags: ["text-processing","strings"]
---

Write a program that asks for a block of text and computes a reading-grade level using a readability formula (e.g., Coleman-Liau index). The program should count letters, words, and sentences, compute the index, and print the appropriate grade level (e.g., "Grade 8" or "Before Grade 1").

Tasks:
- Parse the text to count alphabetic characters (letters), words (separated by spaces), and sentences (ending in `.?!`).
- Compute the index using the chosen formula and round to the nearest integer.
- Print the resulting grade phrasing.

Hints:
- Be careful about what counts as a letter or a sentence delimiter.
- Test with short and long texts to validate behavior.

Optional: provide sample texts and expected outputs for manual or automatic tests.

## Getting Started

Log into [cs50.dev](http://localhost:3000/auth/github?returnTo=http%3A%2F%2Flocalhost%3A5173%2Fcourses%2Fcs50%2F%3FenrollCourseSlug%3Dcs50%26enrollWeek%3D2%26openSubmit%3D1%26problem%3Dreadability) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/x/readability
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/x/readability
```

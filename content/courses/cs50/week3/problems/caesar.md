---
title: "Caesar Cipher"
description: "Implement a Caesar cipher that shifts alphabetical characters by a numeric key."
difficulty: "easy"
estimated_time: "30-90 minutes"
tags: ["cryptography","strings"]
---

Write a program that accepts a non-negative integer key (e.g., 0..25) and plaintext, then outputs the ciphertext where each alphabetical character is shifted by the key. Preserve case and leave non-alphabetic characters unchanged.

Tasks:
- Parse and validate the key from command-line arguments or prompt the user.
- Iterate over the plaintext and apply the shift to letters only.
- Preserve uppercase and lowercase letters; leave punctuation and spaces unchanged.

Example:
- Key 1, plaintext "Hello, World!" -> ciphertext "Ifmmp, Xpsme!"

Hints:
- Use ASCII arithmetic and modulo 26 to wrap around.
- Write helper functions to shift a character and to validate the key.

## Getting Started

Log into [cs50.dev](https://api.phucnguyen.xyz/auth/github?returnTo=https%3A%2F%2Fphucnguyen.xyz%2Fcourses%2Fcs50%2F%3FenrollCourseSlug%3Dcs50%26enrollWeek%3D3%26openSubmit%3D1%26problem%3Dcaesar) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/x/caesar
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/x/caesar
```

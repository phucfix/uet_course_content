---
title: "Substitution Cipher"
description: "Implement a substitution cipher that replaces each letter according to a 26-character key."
difficulty: "hard"
estimated_time: "2-4 hours"
tags: ["cryptography","strings","data-structures"]
---

Write a program that accepts a 26-character key (containing each letter exactly once) and plaintext, then outputs the ciphertext produced by substituting each alphabetical character according to the key. Preserve case and leave non-alphabetic characters unchanged.

Tasks:
- Validate that the provided key contains 26 unique alphabetic characters.
- Normalize the key to a consistent case for mapping and preserve plaintext case in output.
- Implement the substitution mapping and apply it to the input text.

Example:
- Key: `YTNSHKVEFXRBAUQZCLWDMIPGJO`
- Plaintext: "HELLO"
- Ciphertext: "SAAQQ"

Hints:
- Use an array or map to store the substitution for quick lookup.
- Carefully handle duplicate letters or invalid key lengths during validation.

Optional: include a small `tests/` folder with sample plaintexts and expected ciphertexts.

## Getting Started

Log into [cs50.dev](https://api.phucnguyen.xyz/auth/github?returnTo=https%3A%2F%2Fphucnguyen.xyz%2Fcourses%2Fcs50%2F%3FenrollCourseSlug%3Dcs50%26enrollWeek%3D5%26openSubmit%3D1%26problem%3Dsubstitution) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/x/substitution
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/x/substitution
```

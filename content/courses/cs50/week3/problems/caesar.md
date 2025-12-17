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

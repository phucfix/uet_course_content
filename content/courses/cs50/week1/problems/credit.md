---
title: "Credit Card Validation"
description: "Validate credit card numbers and detect card types using the Luhn algorithm and digit patterns."
difficulty: "medium"
estimated_time: "1-2 hours"
tags: ["algorithms","strings","validation"]
---

Write a program that prompts for a credit card number (as a string), checks whether it is valid using the Luhn algorithm, and prints the card type (`VISA`, `AMEX`, `MASTERCARD`) or `INVALID`.

Tasks:
- Read the card number as a string to preserve leading digits.
- Implement the Luhn checksum algorithm to determine validity.
- Detect card type by length and starting digits (e.g., 16-digit starting with 4 -> VISA; 15-digit starting with 34 or 37 -> AMEX; 16-digit ranges 51-55 -> MASTERCARD).

Hints:
- Process digits from right to left; double every second digit and sum digits if >9.
- Write helper functions to compute checksum and to identify card type.

Testing: prepare representative valid and invalid numbers and compare program output.

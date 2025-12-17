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

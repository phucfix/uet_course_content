---
title: "Cash"
description: "Greedy algorithm for change"
week: 1
course: "CS50x"
type: "psets"
url: "/courses/cs50/weeks/1/psets/cash/"
---

## Problem to Solve

Suppose you work at a store and a customer gives you $1.00 (100 cents) for candy that costs $0.50 (50 cents). You'll need to pay them their "change," the amount left over after paying for the cost of the candy. When making change, odds are you want to minimize the number of coins you're dispensing for each customer, lest you run out (or annoy the customer!).

In a file called `cash.c`, implement a program in C that prints the minimum coins needed to make the given amount of change, in cents, as in the below:

```
$ ./cash
Change owed: 25
1
```

## Background

When making change, odds are you want to minimize the number of coins you're dispensing for each customer, lest you run out (or annoy the customer!). Luckily, computer science has given cashiers everywhere ways to minimize numbers of coins due: greedy algorithms.

According to the National Institute of Standards and Technology (NIST), a **greedy algorithm** is one "that always takes the best immediate, or local, solution while finding an answer. Greedy algorithms find the overall, or globally, optimal solution for some optimization problems, but may find less-than-optimal solutions for some instances of other problems."

What's all that mean? Well, suppose that a cashier owes a customer some change and in that cashier's drawer are quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢). The problem to be solved is to decide which coins and how many of each to hand to the customer. Think of a "greedy" cashier as one who wants to take the biggest bite out of this problem as possible with each coin they take out of the drawer.

## Specification

- Implement your program in a file called `cash.c`.
- Prompt the user for the amount of change owed, in cents, using `get_int`.
- If the user provides a non-negative value, print the minimum number of coins needed to make that change.
- If the user provides a negative value, prompt again.
- You can assume that the only coins available are quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢).

## Examples

```
$ ./cash
Change owed: 41
4
```

```
$ ./cash
Change owed: 160
7
```

## Hints

- Think "greedily." Start with the largest coin (quarters) and use as many as you can before moving to the next denomination.
- Consider using the modulo `%` operator to determine the remaining cents after using some number of a particular coin.
- Keep track of the total number of coins used.

## Getting Started

Log into [cs50.dev](http://localhost:3000/auth/github?returnTo=http%3A%2F%2Flocalhost%3A5173%2Fcourses%2Fcs50%2F%3FenrollCourseSlug%3Dcs50%26enrollWeek%3D1%26openSubmit%3D1%26problem%3Dcash) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/x/cash
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/x/cash
```

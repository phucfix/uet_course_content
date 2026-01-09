---
title: "Credit"
description: "Validate credit card numbers using Luhn’s Algorithm"
week: 1
course: "CS50x"
type: "psets"
url: "/courses/cs50/weeks/1/psets/credit/"
---

## Problem to Solve

A credit (or debit) card, of course, is a plastic card with which you can pay for goods and services. Printed on that card is a number that's also stored in a database somewhere, so that when your card is used to buy something, the creditor knows whom to bill. There are a lot of people with credit cards in this world, so those numbers are pretty long: American Express uses 15-digit numbers, MasterCard uses 16-digit numbers, and Visa uses 13- and 16-digit numbers.

In a file called `credit.c`, implement a program in C that checks whether a provided credit card number is valid according to Luhn's algorithm.

## Background

So what's the secret formula? Well, most cards use an algorithm invented by Hans Peter Luhn of IBM. According to Luhn's algorithm, you can determine if a credit card number is (syntactically) valid as follows:

1. Multiply every other digit by 2, starting with the number's second-to-last digit, and then add those products' digits together.
2. Add the sum to the sum of the digits that weren't multiplied by 2.
3. If the total's last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!

That's kind of confusing, so let's try an example with David's Visa: 4003600000000014.

1. For the sake of discussion, let's first underline every other digit, starting with the number's second-to-last digit:
   **4**0**0**3**6**0**0**0**0**0**0**0**0**0**1**4

2. Okay, let's multiply each of the underlined digits by 2:
   1•2 + 0•2 + 0•2 + 0•2 + 0•2 + 6•2 + 0•2 + 4•2
   = 2 + 0 + 0 + 0 + 0 + 12 + 0 + 8

3. Now let's add those products' digits (i.e., not the products themselves) together:
   2 + 0 + 0 + 0 + 0 + 1 + 2 + 0 + 8 = 13

4. Now let's add that sum (13) to the sum of the digits that weren't multiplied by 2:
   13 + 4 + 0 + 0 + 0 + 0 + 0 + 3 + 0 = 20

5. Yup, the last digit in that sum (20) is a 0, so David's card is legit!

## Specification

- Implement your program in a file called `credit.c`.
- Prompt the user for a credit card number using `get_long`.
- Determine whether the card number is valid using Luhn's algorithm.
- Print `AMEX` if the number is a valid American Express number, `MASTERCARD` if valid MasterCard, `VISA` if valid Visa, or `INVALID` otherwise.

## Card Number Formats

- **American Express** uses 15-digit numbers, starting with 34 or 37.
- **MasterCard** uses 16-digit numbers, starting with 51, 52, 53, 54, or 55.
- **Visa** uses 13- or 16-digit numbers, starting with 4.

## Examples

```
$ ./credit
Number: 4003600000000014
VISA
```

```
$ ./credit
Number: 378282246310005
AMEX
```

```
$ ./credit
Number: 1234567890
INVALID
```

## Hints

- Read the card number as a `long` using `get_long`.
- Use a loop to iterate through the digits of the number.
- Use the modulo `%` and integer division `/` operators to extract digits.

## Getting Started

Log into [cs50.dev](http://localhost:3000/auth/github?returnTo=http%3A%2F%2Flocalhost%3A5173%2Fcourses%2Fcs50%2F%3FenrollCourseSlug%3Dcs50%26enrollWeek%3D1%26openSubmit%3D1%26problem%3Dcredit) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/x/credit
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/x/credit
```

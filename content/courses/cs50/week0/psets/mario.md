---
title: "Mario"
description: "Print a half-pyramid using #"
week: 0
course: "CS50x"
type: "psets"
url: "/courses/cs50/weeks/0/psets/mario/"
---

## Problem to Solve

Toward the beginning of World 1-1 in Nintendo's Super Mario Brothers, Mario must hop over adjacent pyramids of blocks. Let's recreate those pyramids in C, albeit in text, using hashes (`#`) for bricks. Each hash is a bit taller than it is wide, so the pyramids themselves will also be taller than they are wide.

## Background

The program we'll write will be called `mario`. And let's allow the user to decide just how tall the pyramids should be by first prompting them for a positive integer between, say, 1 and 8, inclusive.

Here's how the program might work if the user inputs `8` when prompted:

```
$ ./mario
Height: 8
       #
      ##
     ###
    ####
   #####
  ######
 #######
########
```

Here's how the program might work if the user inputs `4` when prompted:

```
$ ./mario
Height: 4
   #
  ##
 ###
####
```

Here's how the program might work if the user inputs `2` when prompted:

```
$ ./mario
Height: 2
 #
##
```

And here's how the program might work if the user inputs `1` when prompted:

```
$ ./mario
Height: 1
#
```

If the user doesn't, in fact, input a positive integer between 1 and 8, inclusive, when prompted, the program should re-prompt the user until they cooperate:

```
$ ./mario
Height: -1
Height: 0
Height: 42
Height: 50
Height: 4
   #
  ##
 ###
####
```

## Specification

- Write, in a file called `mario.c`, a program that recreates this half-pyramid using hashes (`#`) for blocks.
- To make things more interesting, first prompt the user for the half-pyramid's height, a positive integer between 1 and 8, inclusive.
- If the user fails to provide a positive integer no greater than 8, you should re-prompt for the same again.
- Then, generate (with the help of `printf` and one or more loops) the desired half-pyramid.
- Take care to align the bottom-left corner of your half-pyramid with the left-hand edge of your terminal window.

## Hints

- First, decide what values are valid inputs (i.e., what heights are allowed).
- Use a loop to repeatedly prompt for valid input.
- For each row, first print spaces, then print hashes.
- Consider: for row `i`, how many spaces and how many hashes should be printed?

## Getting Started

Log into [cs50.dev](http://localhost:3000/auth/github?returnTo=http%3A%2F%2Flocalhost%3A5173%2Fcourses%2Fcs50%2F%3FenrollCourseSlug%3Dcs50%26enrollWeek%3D0%26openSubmit%3D1%26problem%3Dmario) using your GitHub account and click Authorize cs50, then close the tab.

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

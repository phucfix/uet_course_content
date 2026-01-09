---
title: "FizzBuzz"
description: "Classic FizzBuzz exercise to practice loops and conditionals."
---

## Problem to Solve

FizzBuzz là một bài tập kinh điển trong lập trình, thường được sử dụng trong các buổi phỏng vấn. Nhiệm vụ của bạn là viết chương trình in các số từ 1 đến 100, nhưng với một vài quy tắc đặc biệt.

## Background

Bài tập này giúp bạn làm quen với:
- Vòng lặp `for` trong Python
- Câu điều kiện `if-elif-else`
- Toán tử chia lấy dư (modulo) `%`
- Thứ tự kiểm tra điều kiện

## Specification

Viết chương trình `fizzbuzz.py` in các số từ 1 đến 100 theo quy tắc:

1. Nếu số chia hết cho **3**, in `"Fizz"` thay vì số
2. Nếu số chia hết cho **5**, in `"Buzz"` thay vì số
3. Nếu số chia hết cho **cả 3 và 5**, in `"FizzBuzz"`
4. Nếu không thỏa điều kiện nào, in số đó

## Examples

```
$ python fizzbuzz.py
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
...
```

## Hints

- Sử dụng `for i in range(1, 101):` để lặp từ 1 đến 100
- Kiểm tra điều kiện chia hết cho cả 3 và 5 **trước** khi kiểm tra riêng từng số
- Toán tử `%` trả về phần dư: `15 % 3 == 0` nghĩa là 15 chia hết cho 3
- Thứ tự điều kiện rất quan trọng!

## Getting Started

Log into [cs50.dev](http://localhost:3000/auth/github?returnTo=http%3A%2F%2Flocalhost%3A5173%2Fcourses%2Fpython%2F%3FenrollCourseSlug%3Dpython%26enrollWeek%3D0%26openSubmit%3D1%26problem%3Dfizzbuzz) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/python/fizzbuzz
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/python/fizzbuzz
```

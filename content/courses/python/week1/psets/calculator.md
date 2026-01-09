---
title: "Calculator"
week: 1
course: "Python Programming"
description: "Xây dựng một máy tính đơn giản"
---

## Problem to Solve

Trong bài tập này, bạn sẽ xây dựng một máy tính đơn giản bằng Python. Máy tính này sẽ nhận hai số từ người dùng, một phép toán, và hiển thị kết quả.

## Background

Máy tính là một trong những chương trình cơ bản nhất mà lập trình viên thường viết khi học một ngôn ngữ mới. Nó giúp bạn hiểu về:
- Nhận input từ người dùng
- Chuyển đổi kiểu dữ liệu (string → number)
- Sử dụng câu điều kiện (if-elif-else)
- Xử lý lỗi cơ bản

## Specification

Viết một chương trình `calculator.py` thực hiện các yêu cầu sau:

1. Nhận hai số từ người dùng (có thể là số thực)
2. Nhận phép toán (+, -, *, /)
3. Tính toán và hiển thị kết quả
4. Xử lý trường hợp chia cho 0 (hiển thị thông báo lỗi)
5. Xử lý trường hợp phép toán không hợp lệ

## Examples

```
$ python calculator.py
Nhập số thứ nhất: 10
Nhập số thứ hai: 5
Nhập phép toán (+, -, *, /): +
Kết quả: 15.0
```

```
$ python calculator.py
Nhập số thứ nhất: 10
Nhập số thứ hai: 0
Nhập phép toán (+, -, *, /): /
Lỗi: Không thể chia cho 0!
```

```
$ python calculator.py
Nhập số thứ nhất: 7.5
Nhập số thứ hai: 2.5
Nhập phép toán (+, -, *, /): *
Kết quả: 18.75
```

## Hints

- Sử dụng `input()` để nhận dữ liệu từ người dùng
- Sử dụng `float()` để chuyển đổi string thành số thực
- Sử dụng `if-elif-else` để xử lý các phép toán khác nhau
- Sử dụng `try-except` để bắt lỗi khi người dùng nhập sai định dạng

## Getting Started

Log into [cs50.dev](http://localhost:3000/auth/github?returnTo=http%3A%2F%2Flocalhost%3A5173%2Fcourses%2Fpython%2F%3FenrollCourseSlug%3Dpython%26enrollWeek%3D1%26openSubmit%3D1%26problem%3Dcalculator) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/python/calculator
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/python/calculator
```


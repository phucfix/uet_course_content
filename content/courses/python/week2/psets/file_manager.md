---
title: "File Manager"
week: 2
course: "Python Programming"
description: "Xây dựng một chương trình quản lý file đơn giản"
---

## Problem to Solve

Bạn sẽ xây dựng một chương trình quản lý file với giao diện dòng lệnh (CLI). Chương trình cho phép người dùng thực hiện các thao tác cơ bản với file như đọc, ghi, tìm kiếm và thống kê.

## Background

Làm việc với file là một kỹ năng quan trọng trong lập trình Python. Module này giúp bạn hiểu:
- Mở và đóng file với `open()` và `with` statement
- Đọc file với `read()`, `readline()`, `readlines()`
- Ghi file với `write()` và `writelines()`
- Xử lý exceptions với `try-except`
- Tổ chức code với functions

## Specification

Viết một chương trình `file_manager.py` với menu cho phép:

### 1. Đọc file
- Nhập tên file từ người dùng
- Hiển thị nội dung file
- Xử lý lỗi nếu file không tồn tại

### 2. Ghi file
- Nhập tên file và nội dung
- Hỏi người dùng muốn ghi đè (overwrite) hay thêm vào (append)
- Thông báo khi ghi thành công

### 3. Tìm kiếm trong file
- Nhập tên file và từ khóa cần tìm
- Hiển thị các dòng chứa từ khóa và số dòng

### 4. Đếm thống kê
- Nhập tên file
- Hiển thị: số dòng, số từ, số ký tự

### 5. Thoát

## Examples

```
$ python file_manager.py
=== FILE MANAGER ===
1. Đọc file
2. Ghi file
3. Tìm kiếm trong file
4. Đếm thống kê
5. Thoát

Chọn chức năng: 1
Nhập tên file: sample.txt
--- Nội dung file ---
Hello World!
This is a sample file.
Python is awesome.
---------------------

Chọn chức năng: 4
Nhập tên file: sample.txt
--- Thống kê ---
Số dòng: 3
Số từ: 9
Số ký tự: 52
----------------
```

## Hints

- Sử dụng `with open(filename, mode) as f:` để đảm bảo file được đóng đúng cách
- Mode: `'r'` (đọc), `'w'` (ghi đè), `'a'` (thêm vào)
- Sử dụng `try-except FileNotFoundError` để xử lý file không tồn tại
- Tạo function riêng cho mỗi chức năng để code dễ đọc
- Dùng `split()` để đếm từ, `len()` để đếm ký tự

## Getting Started

Log into [cs50.dev](https://api.phucnguyen.xyz/auth/github?returnTo=https%3A%2F%2Fphucnguyen.xyz%2Fcourses%2Fpython%2F%3FenrollCourseSlug%3Dpython%26enrollWeek%3D2%26openSubmit%3D1%26problem%3Dfile_manager) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/python/file_manager
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/python/file_manager
```


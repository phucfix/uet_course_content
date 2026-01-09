---
title: "Create Table"
description: "Design a table schema and create it in SQLite."
---

## Problem to Solve

Bạn sẽ học cách thiết kế và tạo bảng trong SQLite. Đây là kỹ năng nền tảng quan trọng nhất trong việc làm việc với cơ sở dữ liệu.

## Background

Trong SQL, bảng (table) là cấu trúc cơ bản để lưu trữ dữ liệu. Mỗi bảng gồm:
- **Columns (cột)**: Định nghĩa loại dữ liệu được lưu
- **Rows (hàng)**: Chứa dữ liệu thực tế
- **Constraints**: Quy tắc đảm bảo tính toàn vẹn dữ liệu

## Specification

Tạo file `students.sql` chứa các lệnh SQL để:

### 1. Tạo bảng `students`
```sql
- id: INTEGER, PRIMARY KEY, tự động tăng
- name: TEXT, bắt buộc (NOT NULL)
- email: TEXT, duy nhất (UNIQUE)
- age: INTEGER, phải >= 18
- gpa: REAL, trong khoảng 0.0 đến 4.0
- enrollment_date: DATE, mặc định là ngày hiện tại
```

### 2. Thêm ít nhất 5 sinh viên mẫu

### 3. Viết các queries
- Liệt kê tất cả sinh viên
- Tìm sinh viên có GPA > 3.5
- Đếm số sinh viên theo độ tuổi

## Examples

```sql
-- Tạo bảng
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    age INTEGER CHECK(age >= 18),
    gpa REAL CHECK(gpa >= 0.0 AND gpa <= 4.0),
    enrollment_date DATE DEFAULT CURRENT_DATE
);

-- Thêm dữ liệu
INSERT INTO students (name, email, age, gpa)
VALUES ('Nguyen Van A', 'a@uet.edu.vn', 20, 3.5);

-- Query
SELECT * FROM students WHERE gpa > 3.5;
```

## Hints

- Sử dụng `AUTOINCREMENT` để id tự động tăng
- `CHECK` constraint giúp validate dữ liệu
- `DEFAULT` thiết lập giá trị mặc định
- Chạy file SQL bằng: `sqlite3 database.db < students.sql`

## Getting Started

Log into [cs50.dev](http://localhost:3000/auth/github?returnTo=http%3A%2F%2Flocalhost%3A5173%2Fcourses%2Fdatabase%2F%3FenrollCourseSlug%3Ddatabase%26enrollWeek%3D0%26openSubmit%3D1%26problem%3Dcreate_table) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/database/create_table
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/database/create_table
```

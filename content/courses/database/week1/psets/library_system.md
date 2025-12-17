---
title: "Library Management System"
week: 1
course: "Database Systems"
description: "Thiết kế database cho hệ thống quản lý thư viện"
---

# Library Management System

Thiết kế và tạo database cho hệ thống quản lý thư viện.

## Yêu cầu

### Tables cần thiết:

1. **books**: Thông tin sách
   - id, title, author, isbn, published_year, category_id

2. **authors**: Thông tin tác giả
   - id, name, bio

3. **members**: Thông tin thành viên
   - id, name, email, phone, membership_date

4. **borrowings**: Thông tin mượn sách
   - id, book_id, member_id, borrow_date, return_date, status

5. **categories**: Thể loại sách
   - id, name

## Yêu cầu

1. Tạo các tables với đầy đủ constraints
2. Thêm sample data cho mỗi table
3. Viết các queries:
   - Tìm sách chưa được trả
   - Tìm thành viên mượn nhiều sách nhất
   - Tìm sách phổ biến nhất
   - Tìm sách quá hạn trả

## Gợi ý

- Sử dụng FOREIGN KEY constraints
- Sử dụng INDEX cho các cột thường được tìm kiếm
- Sử dụng CHECK constraints cho status
- Normalize database đến 3NF

## How to check / Cách kiểm tra

Chạy:

```bash
check50 uet36/2025/x/{tên_problem}
```

(Thay {tên_problem} bằng tên problem thật sự)

## How to submit / Cách nộp

Chạy:

```bash
submit50 uet36/2025/x/{tên_problem}
```

(Thay {tên_problem} bằng tên problem thật sự)


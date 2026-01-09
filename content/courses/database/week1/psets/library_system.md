---
title: "Library Management System"
week: 1
course: "Database Systems"
description: "Thiết kế database cho hệ thống quản lý thư viện"
---

## Problem to Solve

Bạn được giao nhiệm vụ thiết kế và xây dựng cơ sở dữ liệu cho một hệ thống quản lý thư viện. Hệ thống cần lưu trữ thông tin về sách, tác giả, thể loại, thành viên và các giao dịch mượn/trả sách.

## Background

Một hệ thống quản lý thư viện hiệu quả cần:
- **Tính toàn vẹn dữ liệu**: Đảm bảo dữ liệu chính xác và nhất quán
- **Mối quan hệ rõ ràng**: Liên kết giữa sách, tác giả, và giao dịch mượn
- **Truy vấn hiệu quả**: Tìm kiếm sách, theo dõi tình trạng mượn
- **Chuẩn hóa**: Tránh trùng lặp dữ liệu

## Specification

### Tables cần tạo

**1. categories** - Thể loại sách
```sql
- id (INTEGER, PRIMARY KEY)
- name (TEXT, NOT NULL, UNIQUE)
- description (TEXT)
```

**2. authors** - Thông tin tác giả
```sql
- id (INTEGER, PRIMARY KEY)
- name (TEXT, NOT NULL)
- bio (TEXT)
- birth_year (INTEGER)
```

**3. books** - Thông tin sách
```sql
- id (INTEGER, PRIMARY KEY)
- title (TEXT, NOT NULL)
- isbn (TEXT, UNIQUE)
- published_year (INTEGER)
- category_id (INTEGER, FOREIGN KEY → categories.id)
- copies_available (INTEGER, DEFAULT 1)
```

**4. book_authors** - Quan hệ nhiều-nhiều giữa sách và tác giả
```sql
- book_id (INTEGER, FOREIGN KEY → books.id)
- author_id (INTEGER, FOREIGN KEY → authors.id)
- PRIMARY KEY (book_id, author_id)
```

**5. members** - Thông tin thành viên
```sql
- id (INTEGER, PRIMARY KEY)
- name (TEXT, NOT NULL)
- email (TEXT, UNIQUE)
- phone (TEXT)
- membership_date (DATE, DEFAULT CURRENT_DATE)
```

**6. borrowings** - Thông tin mượn sách
```sql
- id (INTEGER, PRIMARY KEY)
- book_id (INTEGER, FOREIGN KEY → books.id)
- member_id (INTEGER, FOREIGN KEY → members.id)
- borrow_date (DATE, NOT NULL)
- due_date (DATE, NOT NULL)
- return_date (DATE)
- status (TEXT, CHECK IN ('borrowed', 'returned', 'overdue'))
```

### Queries cần viết

1. **Tìm sách chưa được trả** - Liệt kê tất cả sách đang được mượn
2. **Top 5 thành viên mượn nhiều sách nhất** 
3. **Sách phổ biến nhất** - Top 10 sách được mượn nhiều nhất
4. **Sách quá hạn** - Sách chưa trả và đã quá due_date
5. **Tìm sách theo tác giả hoặc thể loại**

## Sample Data

Thêm ít nhất:
- 5 thể loại
- 10 tác giả
- 20 cuốn sách
- 10 thành viên
- 30 giao dịch mượn sách (cả đã trả và chưa trả)

## Hints

- Sử dụng `FOREIGN KEY ... REFERENCES` để tạo quan hệ
- Dùng `CREATE INDEX` cho các cột thường được tìm kiếm (title, isbn, name)
- Dùng `CHECK` constraint để giới hạn giá trị hợp lệ
- Sử dụng `JOIN` để kết hợp dữ liệu từ nhiều bảng
- Dùng `GROUP BY` và `COUNT()` cho các thống kê

## Getting Started

Log into [cs50.dev](https://api.phucnguyen.xyz/auth/github?returnTo=https%3A%2F%2Fphucnguyen.xyz%2Fcourses%2Fdatabase%2F%3FenrollCourseSlug%3Ddatabase%26enrollWeek%3D1%26openSubmit%3D1%26problem%3Dlibrary_system) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/database/library_system
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/database/library_system
```


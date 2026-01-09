---
title: "Static Homepage"
description: "Create a static homepage with header, nav, and footer." 
---

## Problem to Solve

Tạo một trang web tĩnh đơn giản sử dụng HTML và CSS. Đây là bước đầu tiên để trở thành một web developer.

## Background

Một trang web cơ bản gồm:
- **HTML**: Cấu trúc nội dung (content structure)
- **CSS**: Định dạng và style (presentation)

Trong bài này, bạn sẽ học các thẻ HTML cơ bản và cách áp dụng CSS để tạo giao diện đẹp.

## Specification

Tạo file `index.html` và `style.css` với các yêu cầu sau:

### Cấu trúc HTML

1. **Header**
   - Logo hoặc tên website
   - Navigation menu với ít nhất 3 links

2. **Main Content**
   - Tiêu đề chính (h1)
   - Đoạn văn giới thiệu (p)
   - Ít nhất một hình ảnh (img)
   - Một danh sách (ul hoặc ol)

3. **Footer**
   - Copyright text
   - Links đến social media

### Yêu cầu CSS

- Đặt font family cho toàn trang
- Màu nền và màu chữ
- Căn giữa nội dung
- Style cho navigation menu (ngang hoặc dọc)
- Hover effect cho links

## Examples

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Homepage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <h1>Welcome to My Website</h1>
        <p>This is my first webpage!</p>
    </main>
    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>
```

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

nav a {
    text-decoration: none;
    padding: 10px;
}

nav a:hover {
    background-color: #f0f0f0;
}
```

## Hints

- Luôn bắt đầu với `<!DOCTYPE html>`
- Sử dụng semantic tags: `<header>`, `<nav>`, `<main>`, `<footer>`
- Link CSS bằng `<link rel="stylesheet" href="style.css">`
- Sử dụng class thay vì id để dễ tái sử dụng
- Test trang trên trình duyệt thường xuyên

## Getting Started

Log into [cs50.dev](https://api.phucnguyen.xyz/auth/github?returnTo=https%3A%2F%2Fphucnguyen.xyz%2Fcourses%2Fweb-dev%2F%3FenrollCourseSlug%3Dweb-dev%26enrollWeek%3D0%26openSubmit%3D1%26problem%3Dstatic_page) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/web/static_page
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/web/static_page
```

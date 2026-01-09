---
title: "Personal Portfolio"
week: 1
course: "Web Development"
description: "Tạo một trang portfolio cá nhân"
---

## Problem to Solve

Bạn sẽ xây dựng một trang portfolio cá nhân để giới thiệu bản thân, kỹ năng và các dự án. Đây là một bài tập quan trọng giúp bạn thực hành HTML và CSS, đồng thời tạo ra một sản phẩm thực tế có thể sử dụng khi xin việc.

## Background

Một portfolio website chuyên nghiệp cần:
- **Thiết kế đẹp mắt**: Màu sắc hài hòa, typography rõ ràng
- **Responsive**: Hiển thị tốt trên mọi thiết bị
- **User-friendly**: Dễ điều hướng, thông tin rõ ràng
- **Semantic HTML**: Sử dụng đúng các thẻ HTML5

## Specification

### Cấu trúc trang

**1. Header / Navigation**
```
- Logo hoặc tên của bạn
- Menu điều hướng: Home, About, Projects, Contact
- Menu responsive (hamburger menu trên mobile)
```

**2. Hero Section**
```
- Ảnh đại diện hoặc illustration
- Tên và tiêu đề (ví dụ: "Frontend Developer")
- Một câu giới thiệu ngắn
- Nút Call-to-Action (Contact Me, View Projects)
```

**3. About Section**
```
- Giới thiệu chi tiết về bản thân
- Danh sách kỹ năng (có thể dùng progress bars hoặc icons)
- Học vấn và kinh nghiệm
```

**4. Projects Section**
```
- Grid hiển thị ít nhất 3 dự án
- Mỗi dự án có: hình ảnh, tiêu đề, mô tả ngắn
- Hover effect để hiển thị thêm thông tin
- Link đến dự án hoặc GitHub
```

**5. Contact Section**
```
- Form liên hệ: Name, Email, Message
- Thông tin liên hệ khác: email, phone
- Links đến social media
```

**6. Footer**
```
- Copyright
- Social media icons
- Back to top button
```

### Yêu cầu CSS

- **Layout**: Sử dụng Flexbox hoặc CSS Grid
- **Responsive**: Mobile-first design với media queries
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Colors**: Sử dụng CSS Variables cho color scheme
- **Typography**: Chọn font từ Google Fonts
- **Animations**: Hover effects, smooth scrolling
- **Transitions**: Smooth transitions cho các interactive elements

## Examples

```html
<!-- Ví dụ cấu trúc Hero Section -->
<section class="hero">
  <div class="hero__content">
    <img src="avatar.jpg" alt="Profile" class="hero__avatar">
    <h1 class="hero__title">Nguyen Van A</h1>
    <p class="hero__subtitle">Frontend Developer</p>
    <a href="#contact" class="btn btn--primary">Contact Me</a>
  </div>
</section>
```

```css
/* Ví dụ CSS Variables */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --bg-color: #f5f5f5;
}
```

## Hints

- Sử dụng semantic HTML5 tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Tổ chức CSS theo BEM methodology (Block__Element--Modifier)
- Sử dụng CSS Variables cho colors và spacing
- Thêm `scroll-behavior: smooth` cho smooth scrolling
- Sử dụng `@media` queries cho responsive design
- Test trên nhiều kích thước màn hình với DevTools

## Getting Started

Log into [cs50.dev](https://api.phucnguyen.xyz/auth/github?returnTo=https%3A%2F%2Fphucnguyen.xyz%2Fcourses%2Fweb-dev%2F%3FenrollCourseSlug%3Dweb-dev%26enrollWeek%3D1%26openSubmit%3D1%26problem%3Dportfolio) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/web/portfolio
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/web/portfolio
```


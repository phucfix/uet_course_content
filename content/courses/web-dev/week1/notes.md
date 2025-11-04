---
title: "Week 1 - HTML & CSS Fundamentals Notes"
description: "Ghi chú về HTML và CSS cơ bản"
week: 1
course: "Web Development"
type: "notes"
url: "/courses/web-dev/weeks/1/notes/"
---

# HTML & CSS Fundamentals

## HTML Basics

### Cấu trúc HTML cơ bản

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang Web Đầu Tiên</title>
</head>
<body>
    <h1>Chào mừng!</h1>
    <p>Đây là trang web đầu tiên của bạn.</p>
</body>
</html>
```

### Các thẻ HTML quan trọng

- `<h1>` đến `<h6>`: Tiêu đề
- `<p>`: Đoạn văn
- `<a href="">`: Liên kết
- `<img src="" alt="">`: Hình ảnh
- `<ul>`, `<ol>`, `<li>`: Danh sách
- `<div>`: Container
- `<span>`: Inline container

### Forms

```html
<form action="/submit" method="POST">
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Gửi</button>
</form>
```

## CSS Basics

### Các cách sử dụng CSS

1. **Inline CSS**:
```html
<h1 style="color: blue;">Tiêu đề</h1>
```

2. **Internal CSS**:
```html
<style>
    h1 {
        color: blue;
        font-size: 24px;
    }
</style>
```

3. **External CSS**:
```html
<link rel="stylesheet" href="styles.css">
```

### Selectors

```css
/* Element selector */
p {
    color: #333;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#header {
    background-color: #f0f0f0;
}

/* Descendant selector */
div p {
    margin: 10px;
}
```

### Box Model

```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```

### Flexbox

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

### Responsive Design

```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```


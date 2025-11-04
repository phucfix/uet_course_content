---
title: "Week 1 - Python Basics Notes"
description: "Ghi chú về Python cơ bản: biến, kiểu dữ liệu, và cú pháp"
week: 1
course: "Python Programming"
type: "notes"
url: "/courses/python/weeks/1/notes/"
---

# Python Basics

## Giới thiệu về Python

Python là một ngôn ngữ lập trình cấp cao, dễ đọc và mạnh mẽ. Python được thiết kế với triết lý "đẹp hơn ugly, rõ ràng hơn implicit".

## Biến và Kiểu dữ liệu

### Biến trong Python

Python là ngôn ngữ động, không cần khai báo kiểu:

```python
name = "Python"
age = 30
height = 1.75
is_student = True
```

### Các kiểu dữ liệu cơ bản

1. **Số nguyên (int)**: `42`, `-10`
2. **Số thực (float)**: `3.14`, `-0.5`
3. **Chuỗi (str)**: `"Hello"`, `'World'`
4. **Boolean**: `True`, `False`
5. **None**: `None`

## Cấu trúc điều khiển

### If-else

```python
if age >= 18:
    print("Bạn đã trưởng thành")
else:
    print("Bạn chưa trưởng thành")
```

### Vòng lặp

```python
# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1
```

## Hàm (Functions)

```python
def greet(name):
    return f"Xin chào, {name}!"

message = greet("Python")
print(message)
```

## List và Dictionary

### List

```python
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
print(fruits[0])  # apple
```

### Dictionary

```python
student = {
    "name": "Nguyễn Văn A",
    "age": 20,
    "grade": "A"
}
print(student["name"])
```


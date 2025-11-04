---
title: "Week 2 - Functions and Modules Notes"
description: "Ghi chú về functions nâng cao và modules trong Python"
week: 2
course: "Python Programming"
type: "notes"
url: "/courses/python/weeks/2/notes/"
---

# Functions and Modules

## Functions nâng cao

### Default Arguments

```python
def greet(name, greeting="Xin chào"):
    return f"{greeting}, {name}!"

print(greet("Python"))  # Xin chào, Python!
print(greet("Python", "Chào"))  # Chào, Python!
```

### *args và **kwargs

```python
def sum_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_all(1, 2, 3, 4, 5))  # 15

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Python", age=30)
```

### Lambda Functions

```python
square = lambda x: x ** 2
print(square(5))  # 25

numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]
```

## Modules và Packages

### Import Modules

```python
import math
print(math.sqrt(16))  # 4.0

from math import sqrt, pi
print(sqrt(25))  # 5.0
print(pi)  # 3.141592653589793
```

### Tạo Module riêng

Tạo file `utils.py`:

```python
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b
```

Sử dụng:

```python
import utils
result = utils.add(5, 3)
print(result)  # 8
```

## File Handling

### Đọc file

```python
with open('data.txt', 'r') as f:
    content = f.read()
    print(content)
```

### Ghi file

```python
with open('output.txt', 'w') as f:
    f.write("Hello, Python!")
```

### Đọc từng dòng

```python
with open('data.txt', 'r') as f:
    for line in f:
        print(line.strip())
```


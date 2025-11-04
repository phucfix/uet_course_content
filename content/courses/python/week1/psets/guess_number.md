---
title: "Guess the Number"
week: 1
course: "Python Programming"
description: "Trò chơi đoán số"
---

# Guess the Number

Viết một trò chơi đoán số, nơi máy tính chọn một số ngẫu nhiên và người chơi phải đoán.

## Yêu cầu

1. Máy tính chọn một số ngẫu nhiên từ 1 đến 100
2. Người chơi nhập số đoán
3. Máy tính cho biết số đoán lớn hơn hay nhỏ hơn số đúng
4. Lặp lại cho đến khi đoán đúng
5. Đếm số lần đoán

## Ví dụ

```
Tôi đang nghĩ về một số từ 1 đến 100...
Đoán số của tôi: 50
Quá lớn! Hãy thử lại: 25
Quá nhỏ! Hãy thử lại: 35
Đúng rồi! Bạn đã đoán đúng sau 3 lần!
```

## Gợi ý

- Sử dụng `random.randint()` để tạo số ngẫu nhiên
- Sử dụng vòng lặp `while` để tiếp tục cho đến khi đoán đúng
- Sử dụng biến đếm để theo dõi số lần đoán


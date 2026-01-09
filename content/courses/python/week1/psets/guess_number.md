---
title: "Guess the Number"
week: 1
course: "Python Programming"
description: "Trò chơi đoán số"
---

## Problem to Solve

Bạn sẽ tạo một trò chơi đoán số, trong đó máy tính sẽ "nghĩ" một số ngẫu nhiên và người chơi phải đoán số đó. Sau mỗi lần đoán, máy tính sẽ cho biết số đoán lớn hơn hay nhỏ hơn số bí mật.

## Background

Trò chơi đoán số là một ví dụ kinh điển để học về:
- Tạo số ngẫu nhiên với module `random`
- Vòng lặp `while` và điều kiện dừng
- So sánh số và đưa ra phản hồi
- Đếm số lần lặp

Đây cũng là cơ hội tốt để hiểu về thuật toán **binary search** - chiến thuật đoán tối ưu là luôn đoán số ở giữa khoảng còn lại.

## Specification

Viết một chương trình `guess.py` thực hiện các yêu cầu sau:

1. Tạo một số ngẫu nhiên từ 1 đến 100
2. Cho phép người chơi nhập số đoán
3. Sau mỗi lần đoán, thông báo số đoán "quá lớn" hoặc "quá nhỏ"
4. Tiếp tục cho đến khi người chơi đoán đúng
5. Đếm và hiển thị số lần đoán khi kết thúc
6. **Bonus**: Thêm giới hạn số lần đoán (ví dụ: 7 lần)

## Examples

```
$ python guess.py
Tôi đang nghĩ về một số từ 1 đến 100...
Đoán số của tôi: 50
Quá lớn! Hãy thử lại.
Đoán số của tôi: 25
Quá nhỏ! Hãy thử lại.
Đoán số của tôi: 37
Quá lớn! Hãy thử lại.
Đoán số của tôi: 31
Đúng rồi! Bạn đã đoán đúng sau 4 lần!
```

## Hints

- Import module random: `import random`
- Sử dụng `random.randint(1, 100)` để tạo số ngẫu nhiên từ 1 đến 100
- Sử dụng vòng lặp `while True:` với `break` khi đoán đúng
- Sử dụng biến đếm (counter) để theo dõi số lần đoán
- Xử lý trường hợp người dùng nhập không phải số

## Getting Started

Log into [cs50.dev](https://api.phucnguyen.xyz/auth/github?returnTo=https%3A%2F%2Fphucnguyen.xyz%2Fcourses%2Fpython%2F%3FenrollCourseSlug%3Dpython%26enrollWeek%3D1%26openSubmit%3D1%26problem%3Dguess_number) using your GitHub account and click Authorize cs50, then close the tab.

## How to check / Cách kiểm tra

Chạy:

```bash
check50 --local uet36/problems/2025/python/guess_number
```

## How to submit / Cách nộp

Chạy:

```bash
submit50 --local uet36/problems/2025/python/guess_number
```


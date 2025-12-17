---
title: "Week 2 - Arrays"
description: "Introduction to arrays and memory in C."
week: 2
course: "CS50x"
type: "notes"
url: "/courses/cs50/weeks/2/notes/"
---

## Arrays and Memory

Arrays are contiguous blocks of memory that hold elements of the same type. Here's a small example in C:

```c
#include <stdio.h>

int main(void) {
    int arr[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++) {
        printf("%d\n", arr[i]);
    }
}
```

Practice: try writing functions that compute the max, min, and average of an array.

---
title: "Week 3 - Cryptography & Strings"
description: "Handling strings and basic cryptography exercises."
week: 3
course: "CS50x"
type: "notes"
url: "/courses/cs50/weeks/3/notes/"
---

## Strings and C

Working with strings in C requires care with memory and null terminators. Example: implement a simple ciphertext function that shifts characters.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char s[] = "Hello";
    for (int i = 0; i < strlen(s); i++) {
        s[i] = s[i] + 1; // naive shift
    }
    printf("%s\n", s);
}
```

Practice: implement `caesar` and `vigenere` ciphers.

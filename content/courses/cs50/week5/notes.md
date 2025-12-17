---
title: "Week 5 - More Cryptography"
description: "Advanced string and cipher problems."
week: 5
course: "CS50x"
type: "notes"
url: "/courses/cs50/weeks/5/notes/"
---

## Substitution and Key Management

Substitution ciphers require careful handling of keys and validation. Example: validate a key has 26 unique alphabetic characters.

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

bool valid_key(string k) {
    if (strlen(k) != 26) return false;
    int seen[26] = {0};
    for (int i = 0; i < 26; i++) {
        if (!isalpha(k[i])) return false;
        int idx = tolower(k[i]) - 'a';
        if (seen[idx]) return false;
        seen[idx] = 1;
    }
    return true;
}
```

Practice: implement `substitution` using a validated key.

---
title: "Week 4 - Data Structures"
description: "Introduction to basic data structures: linked lists, hash tables."
week: 4
course: "CS50x"
type: "notes"
url: "/courses/cs50/weeks/4/notes/"
---

## Linked lists and Hash tables

Implementing a hash table can make lookups much faster. Practice by building a dictionary for a spell checker.

```c
// simple node for linked list
typedef struct node {
    char word[45];
    struct node *next;
} node;
```

Practice: implement insert, search, and delete functions for linked lists.

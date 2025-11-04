---
title: "Week 1 - Introduction to Databases Notes"
description: "Ghi chú về cơ sở dữ liệu và SQL cơ bản"
week: 1
course: "Database Systems"
type: "notes"
url: "/courses/database/weeks/1/notes/"
---

# Introduction to Databases

## Database là gì?

Database (Cơ sở dữ liệu) là một tập hợp có tổ chức các dữ liệu được lưu trữ và truy cập điện tử. 

## Các loại Database

### 1. Relational Database (RDBMS)
- MySQL
- PostgreSQL
- SQLite
- Oracle

### 2. NoSQL Database
- MongoDB
- Redis
- Cassandra

## SQL Basics

### CREATE TABLE

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### INSERT

```sql
INSERT INTO students (name, email, age)
VALUES ('Nguyễn Văn A', 'a@example.com', 20);
```

### SELECT

```sql
-- Select all
SELECT * FROM students;

-- Select specific columns
SELECT name, email FROM students;

-- With WHERE clause
SELECT * FROM students WHERE age > 18;

-- With ORDER BY
SELECT * FROM students ORDER BY name ASC;
```

### UPDATE

```sql
UPDATE students
SET age = 21
WHERE id = 1;
```

### DELETE

```sql
DELETE FROM students
WHERE id = 1;
```

## JOINs

### INNER JOIN

```sql
SELECT students.name, courses.name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;
```

### LEFT JOIN

```sql
SELECT students.name, courses.name
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON enrollments.course_id = courses.id;
```

## Database Design

### Normalization

1. **First Normal Form (1NF)**: Mỗi cột chỉ chứa một giá trị
2. **Second Normal Form (2NF)**: Đạt 1NF và không có partial dependencies
3. **Third Normal Form (3NF)**: Đạt 2NF và không có transitive dependencies

### Primary Key và Foreign Key

```sql
CREATE TABLE courses (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE enrollments (
    id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```


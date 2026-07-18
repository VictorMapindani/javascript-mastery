# Lesson 05 - Type Conversion in JavaScript

## Objective

Learn how to convert values between different data types in JavaScript.

---

## What is Type Conversion?

Type conversion means changing a value from one type to another:

- String → Number
- Number → String
- Any value → Boolean

---

## 🌍 Real-world Usage

Type conversion is used in:

- Form inputs (login pages, signup forms)
- API data processing
- Calculations (pricing systems)
- Cloud data handling (AWS services)

---

## Important Concept

- User input is ALWAYS a string
- You must convert it before doing math
- Otherwise JavaScript gives incorrect results

---

## Key Example

"25" + 1 → "251" ❌  
Number("25") + 1 → 26 ✔

---

## Key Takeaway

JavaScript is flexible with types, but developers must control conversions to avoid bugs.
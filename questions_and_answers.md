<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A. 
<h2>Explanation</h2>
<p>Despite greetign's deliberate misspelling, JavaScript constructs it as a new variable and sets its value to be an empty object{}. As a result, when you log greeting, the console prints an empty object.</p>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C
<h2>Explanation</h2>
<p>In JavaScript, the + operator is used for both addition and string concatenation. If one of the operands is a string, the other operand will be converted to a string and the operation will become string concatenation. This is known as implicit type coercion.

Hence, the code will output the string "12"</p>
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A
<h2>Explanation</h2>
<p>In this code, the info object is created with a property favoriteFood that initially references the first element of the food array, which is "🍕". However, when the value of info.favoriteFood is changed to "🍝", it does not affect the original food array. Therefore, the food array remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].</p>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B
<h2>Explanation</h2>
<p>The sayHi function expects an argument name, which is used to create the greeting message. However, when the function is called without providing an argument (sayHi()), the name parameter is undefined. Therefore, the function still executes, but name is undefined, resulting in the output Hi there, undefined.

</p>
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C
<h2>Explanation</h2>
<p>In this code, the forEach method iterates through the nums array and checks each element num in a conditional statement. In JavaScript, the value 0 is considered falsy, and all other numbers are considered truthy. So, the condition if (num) evaluates to false for 0 and true for the other numbers (1, 2, 3). As a result, the code increments the count variable for each truthy value, resulting in a final count of 3.

</p>

</p>
</details>

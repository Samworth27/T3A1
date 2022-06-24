## Q7 - Explain control flow, using an example from the JavaScript programming language

There are the types of control flow structures. The first is Sequential Flow, the second is Selection and the third is Repetition.

### Sequential Structures

This is the default behaviour for most programming languages.
Lines of code are executed in the order they are declared.

```JavaScript
console.log("First");
console.log("Second");
console.log("Third");
```

The output from the example above would be

> First
> Second
> Third

The internal elements of both Selection and Repetition Structures behave as a Sequential Structure.

### Selection (conditional) Structures

Selection Structures allow you to alter the flow of a Sequential Structure.

#### IF Statement

The most basic conditional structure is the `if` statement. It allows you to execute blocks of code if certain conditions are met.

```JavaScript
// Sequential Flow
//   |         |
//   V         V

if (condition) {
  // Selection Structure
  // Internal Sequential Flow
  //   |          |        |
  //   V          V        V
} // Selection Structure

// Sequential Flow
//   |         |
//   V         V
```

The `if` statement can be extended with the use of an `else` statement. This allows the user to specify and alternate block of code to be executed if the initial condition is not met.

```JavaScript
if (condition) {
  execute_code();
} else {
  fallback_code();
}
```

Internally the `else` statement behaves as a Sequential Structure, just like the `if` statement.

The `else` statement can be combined with another else statement to perform another selection if the the first's condition is not met.
These `else if` statements can be chained together to allow a single block of code to be executed from a selection of blocks.

```JavaScript
let condition1 = false;
let condition2 = true;
let condition3 = true;

if (condition1 == true) {
  codeBlockOne();
} else if (condition2 == true) {
  codeBlockTwo();
} else if (condition3 == true) {
  codeBlockThree();
} else {
  codeBlockFour();
}
```

In the above example only `codeBlockTwo` will be executed, despite the fact that the `condition3` is true. This is because the selection statements are executed sequentially and only the first statement that meets its conditions will be executed.

#### Switch Structure

There is a specialised structure for selection a code block in the same way as the chained `else if` statements achieve, the Switch Structure.

A switch structure is given a statement to evaluate and a selection of `cases` to match against. If a match is found then the code block defined by the case will be executed sequentially.

```JavaScript
switch (get_input()) {
  case 1:
    codeBlockOne();
    break;
  case 2:
    codeBlockTwo();
    break;
  case 3:
    codeBlockFour();
    break;
  default:
    codeBlockFour();
}
```

In the above example `get_input()` is evaluated and the the result matched to the cases. If the result matches a `case`, that case's code block will be executed.
If no cases are matched, the default code block is executed.

#### Ternary Operator

There is one other way of representing an `if else` structure and that is a Ternary Operator. A Ternary Operator defines the condition to be met, and the two blocks to be executed in one line. The Ternary Operator takes the form `condition ? ifTrue() : ifFalse()` and can be used inside other function calls.

```JavaScript
console.log("Condition is " + (condition == true ? "met" : "not met"));
```

For example, in the code above the ternary structure sits inside a call to `console.log`. If `condition` is true the output to console will be:

> `Condition is met`

otherwise the output will be:

> `Condition is not met`

### Repetition (Looping) Structures

Repetition or looping structures are used to repeat a block of code without having to retype the code. They are useful both in reducing the amount of code that is typed but also allowing code to be repeated an indeterminate number of times.

#### While Loop

A `while` loop is a structure that repeats a code block as long as a condition is met.

```JavaScript
// Sequential Flow
//   |         |
//   V         V

while (condition) {
  // Repetition Structure  <-----------------
  //                                        |
  // Internal Sequential Flow               |
  //   |          |        |                |
  //   V          V        V                |
  //                                        |
} // Repetition Structure -->----------------

// Sequential Flow
//   |         |
//   V         V
```

When the sequential code finds a `while` loop, it tests if its condition is met. If it is it enters into the loop. Executed the containing code sequentially. When it reaches the end of the loop, it returns to the condition and re-evaluates it. If the condition is met again it re-enters the loop as before.
It the condition is not met it skips the loop and continues executing the code below sequentially.

#### Do while loop

A `do while` loop identical to a `while` loop except that the condition is evaluated after the code block has been executed, guaranteeing the code block will be executed at least once.

```JavaScript
// Sequential Flow
//   |         |
//   V         V

do {
  // Repetition Structure  <--------------------
  //                                           |
  // Internal Sequential Flow                  |
  //   |          |        |                   |
  //   V          V        V                   |
  //                                           |
} while (condition); // Repetition Structure -->

// Sequential Flow
//   |         |
//   V         V
```

When the sequential code finds a `do while` loop it is it enters into the loop. Executed the containing code sequentially.
When it reaches the end of the loop, evaluates the condition. If the condition is met it goes back to the start of the loop, otherwise it exits the loop and continues executing the code below sequentially.

#### For loop

A `for` loop is used to execute a block a code a certain amount of times.
The defining structure is comprised of three statements.

- The first statement is executed before the loop is started. Used to initialise any variables required for the loop, most commonly a counter variable.
- The second statement defines the condition for executing the contained code block. This is most commonly used to evaluate a counter variable against some test.
- The third statement is executed after the contained code block. Mostly used to increment a counter variable

The loop is structured as follows:

```JavaScript
// Sequential Flow
//   |         |
//   V         V

for (statement1; statement2; statement3) {
  // (Statement1 called here on the first iteration)
  // (Statement2 evaluated here) <------
  //                                   |
  // Internal Sequential Flow          |
  //   |          |        |           |
  //   V          V        V           |
  //                                   |
  // (Statement3 is called here)       |
} // Repetition Structure -->-----------

// Sequential Flow
//   |         |
//   V         V
```

The example below shows how you can use a `for` loop to repeat a block of code a set amount of times. In this case outputting the numbers 0 through to 9 to the console.

```JavaScript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

The below example shows how you can use a `for` loop to access items in an array

```JavaScript
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

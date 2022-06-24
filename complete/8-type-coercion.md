## Q8 	Explain type coercion, using examples from the JavaScript programming language

There is two types of type coercion, implicit and explicit. The difference between these two is that implicit coercion is a automatic function, whereas explicit type coercion needs to be specified by the developer.

In JavaScript there are two different equality operators, the strict equality operator `===` and the loose equality operator `==`.
The strict equality operator will not trigger implicit type coercion, whereas the loose equality operator will.
This makes it useful to help demonstrate type coercion.

```JavaScript
// comparing a number and string containing a digit with '=='
console.log(1=='1') // output: true

// comparing a number and string containing a digit with '==='
console.log(1==='1') // output: false


// explicitly converting a number to a string
console.log(String(1)==='1') // output:true
```
While the strict equality operator does not trigger implicit type coercion, all other operators in JavaScript will attempt implicit type coercion between the Number, String and Boolean data types. For example:
```JavaScript
// adding a string and number. 
console.log("string" + 1) // output: "string1"

// adding a string containing a digit and a number. 
// note. JavaScript prefers to coerce numbers to strings
console.log("1" + 1) // output: "11"

// subtracting Boolean values
// true is coerced into the number 1
console.log(true - true) // output: 0

// however the string "true" cannot be coerced into a number 
// like Boolean true
console.log(true - "true") // output: NaN (Not a Number)

// however the boolean true will be coerced into a string 
// if the + operator is used.
console.log(true + "true") // output: "truetrue"
```

Type coercion can be useful in increasing the readability of code by avoiding the need to have calls to functions explicitly converting data types but can also be detrimental and introduce bugs into code if not handled correctly.
The output a statement can vary greatly based on the data types and operators involved. In most cases it is better to rely on explicit type coercion.
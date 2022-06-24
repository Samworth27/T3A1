## Q9 - Explain data types, using examples from the JavaScript programming language

Data types define the format in which a value is stored. They help a computer to know how to process the data.

In the case:

```JavaScript
let variable = Number(1);
```

it's easy to imagine that `variable` is being made to equal the number 1, however variable is actually being set to represent an object and that object stores the number `1`, as well as information such as what type of value it represents and what the program can do with it.
In JavaScript, it is possible to see this in action. Entering `variable.__proto__` into the console of the dev tools in a browser let you see the prototype that variable is built on.

```JavaScript

Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
```

Note that this is not the object `variable` but instead the default `Number` object.

JavaScript has 7 data types like this which are referred to as Primitive Values.
These objects are immutable (the base object cannot be modified even if the value can be ) which are :

- Number Type - represents a double precision floating point number
- String Type - represnts a string of characters
- Boolean Type - can either be true or false
- BigInt Type - used to represent Integers larger than 2^53 - 1 (largest Number value possible)
- Null Type - represents a null value only
- Undefined Type - used by a variable that has no value assigned to it
- Symbol Type - An immutable data type representing an anonymous unique value

The one other data type in JavaScript is the `Object`
A JavaScript object is a collection of key/value pairs in which the value can be any data type or function.
Even the primitive values themselves are immutable objects storing the value are one key/value pair. This can be seen above where the prototype of `variable` was `Number`. At the bottom of the key/value pairs you can see a key for the prototype of `Number`, which is an `Object`.

An array for example is an object that uses it's Integer keys to store an ordered list of objects. It also provides a collection of useful functions as key/value pairs.

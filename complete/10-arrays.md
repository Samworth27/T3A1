## Q10 - Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

### Creating an array and defining values

The most simple way to create an array is to define it as a variable.

```javascript
let array = [];
// output: []
array = [1, 2, 3];
// output: [1,2,3]
array = Array("a", "b", "c");
//output: ["a","b","c"]
```

It is also possible to create an empty array of a certain length.
This can then be used with other methods to prepare a useful array

```javascript
let array1 = Array(5);
console.log(array1);
// output: [ <5 empty items>]
array1.fill(0);
console.log(array1);
// output: [0,0,0,0,0]

let array2 = Array(5)
  .fill(0)
  .map((element, index) => index);
console.log(array2);
// output: [0,1,2,3,4]

let array3 = Array(10);
array3.forEach((element, index, array) => {
  array[index] =
    (array[index - 1] ? array[index - 1] : 1) +
    (array[index - 2] ? array[index - 2] : 0);
});
console.log(array3);
// output: [1,1,2,3,5,8,13,21,34,55]
```

It is also possible to define the value at a specific index

```javascript
let array = Array(5)
  .fill(0)
  .map((element, index) => index);
console.log(array);
// output: [0,1,2,3,4];
array[3] = 10;
console.log(array);
// output: [0,1,2,10,4]
```

Note that JavaScript arrays are zero indexed, meaning that the first item is at position 0, the second at position 1 and so on.

It is possible to create a sparse array (one where not all sequential keys are assigned values)

```javascript
let array = [];
array[9] = "hello";
console.log(array.length);
// output: 10

array.forEach((element) => console.log(element));
// output: hello

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//output: undefined, undefined, undefined, undefined, undefined
// , undefined, undefined, undefined, undefined, hello
```

As you can see how you iterate over a sparse array has a big effect on the values returned. The `forEach` method will skip the undefined values compared to using a `for` loop where all values are returned.

Also demonstrated above is the fact that an array can be used to store data types other than numbers. Any JavaScript data type can be stored in an array

Note that the length of an array is not the same as its highest key. The highest key will always be the arrays length - 1.

### Modifying arrays

The following methods are all considered destructive methods as they change the data stored inside the array. Care should be taken when using these methods.

#### Push

The `push` method adds elements to the end of an array and returns the new length of the array.

#### Unshift

The `unshift` method adds elements to the beginning of an array and returns the new length of the array.

#### Pop

The `pop` method removes the last element from the array and returns the value of that element.If the array was empty it returns `undefined`.

#### Shift

The `shift` method removes the first element from the array and returns the value of that element. If the array was empty it returns `undefined`.

#### Sort

The `sort` method sorts the elements of the array in place and returns the returns the sorted array.
The default sorting function is to convert the values into a string and sort by characters. Because of this 1000 would be placed before 2.
The sorting function can be defined when calling the method. An example for sorting by numbers is below:

```javascript
array.sort((a, b) => a - b);
```

This can be any function as long as a negative number is returned when `a` is less than `b`, a positive number is returned when `a` is greater than `b` and zero is returned when `a` and `b` are equal.

#### Reverse

The `reverse` method reverses the elements of the array in place and returns the reversed array.

#### Splice

The `Splice` method splits an array at a specified index and then deletes a specified number of elements after that index and/or inserts new items into the array after that index.
The method returns an array of deleted elements.
It's syntax is `splice(start, deleteCount, item1, item2, itemN)`
start can be any integer from -array.length to array.length -1.
A negative value is interpreted as array.length - n or the nth last element of the array

```javascript
let array = ["Mark", "John", "James", "Matthew"];
let removed = array.splice(2, 1);
// removes 1 element from index 2.
console.log(removed);
// Output: ["James"]
removed = array.splice(-2, 0, removed);
// removes 0 elements from the 2nd last index and inserts the value of
// `removed` at that index
console.log(removed, array);
//output: [], ["Mark","John","John","Matthew"]
removed = array.splice(0);
// removes all elements starting at index 0
console.log(removed, array);
//output: ["Mark","John","John","Matthew"], []
```

#### Array.length

It is possible to modify the length of an array by settings it's `length` property.

```javascript
let array = [];
for (let i = 0; i < 5; i++) {
  array.length++;
  console.log(array);
  //output:
  //[ <1 empty item> ]
  //[ <2 empty items> ]
  //[ <3 empty items> ]
  //[ <4 empty items> ]
  //[ <5 empty items> ]
}
```

Note that if the length is made shorter the objects at the end of the array will be lost.

### Extracting information from an array

#### Accessing an index

The simplest approach to accessing data in an array is to retrieve a single element via its index.

```javascript
let element = array[index]; // where index is between 0 and array.length - 1
```

#### Slice

The `slice` method is used to create a shallow copy (only the reference to an object at an index will be copied, not the object itself) of a portion of an existing array.
It's syntax is `slice(start,end)`. Just like `splice` negative numbers can be used to reference an index from end of the array. If `end` is not defined it will return a shallow copy of all elements from `start` to the end of the array

```javascript
const array = ["one", 2, { value: 3 }, [4, 5, 6], 7];

console.log(array.slice(3)); // slice from the 3rd element
//output: [4, 5, 6],7]

console.log(array.slice(-3)); // slice from the 3rd last element
//output: [{value: 3}, [4, 5, 6],7]

let slice = array.slice(2, -1);
// slice from after the 2nd element to before the last element

console.log(slice);
//output: [{value: 3}, [4, 5, 6]]

array[2].value = "three";
// change the value property of the 3rd element to
// demonstrate the shallow copying behaviour

console.log(slice);
//output: [{value: "three"}, [4, 5, 6]]
```

#### Filter

The `filter` method returns a new array containing all elements that pass a test implemented by a callback function provided to the method.

Three arguments can be passed to the callback function being the `element`, it's index `index` and the `array` being proccessed.

```javascript
let array = [
  { name: "apple", count: 0 },
  { name: "banana", count: 10 },
  { name: "pear", count: 25 },
  { name: "orange", count: 16 },
];

// find all elements that have a count less than 20
console.log(array.filter((element, index, array) => element.count < 20));
// output: [{name: 'apple', count: 0},{name: 'banana', count: 10},
//         {name: 'orange', count: 16}]
```

#### Find

The `find` method is the same as the `filter` method except it returns the first element that passes the callback testing function.
If no element passes the callback function it returns `undefined`.

```javascript
let array = [
  { name: "apple", count: 0 },
  { name: "banana", count: 10 },
  { name: "pear", count: 25 },
  { name: "orange", count: 16 },
];

// find all elements that have a count less than 20
console.log(array.find((element, index, array) => element.count < 20));
// output: {name: 'apple', count: 0}
```

#### FindIndex

The `findIndex` method returns the index of the element that would have been returned by the `find` method. If no element is found it returns `-1`

#### IndexOf

the `indexOf` method returns the first index where the given element is found in the array. If the element is not found it will return `-1`.
It operates the same as the `findIndex` method but the callback function is the strict equality operator `element  === searchElement`
An optional argument can be provided which is the index to start searching from.
`indexOf(searchElement, fromIndex)`

#### LastIndexOf

The `lastIndexOf` method returns the last index where the given element can be found in the array.
It operates the same as the `indexOf` method but searches the array from right to left.
The `fromIndex` argument 


### Reducing an array

The following methods allow you to turn an array into a single value

#### Reduce & Reduce Right

The `reduce` and `reduceRight` methods work by stepping through and array using a callback function. At every step the callback function is given the value from the previous iteration and the current element in the array.
`reduce` works from left to right and `reduceRight` works from right to left.
If the methods are supplied with an optional argument `initialValue` then that value will be given to the callback function as the previous value the first time it is called. If no initial value is provided then the method will start at the second element, and use the first element as the previous value.

```javascript
let array = [0,1,2,3,4,5]
// find the sum of all elements in the array
console.log(array.reduce((previousValue, element)=>previousValue+element))
//output: 15

```

#### Every

The `every` method tests every element in the array with a provided callback function. The method returns a boolean value of whether all elements passed the callback function test.

#### Some

The `every` method tests every element in the array with a provided callback function. The method returns a boolean value of whether at least one element passed the callback function test.

#### Includes

The `includes` method test whether the supplied value can be found in the array. The method returns a boolean value.
An optional argument `fromIndex` can be provided

#### Join

The `join` method returns a string creating by concatenating all elements in the array.
An optional `separator` argument can be passed which is used to separate the elements. If it is not provided a comma (",") will be used.

#### ToString

The `toString` method internally calls the `join` method.

#### Flat

The `flat` method will concatenate any nested arrays into the array itself. 
A optional argument `depth` can be provided. This determines how many times the method should search into nested arrays to find more nested arrays to flatten.

### Iterating over an array

#### Map

The `map` method iterates over all elements in an array with a provided callback function. The result of that function in stored into a new array at the same index as the original element.
After all elements have been iterated over the new array is returned.
The `element`, elements `index` and the `array` can all be supplied as arguments to the callback function.
```javascript
let array = Array(5)
  .fill(0)
  .map((element, index, array) => index);
console.log(array);
// output: [0,1,2,3,4];
```

#### ForEach

The `forEach` method executes a provided callback function once for each element in an array. The `forEach` method will skip over undefined elements such as in a sparse array.
The `element`, elements `index` and the `array` can all be supplied as arguments to the callback function.
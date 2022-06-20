# T3A1

## Q1 - Provide an overview and description of a standard source control process for a large project

### Trunk Based Development

Trunk based development is a source control workflow often used with larger projects. (especially for those that require CI/CD (Continuous Integration/ Continuous Development)
The premise behind TBD (Trunk Based Development) is that having multiple long running feature branches used in a branching workflow means a high probability of conflicts when merging branches back into the main branch. TBD seeks to counter this by instead having developers committing straight into the main trunk, or for especially large projects: committing into a short lived (1/2 days max) branch that is merged back into the trunk.
The short time frame between the commits means that conflicts are less likely and less painful to deal with if they occur.

## Q2 - What are the most important aspects of quality software?

## Q3 - Outline a standard high level structure for a MERN stack application and explain the components

## Q4 - A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

## Q5 - With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges

## Q6 - With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature

## Q7 - Explain control flow, using an example from the JavaScript programming language

## Q8 - Explain type coercion, using examples from the JavaScript programming language

## Q9 - Explain data types, using examples from the JavaScript programming language

## Q10 - Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

## Q11 - Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language

## Q12 - Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language

## Q13 - For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes

```js
/** Class representing a Car */
class Car {
  /** 
   * @param {string} brand - brand name of the car
  */
  constructor(brand) {
    this.carname = brand;
  }
  /**
   * @return {string} Returns a string containing the name of the car
   */
  present() {
    return 'I have a ' + this.carname;
  }
}

/** 
 * Class representing a specific Model of Car
 * @extends Car
 */
class Model extends Car {
  /**
   * @param {string} brand - brand name of the car
   * @param {integer} mod - year model of the car
   */
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  /**
   * @returns {string} Returns a string containing the name and year model of the car
   */
  show() {
    return this.present() + ', it was made in ' + this.model;
  }
}

/** Contains an array of car brand names */
let makes = ["Ford", "Holden", "Toyota"]

/** 
 * Contains an array of years from 1980 through 2019 inclusive.
 * Does this by creating a new Array with 40 elements and mapping
 * over it and assigning to each element `1980` plus the elements index `i`
 * @type {Integer[]}
*/
let models = Array.from(new Array(40), (x,i) => i + 1980)

/**
 * @summary Uses {@link Math.random} to generate a random integer in the inclusive range [min..max]
 *  
 * @param {integer} min - start of the range which a random integer will be generated in
 * @param {integer} max - end of the range which a random integer will be generated in
 * @returns {integer} Returns a random integer in the range [min...max] inclusive of min and max
 * 
 * @description 
 * Takes the output of {@link Math.random} (a number between 0 and 1), 
 * multiplies it by the size of the range `(max - min +1)` to generate a 
 * random number in the range `[0 ... range size]` exclusive.  
 * `min` is added to shift the range to `[0 + min ... range size + min]` exclusive.  
 * Because range size is equal to `(max - min + 1)`, the upper bound can be simplified
 * to max + 1, making the range of numbers [0...max + 1] exclusive
 * 
 * This value is floored with {@link Math.floor} in order to return an integer.
 * The previous range of [0...max+1] exclusive is now [0...max] inclusive  
 * (Any number passed to Math.floor that is greater than max will no be larger
 * than max+1 and therefore be rounded down to the nearest integer, aka. max)
 * 
 * @todo Enforce Integer type for input
 */
function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * Iterates over the `models` array and creates an instance of car with a random
 * brand name and model year.
 * It outputs the value of `Car.show()` to the console.
 * The number of iterations is determined by the number of year models generated
 * in the array `models`.
 * @todo Properly define variables with `let` or `const` as required
 * @todo Create a function that returns a random element from an array and use is place
 * of `{variable}[randomIntFromInterval(0,{variable}.length-1)]` in order to make code easier to
 * read and more DRY.
 * @todo 
 */
for (model of models) {
  /** A random string selected from the array {@link makes}*/
  make = makes[randomIntFromInterval(0,makes.length-1)]
  /** 
   * Selects a random Integer from the first `makes.length-1` values of models  
   * In this case 1980, 1981 or 1982.  
   * @todo Check if this is intended behaviour and not meant to be `models.length -1`
   * which would select a random value from the ENTIRE array `models`
   */
  model = models[randomIntFromInterval(0,makes.length-1)]

  mycar = new Model(make, model);
  console.log(mycar.show())
}
```

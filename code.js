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

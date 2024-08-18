import { validate } from "bycontract";

/**
 * Function that calculates the area of a triangle
 * by recieving two numbers.
 * @param {number} base 
 * @param {number} height 
 * @returns Number
 */
function triArea(base, height) {
  validate(arguments, ["number", "number"]);
  return (base * height) / 2
}

export { triArea }
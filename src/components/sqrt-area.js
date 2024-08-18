import { validate } from "bycontract"

/**
 * Function that calculates the area of a square
 * by recieving two numbers.
 * @param {number} base 
 * @param {number} height 
 * @returns Number
 */
function sqrtArea(base, height) {
  validate(arguments, ["number", "number"])
  return base * height
}

export { sqrtArea }
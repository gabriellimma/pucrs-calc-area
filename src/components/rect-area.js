import { validate } from "bycontract"

/**
 * Function that calculates the area of a rectangle
 * by recieving two numbers.
 * @param {number} base 
 * @param {number} height 
 * @returns Number
 */
function rectArea(base, height) {
  validate(arguments, ["number", "number"])
  return base * height
}

export { rectArea }
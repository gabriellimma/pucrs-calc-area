import { validate } from "bycontract";

/**
 * Function that calculates the area of a circle
 * by receiving a number.
 * @param {number} radius 
 * @returns Number
 */
function circArea(radius) {
  validate(radius, "number");
  return Math.PI * Math.pow(radius, 2);
}

export { circArea };
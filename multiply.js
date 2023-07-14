import { getRandomNumber } from "./getRandomNumber.js";

export const multiply = (number, _getRandomNumber = getRandomNumber) => {
  return number * _getRandomNumber();
};

/**
 * Function to help with Airbnb eslint rules wanting a radix.
 * @param {String} value - Number character that needs to be parsed to an integer.
 * @return {Number}
 */
const parseInteger = value => parseInt(value, 10);

export {
  parseInteger,
};

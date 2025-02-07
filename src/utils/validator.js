exports.validateNumber = (num) => {
  if (isNaN(num) || !Number.isInteger(parseFloat(num))) {
    return "alphabet";
  }

  return parseInt(num, 10);
};

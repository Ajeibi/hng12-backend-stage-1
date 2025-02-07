const axios = require("axios");

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPerfect(num) {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i + (i === num / i ? 0 : num / i);
    }
  }
  return sum === num && num !== 1;
}

function isArmstrong(num) {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  return digits.reduce((sum, d) => sum + Math.pow(d, power), 0) === num;
}

function getNumberProperties(num) {
  return {
    isPrime: isPrime(num),
    isPerfect: isPerfect(num),
    digitSum: num
      .toString()
      .split("")
      .reduce((sum, d) => sum + parseInt(d), 0),
    tags: [
      isArmstrong(num) ? "armstrong" : null,
      num % 2 === 0 ? "even" : "odd",
    ].filter(Boolean),
  };
}

async function fetchFunFact(num) {
  if (isArmstrong(num)) {
    return `${num} is an Armstrong number because ${getArmstrongBreakdown(
      num
    )} = ${num}`;
  }
  if (isPerfect(num)) {
    return `${num} is a Perfect number because the sum of its divisors equals ${num}`;
  }
  if (isPrime(num)) {
    return `${num} is a Prime number because it has exactly two divisors: 1 and itself.`;
  }

  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return "Fun fact not available.";
  }
}

function getArmstrongBreakdown(num) {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  return digits.map((d) => `${d}^${power}`).join(" + ");
}

module.exports = {
  getNumberProperties,
  fetchFunFact,
  isPrime,
  isArmstrong,
  isPerfect,
};

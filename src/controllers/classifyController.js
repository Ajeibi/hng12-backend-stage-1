const {
  getNumberProperties,
  fetchFunFact,
} = require("../services/numberService");
const { validateNumber } = require("../utils/validator");

exports.classifyNumber = async (req, res) => {
  const number = validateNumber(req.query.number);

  if (number === "alphabet") {
    return res.status(400).json({ number, error: true });
  }

  const properties = getNumberProperties(number);

  const funFact = await fetchFunFact(number);

  res.json({
    number,
    is_prime: properties.isPrime,
    is_perfect: properties.isPerfect,
    properties: properties.tags,
    digit_sum: properties.digitSum,
    fun_fact: funFact,
  });
};

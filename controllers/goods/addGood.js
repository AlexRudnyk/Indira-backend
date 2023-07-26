const { Good } = require("../../models");

const addGood = async (req, res) => {
  const newGood = await Good.create(req.body);

  res.status(201).json(newGood);
};

module.exports = addGood;

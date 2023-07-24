const { Good } = require("../../models");

const editGood = async (req, res) => {
  const body = req.body;

  await Good.findByIdAndUpdate({ _id: body.id }, body);

  res.json(body);
};

module.exports = editGood;

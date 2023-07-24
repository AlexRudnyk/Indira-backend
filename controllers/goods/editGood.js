const { Good } = require("../../models");

const editGood = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  await Good.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  });

  res.json(body);
};

module.exports = editGood;

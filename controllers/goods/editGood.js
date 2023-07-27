const { Good } = require("../../models");

const editGood = async (req, res) => {
  const body = req.body;

  const updatedGood = await Good.findByIdAndUpdate({ _id: body.id }, body, {
    new: true,
  });

  res.json(updatedGood);
};

module.exports = editGood;

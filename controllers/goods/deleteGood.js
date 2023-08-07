const { NotFound } = require("http-errors");
const { Good } = require("../../models");
const { Comment } = require("../../models");

const deleteGood = async (req, res) => {
  const { id } = req.params;

  await Comment.deleteMany({
    good: id,
  });

  const deletedGood = await Good.findOneAndRemove({
    _id: id,
  });

  if (!deletedGood) {
    throw new NotFound(`Good with id=${id} not found`);
  }
  res.json(deletedGood);
};

module.exports = deleteGood;

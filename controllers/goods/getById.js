const { NotFound } = require("http-errors");
const { Good } = require("../../models");

const getById = async (req, res) => {
  const { id } = req.params;
  // const { page = 1, limit = 20 } = req.query;
  // const skip = (page - 1) * limit;

  const foundGood = await Good.findOne(
    { _id: id },
    "-createdAt -updatedAt"
    // {
    // skip,
    // limit: Number(limit),
    // }
  );
  if (!foundGood) {
    throw new NotFound(`Good with id=${id} not found`);
  }
  res.json(foundGood);
};

module.exports = getById;

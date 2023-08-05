const { Good } = require("../../models");

const getGoods = async (req, res) => {
  const goods = await Good.find({});

  res.json(goods);
};

module.exports = getGoods;

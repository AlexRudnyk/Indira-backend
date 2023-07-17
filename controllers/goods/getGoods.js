const { Good } = require("../../models");

const getGoods = async (req, res) => {
  const goods = await Good.find();
  if (goods.length === 0) {
    res.json({
      results: "Sorry, there is no news yet",
    });
  }

  res.json(goods);
  // const { page = 1, limit = 10 } = req.query;
  // const skip = (page - 1) * limit;

  // const news = await News.find({}, "", {
  //   skip,
  //   limit: Number(limit),
  // });
  // if (news.length === 0) {
  //   res.json({
  //     results: "Sorry, there is no news yet",
  //   });
  // }

  // res.json({
  //   results: news,
  //   current_total: page * limit,
  //   total: news.length,
  // });
};

module.exports = getGoods;

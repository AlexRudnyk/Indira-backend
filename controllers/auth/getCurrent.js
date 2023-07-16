const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { _id, name, email, phone, goodsInCart } = req.user;
  res.json({
    _id,
    name,
    email,
    phone,
    goodsInCart,
  });
};

module.exports = getCurrent;

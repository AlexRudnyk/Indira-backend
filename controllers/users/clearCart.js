const { User } = require("../../models");

const clearCart = async (req, res) => {
  const { _id } = req.user;

  await User.findOneAndUpdate({ _id }, { goodsInCart: [] });

  res.status(204).json({
    message: "cart is cleared",
  });
};

module.exports = clearCart;

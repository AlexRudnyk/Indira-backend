const { User } = require("../../models");
const { NotFound, Conflict } = require("http-errors");

const addToCart = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  if (!id) {
    throw new NotFound(`Good with id=${id} not found`);
  }

  const user = await User.findById({ _id });
  const inCart = user.goodsInCart.includes(id);
  if (inCart) {
    throw new Conflict(`Good with id: ${id} has been already added to cart`);
  }

  await User.findOneAndUpdate(
    { _id },
    { $push: { goodsInCart: id } },
    { new: true }
  ).populate("goodsInCart", "-createdAt -updatedAt");

  res.json(id);
};

module.exports = addToCart;

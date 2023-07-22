const { NotFound, Conflict } = require("http-errors");
const { User } = require("../../models");

const deleteFromCart = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  if (!id) {
    throw new NotFound(`Good with id=${id} not found`);
  }

  const user = await User.findById({ _id });
  const inCart = user.goodsInCart.includes(id);
  if (!inCart) {
    throw new Conflict(`Good with id: ${id} not in favorites`);
  }

  await User.findOneAndUpdate(
    { _id },
    { $pull: { goodsInCart: id } },
    {
      new: true,
    }
  ).populate("goodsInCart");

  res.json(id);
};

module.exports = deleteFromCart;

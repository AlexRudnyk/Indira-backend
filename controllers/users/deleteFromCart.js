const { NotFound, Conflict } = require("http-errors");
const { User, Good } = require("../../models");

const deleteFromCart = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  if (!id) {
    throw new NotFound(`Good with id=${id} not found`);
  }

  const user = await User.findById({ _id });
  //   const inFavorites = user.favoriteNotices.includes(id);
  //   if (!inFavorites) {
  //     throw new Conflict(`Notice with id: ${id} not in favorites`);
  //   }

  const goodToDelete = await Good.findById({ _id: id });

  await User.findOneAndUpdate(
    { _id },
    { $pull: { goodsInCart: goodToDelete } },
    {
      new: true,
    }
  ).populate("goodsInCart");

  //   if (!favoriteToRemove) {
  //     throw new NotFound(`Notice with id=${id} not found`);
  //   }

  res.json(id);
};

module.exports = deleteFromCart;

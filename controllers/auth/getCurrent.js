const getCurrent = async (req, res) => {
  const { _id, name, email, phone, role, goodsInCart } = req.user;
  res.json({
    _id,
    name,
    email,
    phone,
    role,
    goodsInCart,
  });
};

module.exports = getCurrent;

const { Good } = require("../../models");
const { uploadGoodsImage } = require("../../middlewares/cloudinary");
const fs = require("fs/promises");

const addGood = async (req, res) => {
  const { path: upload } = req.file;
  //   const { _id: owner } = req.user;

  const photoURL = await uploadGoodsImage(upload);
  fs.unlink(upload);

  const newGood = await Good.create({
    ...req.body,
    photoURL,
  });

  res.status(201).json(newGood);
};

module.exports = addGood;

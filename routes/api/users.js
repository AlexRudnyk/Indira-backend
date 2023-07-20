const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

// const { joiAddGoodSchema } = require("../../models/good");
const { usersCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.post(
  "/addtocart/:id",
  auth,
  //   validation(joiAddGoodSchema),
  ctrlWrapper(ctrl.addToCart)
);

// router.get("/getgoods", ctrlWrapper(ctrl.getGoods));
// router.get("/id/:id", ctrlWrapper(ctrl.getById));
// router.delete("/delete/:id", auth, ctrlWrapper(ctrl.deleteGood));

// router.post(
//   "/addgood",
//   auth,
//   upload.single("photoURL"),
//   validation(joiAddGoodSchema),
//   ctrlWrapper(ctrl.addGood)
// );

module.exports = router;

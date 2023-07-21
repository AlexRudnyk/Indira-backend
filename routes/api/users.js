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

module.exports = router;

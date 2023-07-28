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
router.delete("/deletefromcart/:id", auth, ctrlWrapper(ctrl.deleteFromCart));
router.post("/order", auth, ctrlWrapper(ctrl.sendOrder));
router.get("/clearcart", auth, ctrlWrapper(ctrl.clearCart));

module.exports = router;

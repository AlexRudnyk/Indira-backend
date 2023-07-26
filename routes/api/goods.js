const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiAddGoodSchema } = require("../../models/good");
const { goodsCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/getgoods", ctrlWrapper(ctrl.getGoods));
router.get("/id/:id", ctrlWrapper(ctrl.getById));
router.patch(
  "/edit",
  auth,
  // validation(joiAddGoodSchema),
  ctrlWrapper(ctrl.editGood)
);
router.delete("/delete/:id", auth, ctrlWrapper(ctrl.deleteGood));

router.post(
  "/addgood",
  auth,
  validation(joiAddGoodSchema),
  ctrlWrapper(ctrl.addGood)
);

module.exports = router;

const express = require("express");

const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");

const { joiAddGoodSchema } = require("../../models/good");
const { goodsCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/getGoods", ctrlWrapper(ctrl.getGoods));

router.post(
  "/addGood",
  auth,
  validation(joiAddGoodSchema),
  upload.single("photoURL"),
  ctrlWrapper(ctrl.addGood)
);

module.exports = router;

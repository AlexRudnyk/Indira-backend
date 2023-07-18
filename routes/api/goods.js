const express = require("express");

const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");

const { joiAddGoodSchema } = require("../../models/good");
const { goodsCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/getgoods", ctrlWrapper(ctrl.getGoods));
router.get("/id/:id", ctrlWrapper(ctrl.getById));
router.delete("/delete/:id", auth, ctrlWrapper(ctrl.deleteGood));

router.post(
  "/addgood",
  auth,
  upload.single("photoURL"),
  validation(joiAddGoodSchema),
  ctrlWrapper(ctrl.addGood)
);

module.exports = router;

const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiAddCommentSchema } = require("../../models/comment");
const { commentsCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/getcomments/:goodId", ctrlWrapper(ctrl.getComments));
// router.get("/id/:id", ctrlWrapper(ctrl.getById));
// router.patch(
//   "/edit",
//   auth,
//   validation(joiAddGoodSchema),
//   ctrlWrapper(ctrl.editGood)
// );
// router.delete("/delete/:id", auth, ctrlWrapper(ctrl.deleteGood));

router.post(
  "/addcomment/:goodId",
  auth,
  //   validation(joiAddCommentSchema),
  ctrlWrapper(ctrl.addComment)
);

module.exports = router;

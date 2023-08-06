const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiAddCommentSchema } = require("../../models/comment");
const { commentsCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/getcomments/:goodId", ctrlWrapper(ctrl.getComments));

router.patch(
  "/reply/:commentId",
  auth,
  // validation(joiAddCommentSchema),
  ctrlWrapper(ctrl.replyComment)
);
router.delete("/delete/:commentId", auth, ctrlWrapper(ctrl.deleteComment));

router.post(
  "/addcomment/:goodId",
  auth,
  //   validation(joiAddCommentSchema),
  ctrlWrapper(ctrl.addComment)
);

module.exports = router;

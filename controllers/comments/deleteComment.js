const { Good } = require("../../models");
const { Comment } = require("../../models");
const { NotFound, Conflict } = require("http-errors");

const deleteComment = async (req, res) => {
  console.log("REQ", req);
  console.log("REQ.PARAMS", req.params);
  const { commentId } = req.params;
  console.log("COMMENTID", commentId);

  const comment = await Comment.findById({ _id: commentId });
  const goodId = comment.good;

  const commentedGood = await Good.findById({ _id: goodId });

  const inComments = commentedGood.comments.includes(commentId);
  if (!inComments) {
    throw new Conflict(`Comment with id: ${commentId} not in comments`);
  }

  await Good.findByIdAndUpdate(
    { _id: goodId },
    { $pull: { comments: commentId } },
    {
      new: true,
    }
  );

  const commentToDelete = await Comment.findByIdAndRemove({ _id: commentId });
  if (!commentToDelete) {
    throw new NotFound(`Comment with id=${commentId} not found`);
  }

  res.status(204).json(commentToDelete);
};

module.exports = deleteComment;

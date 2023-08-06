const { Comment } = require("../../models");

const replyComment = async (req, res) => {
  const { commentId } = req.params;
  const body = req.body;

  console.log("BODY", body);

  const repliedComment = await Comment.findByIdAndUpdate(
    { _id: commentId },
    { reply: body.text },
    { new: true }
  );

  res.json(repliedComment);
};

module.exports = replyComment;

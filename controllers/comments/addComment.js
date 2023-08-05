const { Good } = require("../../models");
const { Comment } = require("../../models");

const addComment = async (req, res) => {
  const { name } = req.user;
  const { goodId } = req.params;
  const good = await Good.findById({ _id: goodId });

  const newComment = await Comment.create({
    ...req.body,
    userName: name,
    good,
  });

  await Good.findByIdAndUpdate(
    { _id: goodId },
    { $push: { comments: newComment._id } }
  );

  res.status(201).json(newComment);
};

module.exports = addComment;

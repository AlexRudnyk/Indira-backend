const { Comment } = require("../../models");

const getComments = async (req, res) => {
  const { goodId } = req.params;

  const comments = await Comment.find({
    good: goodId,
  });

  res.json(comments);
};

module.exports = getComments;

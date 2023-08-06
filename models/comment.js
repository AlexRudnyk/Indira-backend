const { Schema, model } = require("mongoose");
const Joi = require("joi");

const commentSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "userName is required"],
    },

    text: {
      type: String,
      // required: [true, "text is required"],
      minLength: 2,
      maxLength: 5000,
    },

    reply: {
      type: String,
    },

    good: {
      type: Schema.Types.ObjectId,
      ref: "good",
      required: true,
    },
  },

  { versionKey: false, timestamps: true }
);

const joiCommentsSchema = Joi.object({
  userName: Joi.string().required(),
  text: Joi.string().min(2).max(5000),
  reply: Joi.string(),
});

const Comment = model("comment", commentSchema);

module.exports = {
  Comment,
  joiCommentsSchema,
};

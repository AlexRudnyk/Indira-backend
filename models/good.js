const { Schema, model } = require("mongoose");
const Joi = require("joi");

const goodSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      minlength: 2,
      maxlength: 30,
    },
    text: {
      type: String,
      required: [true, "text is required."],
      minlength: 2,
    },
    description: {
      type: String,
      required: [true, "description is required."],
    },
    photoURL: {
      type: String,
      default: null,
      required: [true, "Photo of the good is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const joiAddGoodSchema = Joi.object({
  title: Joi.string().min(2).max(30).required(),
  text: Joi.string().min(2).required(),
  description: Joi.string().required(),
  photoURL: Joi.string().required(),
  price: Joi.number().required(),
});

const Good = model("good", goodSchema);

module.exports = {
  Good,
  joiAddGoodSchema,
};

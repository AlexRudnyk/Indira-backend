const { Schema, model } = require("mongoose");
const Joi = require("joi");

// const lettersRegex =
//   /^[a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'\s]*[a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'][a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'\s]*$/;

const goodSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      minlength: 2,
      maxlength: 30,
      //   match: [lettersRegex, "Use only letters."],
    },
    text: {
      type: String,
      required: [true, "text is required."],
      minlength: 2,
      //   maxlength: 24,
      //   match: [lettersRegex, "Use only letters."],
    },
    photoURL: {
      type: String,
      default: null,
      // required: [true, "Photo of the good is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    // comments: {
    //   type: String,
    //   minlength: 8,
    //   maxlength: 120,
    //   required: [true, "Please write something about your pet."],
    // },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { versionKey: false, timestamps: true }
);

const joiAddGoodSchema = Joi.object({
  title: Joi.string().min(2).max(30).required(),
  text: Joi.string().min(2).required(),
  photoURL: Joi.string(),
  price: Joi.number().required(),
  //   comments: Joi.string().min(8).max(120).required(),
});

const Good = model("good", goodSchema);

module.exports = {
  Good,
  joiAddGoodSchema,
};

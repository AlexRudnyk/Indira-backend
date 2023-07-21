const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

const nameRegexp =
  /^[a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'\s]*[a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'][a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'\s]*$/;

const passwordRegexp = /^\S+$/;
const phoneRegexp = /^\+380\d{9}$/;
const emailRegexp = /^[^а-яА-ЯёЁ!#$%*/?^`+&{|}~]+@[a-z0-9.-]+\.[a-z]{2,}$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: [true, "Email is required"],
      match: [emailRegexp],
      minLength: 5,
      maxLength: 63,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      match: [passwordRegexp, "Password can't contain white spaces"],
      minLength: 7,
    },

    name: {
      type: String,
      required: [true, "Name is required"],
      match: [nameRegexp, "Name must be only latinic letters"],
      minLength: 2,
      maxLength: 16,
    },

    phone: {
      type: String,
      match: [phoneRegexp, "Please enter a valid phone number"],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    accessToken: {
      type: String,
      default: null,
    },

    refreshToken: {
      type: String,
      default: null,
    },

    goodsInCart: [{ type: Schema.Types.Mixed, ref: "good" }],
  },

  { versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const joiRegisterSchema = Joi.object({
  email: Joi.string().min(5).max(63).pattern(emailRegexp).required(),
  password: Joi.string().min(7).pattern(passwordRegexp).required(),
  name: Joi.string().min(2).max(16).pattern(nameRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().min(5).max(63).pattern(emailRegexp).required(),
  password: Joi.string().min(7).pattern(passwordRegexp).required(),
});

const joiRefreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  joiRefreshTokenSchema,
};

const express = require("express");

const {
  validation,
  ctrlWrapper,
  auth,
  //   passport,
} = require("../../middlewares");

const {
  joiRegisterSchema,
  joiLoginSchema,
  joiRefreshTokenSchema,
} = require("../../models/user");
const { authCtrls: ctrl } = require("../../controllers");

const router = express.Router();

// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["email", "profile"],
//   })
// );
// router.get(
//   "/google/callback",
//   passport.authenticate("google", { session: false }),
//   ctrlWrapper(ctrl.googleAuth)
// );

router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(ctrl.signUp));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.logIn));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.post(
  "/refresh",
  validation(joiRefreshTokenSchema),
  ctrlWrapper(ctrl.refreshToken)
);

router.get("/logout", auth, ctrlWrapper(ctrl.logOut));

module.exports = router;

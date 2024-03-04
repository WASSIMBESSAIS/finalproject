const express = require("express");
const { register, login, auth } = require("../controllers/user.controller");
const {
  registerRules,
  ValidatorMiddleware,
} = require("../middlewares/validator");
const { verifyAuth } = require("../middlewares/veriAuth");

const router = express.Router();

router.post("/register", registerRules, ValidatorMiddleware, register);

router.post("/login", login);

router.get("/auth", verifyAuth, auth);

module.exports = router;

const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("fullName", "this field is required").notEmpty(),
  check("email", "this field is required").notEmpty(),
  check("email", "this field is required").isEmail(),
  check("password", "this field should be at least 6 characters").isLength({
    min: 6,
  }),
];

exports.Validatorr = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};

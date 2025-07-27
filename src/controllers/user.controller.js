const userService = require("../services/user.service");

const userController = {
  signup: async (req, res, next) => {
    try {
      const result = await userService.signup(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = userController;

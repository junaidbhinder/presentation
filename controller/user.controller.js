const user = require("../models/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
module.exports = {
  async userRegister(req, res) {
    try {
      const {
        name,
        email,
        password,
        phone,
        city,
        country,
      } = req.body;

      const oldUser = await user.findOne({ email });

      if (oldUser) {
        return res.status(409).send({
          message: "User Already Exist. Please Provide another email",
        });
      } else {
        encryptedPassword = await bcrypt.hash(password, 10);

        const data = await user.create({
          name,
          email,
          password: encryptedPassword,
          phone,
          city,
          country
        });
        res.status(201).send(data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ success: false, error: error });
    }
  },
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const userData = await user.findOne({ email: email });
      if (userData && (await bcrypt.compare(password, userData.password))) {
        let accessToken = jwt.sign(userData.toJSON(), process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
        return res.status(201).json({
          accessToken,
          userData,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
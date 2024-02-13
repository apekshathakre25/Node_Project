const UserModel = require("../models/user");

const getUSers = async (req, res) => {
  const dbUsers = await UserModel.find({});
  return res.status(200).json({ dbUsers });
};

const createUsers = async (req, res) => {
  const newObj = new User(req.body);
  console.log(newObj);
  await newUser.save();
  return res.status(201).json({ status: "User created successfully" });
};

module.exports = {
  getUSers,
  createUsers,
};

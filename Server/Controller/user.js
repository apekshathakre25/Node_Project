const UserModel = require("../models/user");

const getUSers = async (req, res) => {
  const dbUsers = await UserModel.find({});
  return res.status(200).json({ dbUsers });
};

const createUsers = async (req, res) => {
  const newObj = UserModel(req.body);
  console.log(newObj);
  await newObj.save();
  return res.status(201).json({ status: "User created successfully" });
};

module.exports = {
  getUSers,
  createUsers,
};

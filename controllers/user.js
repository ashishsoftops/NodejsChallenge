const { User } = require("../models/User");
const uniqueId = require("../helper/helper");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.send(err.message);
  }
};
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id: id });
    res.json(user);
  } catch (err) {
    res.send(err.message);
  }
};
const addUser = async (req, res) => {
  try {
    const id = await uniqueId();
    const userModel = new User({ ...req.body, id });
    await userModel.save();
    res.send("Added Successfully");
  } catch (err) {
    res.send(err.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    await User.findOneAndUpdate({ id: id }, { $set: body });
    res.send("Updated Successfully");
  } catch (err) {
    res.send(err.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findOneAndDelete({ id: id });
    res.send("Deleted Successfully");
  } catch (err) {
    res.send(err.message);
  }
};

const typeAhead = async (req, res) => {
  try {
    const { input } = req.params;
    const users = await User.find({
      $or: [
        { firstName: { $regex: `${input}.*` } },
        { lastName: { $regex: `${input}.*` } },
        { email: { $regex: `${input}.*` } },
      ],
    });

    let output = "";
    users.forEach((user, index) => {
      output =
        output +
        `${user.firstName} ${user.lastName} ${
          index < users.length - 1 ? "and" : ""
        } `;
    });
    res.send(output);
  } catch (err) {
    res.send(err.message);
  }
};
module.exports = {
  getAllUsers,
  getById,
  addUser,
  updateUser,
  deleteUser,
  typeAhead,
};

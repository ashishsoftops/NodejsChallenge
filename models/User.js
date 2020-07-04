const mongoose = require("mongoose");
const UserShema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  id: { type: Number, unique: true },
});
const Counter = mongoose.model(
  "counter",
  new mongoose.Schema({ counter: Number, default: 0 })
);

const User = mongoose.model("users", UserShema);

module.exports = { User, Counter };

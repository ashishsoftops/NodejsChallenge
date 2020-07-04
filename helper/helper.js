const { Counter } = require("../models/User");
const generateUniqueId = async () => {
  const counters = await Counter.find({});
  let id;
  if (counters.length > 0) {
    const counter = counters[0];
    counter.counter = counter.counter + 1;
    const saved = await counter.save();
    id = saved.counter;
  } else {
    const counterModel = new Counter({ counter: 1 });
    const saved = await counterModel.save();
    id = saved.counter;
  }
  return id;
};
module.exports = generateUniqueId;

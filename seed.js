const { User } = require("./models/User");
const uniqueId = require("./helper/helper");

const seedData = [
  {
    firstName: "albert",
    lastName: "einstein",
    email: "ae@relativity.com",
  },
  {
    firstName: "marie",
    lastName: "curie",
    email: "mc@radiation.com",
  },
  {
    firstName: "issac",
    lastName: "newton",
    email: "in@gravity.com",
  },
  {
    firstName: "galileo",
    lastName: "galilei",
    email: "gg@astronomy.com",
  },
];

const seed = async () => {
  for (let i = 0; i < seedData.length; i++) {
    const id = await uniqueId();
    const userModel = new User({ ...seedData[i], id });
    await userModel.save();
  }
  console.log("Seed Data Generated");
};

module.exports = seed;

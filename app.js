const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const generateSeed = require("./seed");

const app = express();

(async () => {
  await mongoose.connect("mongodb://localhost:27017/assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await generateSeed();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", routes);

  app.listen(process.env.PORT || 8103, () => {
    console.log(`App Started on PORT ${process.env.PORT || 8103}`);
  });
})();

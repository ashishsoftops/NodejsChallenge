const { Router } = require("express");
const usercontroller = require("../controllers/user");
const user = require("../controllers/user");
const router = new Router();

router.get("/users", usercontroller.getAllUsers);
router.get("/user/:id", usercontroller.getById);
router.post("/user", usercontroller.addUser);
router.put("/user/:id", usercontroller.updateUser);
router.delete("/user/:id", usercontroller.deleteUser);

router.get("/typeahead/:input", usercontroller.typeAhead);

module.exports = router;

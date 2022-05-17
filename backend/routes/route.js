const express = require("express");
const {
  getUser,
  Register,
  Login,
  getRoom,
  postRoom,
} = require("../controllers/UsersController");
// const { Register } = require("../controllers/UsersController");
//import

//tao const router = thu vien express
const router = express.Router();

router.get("/Users", getUser);

router.post("/Users/create", Register);

router.post("/login", Login);

router.get("/Rooms", getRoom);

router.post("/Rooms/create", postRoom);

module.exports = router;

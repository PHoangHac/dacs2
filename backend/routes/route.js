const express = require("express");
const {
  getUser,
  Register,
  Login,
  getRoom,
  postRoom,
  getByRoomId,
  updateRoom,
  deleteRoom,
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

router.get("/Rooms/:id", getByRoomId);

router.patch("/Rooms/:id", updateRoom);

router.delete("/Rooms/:id", deleteRoom);

module.exports = router;

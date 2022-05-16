const express = require("express");
const { getUser } = require("../controllers/DisplayAllUsers");

const router = express.Router();

router.get("/Users", getUser);

module.exports = router;

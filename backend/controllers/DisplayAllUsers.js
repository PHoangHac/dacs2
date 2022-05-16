const db = require("../models/index");
//import database

//Khoi tao const getUser arrow function
const getUser = async (req, res) => {
  try {
    //Cu phap query finder -- findAll
    const users = await db.Users.findAll();
    //Tra ve cac foramt kieu json
    res.json(users);
  } catch (e) {
    console.log(e);
  }
};

//Xuat module de su dungs
module.exports = {
  getUser: getUser,
};

//import
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const db = require("../models/index");
//import database

//Khoi tao const getUser arrow function
//Nhap du lieu tu server
const getUser = async (req, res) => {
  try {
    //Cu phap query finder -- findAll
    const users = await db.Users.findAll();
    //Tra ve cac format kieu json
    res.json(users);
  } catch (e) {
    console.log(e);
  }
};

// const findUser = async (body) => {
//   return await db.Users.findeOne({
//     where: {
//       email: body.email,
//     },
//   });
// };

//Dua du lieu tu client den server
const Register = async (req, res) => {
  const { username, password, email, phonenumber, repeatPassword } = req.body;
  if (password != repeatPassword)
    return res.status(400).json({ msg: "Passwords are not the same !" });
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    // if (user == null) {
    await db.Users.create({
      username: username,
      password: hash,
      email: email,
      phonenumber: phonenumber,
    });
    res.json({ msg: "Register successful !" });
    // } else {
    //   res.json({ msg: "Email already exist !" });
    // }
  } catch (e) {
    console.log(e);
  }
};

// const Login = async (req, res) => {
//   try {
//     const user = await db.Users.findAll({
//       where: {
//         email: req.body.email,
//       },
//     });

//     // console.log(user);

//     const match = await bcrypt.compare(req.body.password, user[0].password);
//     if (!match) return res.status(400).json({ msg: "Wrong password !" });
//     const userId = user[0].id;
//     const username = user[0].username;
//     const phonenumber = user[0].phonenumber;
//     const email = user[0].email;
//     const accessToken = jwt.sign(
//       { userId, username, phonenumber, email },
//       process.env.ACCESS_TOKEN_SECRET,
//       {
//         expiresIn: "20s",
//       }
//     );
//     const refreshToken = jwt.sign(
//       { userId, username, phonenumber, email },
//       process.env.REFRESH_TOKEN_SECRET,
//       {
//         expiresIn: "1d",
//       }
//     );
//     await db.Users.update(
//       { refresh_token: refreshToken },
//       {
//         where: {
//           id: userId,
//         },
//       }
//     );

//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     res.json({ accessToken });
//   } catch (e) {
//     res.status(404).json({
//       msg: "Email not found !",
//     });
//   }
// };

const Login = async (req, res) => {
  const { username, password } = req.body;

  const user = await db.Users.findOne({
    where: { username: username },
  });

  if (!user) res.json({ msg: "User not found !" });

  // bcrypt.compare(password, user.password).then(())
  bcrypt.compare(req.body.password, password).then((match) => {
    if (!match)
      return res.status(400).json({ msg: "Wrong username and password !" });

    res.json({ msg: "Logging successful !" });
  });
};

const getRoom = async (req, res) => {
  try {
    //Cu phap query finder -- findAll
    const rooms = await db.Rooms.findAll();
    //Tra ve cac format kieu json
    res.json(rooms);
  } catch (e) {
    console.log(e);
  }
};

const postRoom = async (req, res) => {
  const { title, address, price, member, username } = req.body;
  try {
    // if (user == null) {
    await db.Rooms.create({
      title: title,
      address: address,
      price: price,
      member: member,
      username: username,
    });
    res.json({ msg: "Create successful !" });
    // } else {
    //   res.json({ msg: "Email already exist !" });
    // }
  } catch (e) {
    console.log(e);
  }
};

const getByRoomId = async (req, res) => {
  try {
    const rooms = await db.Rooms.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(rooms[0]);
  } catch (err) {
    res.json({ msg: err.msg });
  }
};

const updateRoom = async (req, res) => {
  try {
    await db.Rooms.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Update successful !" });
  } catch (err) {
    res.json({ msg: err.msg });
  }
};

const deleteRoom = async (req, res) => {
  try {
    await db.Rooms.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Delete successful !" });
  } catch (err) {
    res.json({ msg: err.msg });
  }
};

//Xuat module de su dungs
module.exports = {
  getUser: getUser,
  Register: Register,
  Login: Login,
  getRoom: getRoom,
  postRoom: postRoom,
  getByRoomId: getByRoomId,
  updateRoom: updateRoom,
  deleteRoom: deleteRoom,
};

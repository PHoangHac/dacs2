//import thu vien
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//import modules
const connectDB = require("./config/connectionDB");
const router = require("./routes/route");

dotenv.config();

//khoi tao doi tuong == express
const app = express();

//khoi tao cong port
const port = 7070;

//Su dung json
app.use(express.json());
app.use(cors());

//Ket noi den database mysql
connectDB();

//khoi tao method get nhap du lieu
app.get("/", (req, res) => {
  res.send("Hello worl !");
});

//chi dinh Su dung router
app.use(router);

//lang nghe cong port
app.listen(port, () => {
  console.log(`Server is running port: ${port}`);
});

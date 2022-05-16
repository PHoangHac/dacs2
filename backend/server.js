//import thu vien
const express = require("express");

//import modules
const connectDB = require("./config/connectionDB");
const router = require("./routes/route");

//khoi tao doi tuong == express
const app = express();

//khoi tao cong port
const port = 7070;

//Su dung json
app.use(express.json());

//Ket noi den database mysql
connectDB();

//khoi tao method get gui du lieu
app.get("/", (req, res) => {
  res.send("Hello worl !");
});

//chi dinh Su dung router
app.use(router);

//lang nghe cong port
app.listen(port, () => {
  console.log(`Server is running port: ${port}`);
});

import "./App.scss";
import Homepage from "./containers/homepage";
import ListProduct from "./components/product/listproduct";
import Header from "./components/header";
// import Login from "./components/auth/login";
import Login2 from "./components/auth/login2";
// import Register from "./components/auth/register";
import Register2 from "./components/auth/register2";
import Alluser from "./components/auth/Alluser";
import DisplayRooms from "./components/product/DisplayRooms";
import CreateRooms from "./components/product/CreateRoom";
import DetailsRoom from "./components/product/DetailRoom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/Features" element={<ListProduct />} />
        <Route path="/Login" element={<Login2 />} />
        <Route path="/Register" element={<Register2 />} />
        <Route path="/Alluser" element={<Alluser />} />
        <Route path="/DisplayRooms" element={<DisplayRooms />} />
        <Route path="/CreateRooms" element={<CreateRooms />} />
        <Route path="/DetailRooms/:id" element={<DetailsRoom />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;

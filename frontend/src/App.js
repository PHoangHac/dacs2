import "./App.scss";
import Homepage from "./containers/homepage";
import ListProduct from "./components/product/listproduct";
import Header from "./components/header";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/Features" element={<ListProduct />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;

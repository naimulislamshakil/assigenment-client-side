import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/pages/Home/Home";
import Navbar from "./Component/Shared/Navbar";
import Login from "./Component/pages/Home/Login";
import Singup from "./Component/pages/Home/Singup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singup" element={<Singup />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

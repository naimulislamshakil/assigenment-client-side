import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Component/pages/Home/Home";
import Navbar from "./Component/Shared/Navbar";
import Login from "./Component/pages/Home/Login";
import Singup from "./Component/pages/Home/Singup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Dashboard from "./Component/pages/Dashbord/Dashboard";
// import RequireAuth from "./Component/Shared/RequireAuth";

function App() {
  const navi = useNavigate();
  const [user, setUser] = useState({});

  return (
    <div className="container mx-auto">
      <Navbar user={user} setUser={setUser}></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        <Route path="/singup" element={<Singup />}></Route>
        <Route
          path="/dashboard"
          element={
            !user._id ? (
              <>
                <div className="flex items-center justify-center w-screen h-screen">
                  <div className="px-4 lg:py-12">
                    <div className="lg:gap-4 lg:flex">
                      <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                        <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                          <span className="text-red-500">Oops!</span> Page is
                          procted
                        </p>

                        <Link
                          to="/login"
                          className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Dashboard />
            )
          }
        ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

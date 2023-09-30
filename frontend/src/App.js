import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dash from "./components/Dashboard/Dash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

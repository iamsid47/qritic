import React from "react";
import Navbar from "../Common/Navbar";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../Common/Footer";

const Dash = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="">
      <Navbar />
      <p className="text-center text-8xl py-4">Dashboard</p>
      <br />
      {user ? (
        <>
          <p>{user.userEmail}</p>
          <p>{user.userCompany}</p>
          <p>{user.userName}</p>
          <p>{user.jobTitle}</p>
          <button
            className="px-4 py-2 bg-blue-600 rounded-xl text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
      <Footer />
    </div>
  );
};

export default Dash;

import React from "react";
import Layout from "./Layout";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    logout();
    navigate("/");
  };
  return (
    <Layout>
      {user ? (
        <div className="">
          <div className="">
            <br />

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
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col text-white bg-sky-700 items-center mx-auto justify-center space-y-8">
          <p className="text-center text-2xl">
            You are not logged in
            <span className="text-4xl font-medium px-3">:&#40;</span>
          </p>
          <a href="/login" className="secondarybtn">
            Login &rarr;
          </a>
        </div>
      )}
    </Layout>
  );
};

export default Account;

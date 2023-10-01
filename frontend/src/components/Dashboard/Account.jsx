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
          <div className="w-full flex flex-col justify-center items-start px-12 my-12 py-4 border-2 border-gray-300 rounded-xl">
            <div className="py-2">
              <label htmlFor="name" className="text-gray-600 uppercase">
                Client Name
              </label>
              <p className="font-bold text-xl">{user.userName}</p>
            </div>
            <div className="py-2">
              <label htmlFor="name" className="text-gray-600 uppercase">
                Email Address
              </label>
              <p className="font-bold text-xl">{user.userEmail}</p>
            </div>
            <div className="py-2">
              <label htmlFor="name" className="text-gray-600 uppercase">
                Company
              </label>
              <p className="font-bold text-xl">{user.userCompany}</p>
            </div>
            <div className="py-2">
              <label htmlFor="name" className="text-gray-600 uppercase">
                Job Title
              </label>
              <p className="font-bold text-xl">{user.jobTitle}</p>
            </div>
          </div>

          <div className="flex space-x-5">
            <div>
              <button className="dangerbtn" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <div>
              <button className="primarybtn" onClick={handleLogout}>
                Change Password &rarr;
              </button>
            </div>
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

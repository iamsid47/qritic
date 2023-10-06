import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import { useAuth } from "./AuthContext";
import { reqURL } from "../../constants";
import "../../Global.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Common/Footer";

const Signup = () => {
  const { user, logout } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [cpassword, setcpassword] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      window.alert("Passwords do not match. Please try again.");
      return;
    }

    try {
      const response = await axios.post(`${reqURL}/user/signup`, {
        email: email,
        password: password,
        username: name,
        company: company,
        jobTitle: jobTitle,
      });

      window.alert("Registration Successful!");
      navigate("/login");

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className=" ">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-6 py-24 mx-auto md:h-screen min-h-screen lg:py-0 md:py-16 bg-gray-900">
        <h1 className="flex items-center mb-6 text-3xl font-semibold  text-white">
          Register your account
        </h1>
        {!user ? (
          <div className="w-full  rounded shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    className=" border   sm:text-sm rounded   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Jim Halpert"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className=" border   sm:text-sm rounded   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="jimothy@dundermifflin.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    onChange={(e) => setCompany(e.target.value)}
                    className=" border   sm:text-sm rounded   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ABC Sample Co."
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    onChange={(e) => setjobTitle(e.target.value)}
                    className=" border   sm:text-sm rounded   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Recruiter"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className=" border  sm:text-sm rounded  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="cpassword"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    onChange={(e) => setcpassword(e.target.value)}
                    placeholder="••••••••"
                    className=" border  sm:text-sm rounded  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <button type="submit" className="w-full primarybtn">
                  Register
                </button>
                <p className="text-sm font-light text-white">
                  Already have an account yet?{" "}
                  <a
                    href="/login"
                    className="font-medium  hover:underline text-blue-500"
                  >
                    Log in
                  </a>
                </p>
              </form>
            </div>
          </div>
        ) : (
          <h1 className="flex items-center mb-6 text-xl font-semibold  text-white">
            You are already logged in! Want to logout?{" "}
            <button className="text-blue-500 mx-1.5" onClick={handleLogout}>
              Click Here!
            </button>
          </h1>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Signup;

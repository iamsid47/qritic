import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import axios from "axios";
import { reqURL } from "../../constants";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "../../Global.css";
import Footer from "../Common/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${reqURL}login`, {
        email: email,
        password: password,
      });
      const receivedAccessToken = response.data.access_token;
      const userData = response.data.userData;

      login(userData, receivedAccessToken);
      navigate("/dashboard");

      console.log(response.data);
      console.log("UserEmail: ", response.data.userData.userEmail);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-900">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 -mt-8">
        <h1 className="flex items-center mb-6 text-3xl font-semibold text-white">
          Log in to your account
        </h1>
        <div className="w-full rounded shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border sm:text-sm rounded block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="border sm:text-sm rounded block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between my-2">
                <a
                  href="/forgot-password"
                  className="text-sm font-medium hover:underline text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="w-full primarybtn">
                Sign in
              </button>
              <p className="text-sm font-light text-white">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium hover:underline text-blue-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;

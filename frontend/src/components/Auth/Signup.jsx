import React from "react";
import Navbar from "../Common/Navbar";

const Signup = () => {
  return (
    <section class=" bg-gray-900">
      <Navbar />
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 -mt-8">
        <a
          href="/"
          class="flex items-center mb-6 text-3xl font-semibold  text-white"
        >
          Register your account
        </a>
        <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form class="space-y-4 md:space-y-6" onSubmit={<></>}>
              <div>
                <label
                  htmlFor="name"
                  class="block mb-2 text-sm font-medium  text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class=" border   sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Jim Halpert"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium  text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class=" border   sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="jimothy@dundermifflin.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium  text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="cpassword"
                  class="block mb-2 text-sm font-medium  text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="••••••••"
                  class=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                class="w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Register
              </button>
              <p class="text-sm font-light text-white">
                Already have an account yet?{" "}
                <a
                  href="/login"
                  class="font-medium  hover:underline text-blue-500"
                >
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

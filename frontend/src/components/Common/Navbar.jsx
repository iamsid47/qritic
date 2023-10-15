import React, { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import "../../Global.css";

const navItems = [
  { text: "Why", link: "/why" },
  { text: "Playground", link: "/playground" },
  { text: "Pricing", link: "/pricing" },
  { text: "Let's Talk", link: "/contact" },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { user } = useAuth();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="">
      <nav className="border-gray-200 bg-gray-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-6">
          <a href="/" className="flex items-center">
            <h1 className="self-center text-3xl font-bold whitespace-nowrap bg-sky-400 bg-clip-text text-transparent logo">
              Qritic
            </h1>
          </a>
          <button
            type="button"
            onClick={toggleNav}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden ring-2  hover:bg-gray-700 focus:ring-gray-600"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className={`w-5 h-5 ${isNavOpen ? "hidden" : "block"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <svg
              className={`w-5 h-5 ${isNavOpen ? "block" : "hidden"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M14.293 5.293a1 1 0 0 1 1.414 1.414L11 12.414l-4.707-4.707a1 1 0 1 1 1.414-1.414L11 9.586l2.293-2.293a1 1 0 0 1 1.414 0z"
              />
            </svg>
          </button>

          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:items-center border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-transparent border-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block py-2 pl-3 pr-4 uppercase text-sm rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover-bg-gray-700 hover:text-white md:hover:bg-transparent hover:bg-blue-600 "
                  >
                    {item.text}
                  </a>
                </li>
              ))}

              {user ? (
                <li>
                  <a
                    href="/dashboard"
                    className="primarybtn md:-ml-3 block md:inline uppercase"
                  >
                    Dashboard
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <a
                      href="/login"
                      className="secondarybtn block md:inline uppercase"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signup"
                      className="primarybtn md:-ml-3 block md:inline uppercase"
                    >
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

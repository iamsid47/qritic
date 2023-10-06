import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Playground = () => {
  return (
    <section>
      <Navbar />
      <div className="min-h-screen flex flex-col space-y-3 items-center justify-center bg-gray-900">
        <svg
          className="animate-spin-slow"
          width="150"
          height="150"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_104_35)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M107.143 0H92.8571V63.2531L69.1621 4.60582L55.9166 9.95735L80.2255 70.1239L34.3401 24.2385L24.2386 34.3401L68.2177 78.3191L11.2241 53.4181L5.50459 66.5089L65.8105 92.8571H0V107.143H65.8104L5.50461 133.491L11.2241 146.582L68.2176 121.681L24.2386 165.66L34.3401 175.761L80.2255 129.876L55.9166 190.043L69.1621 195.394L92.8571 136.747V200H107.143V136.747L130.838 195.394L144.083 190.043L119.775 129.876L165.66 175.761L175.761 165.66L131.782 121.681L188.776 146.582L194.495 133.491L134.19 107.143H200V92.8571H134.189L194.495 66.5089L188.776 53.4181L131.782 78.3191L175.761 34.34L165.66 24.2385L119.775 70.1238L144.083 9.95735L130.838 4.60582L107.143 63.2531V0Z"
              fill="url(#paint0_linear_104_35)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_104_35"
              x1="14"
              y1="26"
              x2="179"
              y2="179.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E9B8FF" />
              <stop offset="1" stop-color="#F9ECFF" />
            </linearGradient>
            <clipPath id="clip0_104_35">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="text-7xl text-center text-white">
          Playground Coming Soon
        </h1>
        <form action="#">
          <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm flex flex-col justify-center">
            <div class="relative w-full">
              <label
                for="email"
                class="hidden mb-2 text-sm font-medium  text-gray-300"
              >
                Email address
              </label>
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5  text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                class="block p-3 pl-10 w-full text-sm  rounded border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your email"
                type="email"
                id="email"
                required=""
              />
            </div>

            <button type="submit" class="primarybtn w-full">
              Let me know &rarr;
            </button>
          </div>

          <div class="mx-auto max-w-screen-sm text-xs text-left  newsletter-form-footer text-gray-300">
            We care about the protection of your data.{" "}
            <a
              href="/privacy"
              class="font-medium text-primary-600 text-primary-500 hover:underline"
            >
              Read our Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Playground;

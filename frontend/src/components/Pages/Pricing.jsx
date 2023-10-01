import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
const includedFeatures = [
  { number: "1000", text: "Resumes / Check" },
  { number: "30", text: "Job Posts" },
  { number: "24/7", text: "Priority Support" },
  { number: "", text: "Custom Hosting" },
  { number: "", text: "White Label Access" },
];

export default function Pricing() {
  return (
    <section>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple no-tricks pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Qritic, we believe in providing straightforward and honest
              pricing. <br />
              No hidden fees or tricks.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Monthly Pricing
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Choose our monthly subscription plan that would suit your extra
                needs. Cancel anytime. Custom enterprise pricing is available
                upon request.{" "}
                <a
                  href="/contact"
                  className="text-blue-500 underline underline-offset-4"
                >
                  Just email us here!
                </a>
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="20"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                      id="IconChangeColor"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                            clip-rule="nonzero"
                            id="mainIconPathAttribute"
                            fill="green"
                          ></path>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#id1)">
                        <path
                          fill="green"
                          d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                          id="mainIconPathAttribute"
                        ></path>
                      </g>
                    </svg>{" "}
                    <span className="font-bold mx-1">{feature.number}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Monthly
                  </p>
                  <p className="mt-6 mb-12 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900 ">
                      <span className="line-through px-2">$29</span>
                      <span className="italic text-gray-700">FREE*</span>
                    </span>{" "}
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a href="/signup" className="primarybtn w-full block my-6">
                    Get Started &rarr;
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <p className="text-base font-semibold text-gray-500">
              * As a part of our promotional offer, we're giving out free access
              to Qritic for a limited time!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

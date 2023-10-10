import React from "react";
import {
  CurrencyDollarIcon,
  BoltIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Detailed Results within 30 Minutes",
    description:
      "With Qritic, you get detailed review of each candidate. It's not just a score. It's a biography. And you get to pick the best one.",
    icon: BoltIcon,
  },
  {
    name: "Out of the box Accuracy",
    description:
      "Our AI-powered model is designed to provide accurate rankings by drawing on a wealth of information about every resume and understanding what matters most.",
    icon: ChevronDoubleUpIcon,
  },
  {
    name: "Cost Effective",
    description:
      "Since running Qritic costs less, and we love you as well, we have decided to keep things lower than the current market prices so that you can take full advantage for Qritic.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "At your service. Day & Night",
    description:
      "Qritic is available 24/7, which means you can rank your candidates at any time of the day or night. Will an HR do that for you at 12 AM? Well, Qritic can!",
    icon: ChatBubbleBottomCenterIcon,
  },
];

const Benefits = () => {
  return (
    <section>
      {" "}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
            <h2 className="text-base font-semibold leading-7 text-teal-200 bg-teal-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
              Benefits
            </h2>
            <h1 className=" lg:text-7xl text-6xl font-bold tracking-tight text-gray-900 text-center">
              Extremely{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
                fast & accurate
              </span>{" "}
              rankings
            </h1>
            <p className="mt-6 text-md text-gray-600 max-w-lg text-center">
              Qritic offers a number of benefits that can help us provide
              better, faster, and more consistent support to our customers.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import React from "react";
import {
  CurrencyDollarIcon,
  BoltIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Available 24/7",
    description:
      "Qritic is available 24/7, which means you can get the support you need at any time of the day or night, even outside of regular business hours.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Instant Response",
    description:
      "With Qritic, you can get instant responses to your queries, without having to wait on hold or for a support rep to get back to you. This can save you time and make the support process more efficient.",
    icon: BoltIcon,
  },
  {
    name: "Out of the box Accuracy",
    description:
      "Our AI-powered chatbot is designed to provide accurate responses to queries, drawing on a wealth of information about our products and services.",
    icon: ChevronDoubleUpIcon,
  },
  {
    name: "Cost Effective",
    description:
      "Since Qritic is an AI-powered chatbot, we can provide support to customers at a lower cost than we could with a team of support reps.",
    icon: CurrencyDollarIcon,
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
                fast & accurate rankings.
              </span>
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

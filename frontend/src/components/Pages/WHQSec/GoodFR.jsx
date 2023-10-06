import React from "react";

const GoodFR = () => {
  return (
    <section className="my-16 flex flex-col space-y-5 ">
      <div className="my-2">
        <h1 className="text-center text-gray-900 text-6xl capitalize font-bold">
          <span className="line-through text-gray-500">Good</span> Great for a{" "}
          <span className="text-green-200 bg-green-600 px-3 py-0.5 rounded-lg">
            reason
          </span>
        </h1>
      </div>
      <div class="max-w-4xl mx-auto">
        <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
          <div class="flex flex-col border-b border-gray-200 p-8 text-center sm:border-0 sm:border-r">
            <dt class="order-2 mt-2 text-lg uppercase font-medium text-gray-400">
              Resumes Ranked
            </dt>
            <h1 class="order-1 text-5xl font-extrabold text-gray-700">
              17,896
            </h1>
          </div>
          <div class="flex flex-col border-t border-b border-gray-200 p-8 text-center sm:border-0 sm:border-l sm:border-r">
            <dt class="order-2 mt-2 text-lg uppercase font-medium text-gray-400">
              Accuracy
            </dt>
            <h1 class="order-1 text-5xl font-extrabold text-gray-700">92.7%</h1>
          </div>
          <div class="flex flex-col border-t border-gray-200 p-8 text-center sm:border-0 sm:border-l">
            <dt class="order-2 mt-2 text-lg uppercase font-medium text-gray-400">
              Inc 5000 Clients
            </dt>
            <h1 class="order-1 text-5xl font-extrabold text-gray-700">28</h1>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default GoodFR;

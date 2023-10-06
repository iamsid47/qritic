import React from "react";

import Layout from "./Layout";

const Dash = () => {
  return (
    <Layout>
      <section>
        <div className="w-full bg-sky-500 py-4 rounded my-4 flex justify-between items-center">
          <h1 className="text-md text-white text-center col-span-2 mx-5">
            More exciting features coming soon!
          </h1>
          <button className="dangerbtn mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 50 50"
              overflow="visible"
              stroke="white"
              stroke-width="10"
              stroke-linecap="round"
            >
              <line x2="50" y2="50" />
              <line x1="50" y2="50" />
            </svg>
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Dash;

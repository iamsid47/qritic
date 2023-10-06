import React, { useState } from "react";

const Alert = () => {
  const [hidden, setHidden] = useState(false);
  const handleClose = () => {
    setHidden(!hidden);
  };
  return (
    <section>
      {hidden ? null : (
        <div className="w-full bg-gray-950 py-1 rounded my-4 flex justify-between items-center">
          <h1 className="text-md text-white text-center py-1 col-span-2 mx-5 font-semibold">
            More exciting features coming soon!
          </h1>
          <button className="dangerbtn mx-5 py-1" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 50 50"
              overflow="visible"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
            >
              <line x2="50" y2="50" />
              <line x1="50" y2="50" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Alert;

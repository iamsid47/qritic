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
          <h1 className="text-md text-white text-left py-1 col-span-2 mx-5 font-light max-w-4xl">
            Note: We've set up Rate Limits to each account for safety purposes.
            You can <span className="font-bold">upload upto 20 resumes</span>{" "}
            (.pdf format without images) and{" "}
            <span className="font-bold">1 job description per check</span>, and{" "}
            <span className="font-bold">upto 5 checks per day</span>. This limit
            will be removed soon.
          </h1>
          <button className="dangerbtn mx-5 my-1" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              overflow="visible"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            >
              <line x2="24" y2="24" />
              <line x1="24" y2="24" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Alert;

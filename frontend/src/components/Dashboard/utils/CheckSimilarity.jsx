import React from "react";

const CheckSimilarity = () => {
  return (
    <section className="my-6">
      <section className=" rounded-xl border border-dashed border-gray-700">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex flex-col items-center justify-center space-y-8 text-center">
          <div className="max-w-screen-md ">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold  text-gray-900">
              Get real work done.
            </h2>
            <p className="mb-8 font-light text-2xl text-gray-400">
              Check out for best candidates by uploading list of resumes and a
              job description file right below!
            </p>
            <div className="flex flex-col space-y-4 justify-center">
              <a href="/" className="primarybtn">
                Upload Resumes &rarr;
              </a>
              <a href="/" className="secondarybtn">
                Upload Job Description &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CheckSimilarity;

import React from "react";
import bgCover from "../assets/bg-cover.jpg";
import "../../Global.css";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgCover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <div
      className="flex items-center mx-auto px-4 md:px-0 md:block md:mx-0 min-h-screen"
      style={backgroundStyle}
    >
      <section className=" py-10 sm:py-16 lg:py-32 mx-3 md:mx-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <a
                href="/why"
                className="text-base font-semibold tracking-tight text-black hover:text-blue-600 uppercase rounded-full px-4 py-3 bg-white hover:bg-gray-200 inline transition duration-300"
              >
                Try Playground &rarr;
              </a>
              <h1 className="mt-4  font-bold text-white lg:mt-8 text-4xl md:text-6xl tracking-tight">
                Recruiters receive{" "}
                <span className="font-extrabold text-sky-200 italic mr-1">
                  thousands
                </span>{" "}
                of resumes{" "}
                <span className="text-red-200 bg-red-600 px-3  rounded-lg">
                  everyday
                </span>
              </h1>
              <p className="mt-6 mb-10 text-base text-white lg:mt-8 sm:text-xl max-w-md">
                We're stepping in to save you a{" "}
                <span className="underline font-semibold italic">
                  hell lot of time
                </span>
                , and get the best candidates!
              </p>

              <a
                href="/signup"
                title=""
                className="primarybtn text-xl"
                role="button"
              >
                Get Started &rarr;
              </a>

              <p className="mt-24 text-gray-300">
                Already joined us?{" "}
                <a href="/login" title="" className="text-blue-600 font-bold">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

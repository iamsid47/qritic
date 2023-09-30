import React from "react";
import "../../Global.css";

const Hero = () => {
  return (
    <div class="bg-white">
      <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24 mx-3 md:mx-0">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p class="text-base font-semibold tracking-tight text-blue-600 uppercase">
                Try Playground &rarr;
              </p>
              <h1 class="mt-4  font-bold text-black lg:mt-8 text-4xl md:text-6xl  tracking-tighter">
                Recruiters receive{" "}
                <span className="underline font-extrabold">thousands</span> of
                resumes everyday
              </h1>
              <p class="my-6 text-base text-black lg:mt-8 sm:text-xl max-w-md">
                We're stepping in to save you a{" "}
                <span className="underline font-semibold italic">
                  hell lot of time
                </span>
                , and get the best candidates!
              </p>

              <a
                href="/signup"
                title=""
                class="primarybtn text-xl"
                role="button"
              >
                Join for free &rarr;
              </a>

              <p class="mt-6 text-gray-600">
                Already joined us?{" "}
                <a href="/login" title="" class="text-blue-600 font-bold">
                  Log in
                </a>
              </p>
            </div>

            <div>
              <img
                class="w-11/12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

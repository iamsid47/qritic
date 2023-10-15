import React from "react";

const CTA = () => {
  return (
    <section className="bg-white">
      <section className="bg-white pt-12">
        <div className="pt-8 pb-16 px-4 mx-auto max-w-3xl lg:px-6">
          <div className="mx-auto text-center">
            <h1 className=" mb-4 text-5xl xl:text-6xl tracking-tight font-extrabold py-2">
              So, would you like to{" "}
              <span className="text-green-200 bg-green-600 px-3 rounded-lg">
                save
              </span>{" "}
              a hell lot of ⌚ ?
            </h1>
            <p className="mb-8 lg:mb-6 text-gray-600  md:text-lg">
              Try <strong>Qritic</strong> for free. No credit card required.
            </p>
            <a href="/get-started" className="primarybtn text-xl">
              Get Started &rarr;
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CTA;

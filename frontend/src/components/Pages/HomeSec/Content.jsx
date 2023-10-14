import React from "react";
import wheelImg from "../../../assets/Electrical Engineers_wheel.png";
import accuImg from "../../../assets/precision.png";
import bestMatchImg from "../../../assets/bestmatch.png";

const Content = () => {
  return (
    <section className="py-16 bg-white flex flex-col space-y-12">
      <section className="mx-4">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 bg-amber-300 rounded-3xl shadow-xl">
          <div className="font-light px-6 sm:text-lg text-orange-900">
            <h1 className="mb-8 text-6xl tracking-tight lg:text-5xl font-extrabold  text-orange-800">
              We did not reinvent the wheel, we made it{" "}
              <span className="underline underline-offset-4">better</span>.
            </h1>
            <p className="mb-4 text-md font-medium">
              Everybody knows that there are other players in this market. Your
              company knows too! But what you don't know is that Qritic is{" "}
              <span className="font-bold text-xl">10x more effective</span> and
              faster than what other ranking apps are doing.
            </p>
            <a
              href="/signup"
              className="text-xl font-medium underline underline-offset-4 hover:no-underline"
            >
              Give it a shot &rarr;
            </a>
          </div>
          <div className="gap-4 mt-8 bg-white rounded-xl">
            <img
              className="w-full rounded-xl shadow-2xl"
              src={wheelImg}
              alt="office content 1"
            />
          </div>
        </div>
      </section>
      <section className="flex-col space-x-0 space-y-12 flex justify-center md:space-x-12 md:space-y-0 md:flex-row mx-4">
        <div className="gap-10  py-8 px-4 max-w-xl flex flex-col-reverse lg:py-16 lg:px-6 bg-blue-800 rounded-3xl shadow-xl">
          <div className="font-light px-6 sm:text-lg text-pink-300 order-last">
            <h1 className="mb-4 text-6xl tracking-tight lg:text-5xl font-extrabold  text-pink-300">
              Accuracy? Oh it's 92.67% and improving
            </h1>
            <p className="mb-4 text-md font-medium">
              We are strategists, innovators, and developers. We wanna make sure
              that you get the best of all. That is why we're continuously
              improving Qritic to get you the best.
            </p>
          </div>
          <div className="mt-0">
            <img
              className=" rounded-3xl "
              src={accuImg}
              alt="office content 1"
            />
          </div>
        </div>
        <div className="gap-10  py-8 px-4 max-w-xl flex flex-col-reverse lg:py-16 lg:px-6 bg-fuchsia-200 rounded-3xl shadow-xl">
          <div className="font-light px-6 sm:text-lg text-rose-500 order-last">
            <h1 className="mb-4 text-6xl tracking-tight lg:text-5xl font-extrabold  text-rose-500">
              Leave the herd & get the best candidate for your team
            </h1>
            <p className="mb-4 text-md font-medium">
              Everybody likes an employee that does something out of the box.
              That <span className="font-bold">knows</span> what needs to be
              done. As if they've got that magic within them! Well, we're here
              just to find that!
            </p>
          </div>
          <div className="mt-0">
            <img
              className=" rounded-3xl "
              src={bestMatchImg}
              alt="office content 1"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Content;

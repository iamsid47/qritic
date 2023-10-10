import React from "react";

const Content = () => {
  return (
    <section className="py-16 bg-white flex flex-col space-y-12">
      <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 bg-amber-300 rounded-3xl shadow-xl">
          <div className="font-light px-6 sm:text-lg text-orange-900">
            <h1 className="mb-8 text-6xl tracking-tight lg:text-5xl font-extrabold  text-orange-800">
              We didn't reinvent the wheel
            </h1>
            <p className="mb-4 text-md font-medium">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p className="text-md font-medium">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-xl shadow-xl"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-xl shadow-xl"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center space-x-12">
        <div className="gap-10  py-8 px-4 max-w-xl flex flex-col-reverse lg:py-16 lg:px-6 bg-blue-800 rounded-3xl shadow-xl">
          <div className="font-light px-6 sm:text-lg text-pink-300 order-last">
            <h1 className="mb-4 text-6xl tracking-tight lg:text-5xl font-extrabold  text-pink-300">
              We didn't reinvent the wheel
            </h1>
            <p className="mb-4 text-md font-medium">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="mt-0">
            <img
              className=" rounded-3xl shadow-xl"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
              alt="office content 1"
            />
          </div>
        </div>
        <div className="gap-10  py-8 px-4 max-w-xl flex flex-col-reverse lg:py-16 lg:px-6 bg-fuchsia-200 rounded-3xl shadow-xl">
          <div className="font-light px-6 sm:text-lg text-rose-500 order-last">
            <h1 className="mb-4 text-6xl tracking-tight lg:text-5xl font-extrabold  text-rose-500">
              We didn't reinvent the wheel
            </h1>
            <p className="mb-4 text-md font-medium">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="mt-0">
            <img
              className=" rounded-3xl shadow-xl "
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
              alt="office content 1"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Content;

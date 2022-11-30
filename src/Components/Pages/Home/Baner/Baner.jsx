import React, { useState } from "react";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";

const Baner = () => {
  const [count, setCount] = useState(0);
  const sliderImg = [
    "https://i.ibb.co/2vg4XRF/dribbble-1.gif",
    "https://i.ibb.co/Rp6GNfZ/images-2.jpg",
    "https://i.ibb.co/2vg4XRF/dribbble-1.gif",
    "https://i.ibb.co/Rp6GNfZ/images-2.jpg",
  ];

  const hendelSliderPreves = () => {
    if (count === 0) {
      setCount(sliderImg.length - 1);
    } else {
      setCount(count - 1);
    }
  };
  const hendelSliderNext = () => {
    const sliderLength = sliderImg.length - 1;
    if (sliderLength === count) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <section className="py-20">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
              Easiest way to create your website
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Clean and Simple Layout</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Just Copy Paste Codeing</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Easy to Use</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
            <form className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full h-96 lg:w-1/2 ">
          <div className="absolute flex items-center justify-between w-full px-5">
            <button onClick={hendelSliderPreves} className="btn btn-circle">
              <TbPlayerTrackPrev className="text-lg" />
            </button>
            <button onClick={hendelSliderNext} className="btn btn-circle">
              <TbPlayerTrackNext className="text-lg" />
            </button>
          </div>
          <img
            src={sliderImg[count]}
            alt="slider img"
            className="w-full h-[100%] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Baner;

import React from "react";
import heroImage from "../assets/heroImage.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="py-20 bg-background">
      <div className="fix-alignment">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row justify-between">
          <div className="flex flex-col gap-8 md:w-1/2">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h1 className="text-primary  text-4xl md:font-5xl font-bold">
                Optimize Your Hybrid Workspace Effortlessly
              </h1>
              <h2 className="text-foreground  font-normal text-lg ">
                WorkNest provides a smart, flexible, and efficient way to manage
                your office resources, from desk booking to in-depth analytics.
              </h2>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link to={"/signup"}>
                  <button className="btn-primary">Get Started Free</button>
                </Link>
                <button className=" cursor-pointer  overflow-hidden rounded-lg h-10 px-5 bg-gray-200 dark:bg-gray-700 text-foreground dark:text-white text-base font-semibold  hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-full bg-center bg-no-repeat bg-cover rounded-xl"
              alt="Hero Image"
              src={heroImage}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

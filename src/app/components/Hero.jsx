import React from "react";
import CtaButton from "./Button";
import Image from "next/image";


// Helper components for icons to keep the main component clean
const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    className="mr-2 h-5 w-5"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z"
      fill="currentColor"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2 h-5 w-5"
  >
    <path
      d="M9 20H6C3.79086 20 2 18.2091 2 16V7C2 4.79086 3.79086 3 6 3H17C19.2091 3 21 4.79086 21 7V10"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2V4"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 2V4"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 8H21"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 15.6429L17 17.1429"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="17"
      cy="17"
      r="5"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// We'll inject the keyframe animations directly for this self-contained component
const Keyframes = () => (
  <style>
    {`
      @keyframes morph {
        0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      }
      @keyframes float {
        0% { transform: translatey(0px); }
        50% { transform: translatey(-20px); }
        100% { transform: translatey(0px); }
      }
    `}
  </style>
);

const App = () => {
  return (
    <>
      <Keyframes />
      <section
        id="hero"
        className="relative flex  items-center justify-center overflow-hidden bg-pastel-gradient pt-12 pb-18 font-sans"
      >
        
        <div className="section-container">
            {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 h-full w-full">
          <div className="absolute top-[-20%] left-[10%] h-[500px] w-[500px] animate-[morph_8s_ease-in-out_infinite] rounded-full bg-purple-300-50 opacity-60 blur-3xl"></div>
          <div className="absolute top-[20%] right-[5%] h-[400px] w-[600px] animate-[morph_8s_ease-in-out_2s_infinite] rounded-full bg-pink-300-50 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[25%] h-[300px] w-[500px] animate-[morph_8s_ease-in-out_4s_infinite] rounded-full bg-blue-300-50 opacity-60 blur-3xl"></div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white-30 backdrop-blur-xl"></div>

        <div className="">
          <div className="grid items-center gap-16 grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div data-aos="fade-right" className="text-center lg:text-left  ">
              <div className="mb-8 inline-flex items-center rounded-full border border-white/50 px-4 py-2 text-sm font-medium color-purple-800 welcome-shadow backdrop-blur-sm">
                <span className="mr-2.5 h-2.5 w-2.5 animate-pulse rounded-full bg-dark-pink"></span>
                Welcome to Ikigai Daycare & Preschool
              </div>

              {/* Main Heading with 3D Glassmorphism Effect */}
              <h1
                className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-extrabold leading-tight color-h1-blue h1-text-shadow"
                
              >
                Nurturing{" "}
                <span className="text-gradient-purple-pink bg-clip-text text-transparent">
                  Joy
                </span>{" "}
                &{" "}
                <span className="text-gradient-pink-blue  bg-clip-text text-transparent">
                  Curiosity
                </span>{" "}
                in Every Child
              </h1>

              <p className=" mb-10 text-lg leading-relaxed color-p-blue   ">
                Where little minds blossom through playful learning and
                discovery in a safe, loving environment designed for growth and
                happiness.
              </p>

              {/* Neumorphic CTA Buttons */}
              <div className="mb-10 flex flex-col justify-center  gap-6 md:flex-row lg:justify-start">
                <CtaButton className="cta-button flex items-center justify-center">
                 < RocketIcon  /> Explore Our Programs
                </CtaButton>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center btn-neumorphic border-animated color-dark-pink"
                >
                  <i className="fa-regular fa-calendar color-dark-pink mr-3"></i>
                  Schedule a Visit
                </a>
              </div>

              {/* Stats */}
              <div className=" grid max-w-md grid-cols-3 gap-4 lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl font-bold color-dark-pink">50+</div>
                  <div className="text-sm color-p-blue">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold color-dark-purple">5+</div>
                  <div className="text-sm color-p-blue">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold color-dark-blue">100%</div>
                  <div className="text-sm color-p-blue">Love & Care</div>
                </div>
              </div>
            </div>


           

            {/* Image Side */}
            <div  data-aos="fade-right" className="relative animate-[float_6s_ease-in-out_infinite]">
              <div className="  relative rounded-3xl neumorphic-card ">
                <Image className="" src="/images/hero.svg" alt="Children happily learning at Ikigai Preschool"  width={1200} height={800} priority/>
                {/* Floating Cards with subtle neumorphism */}
                <div className="absolute -top-1 -left-1  md:-top-6 md:-left-8 animate-[float_6s_ease-in-out_1s_infinite] rounded-2xl neumorphic-card">
                  <div className="flex items-center space-x-1  md:space-x-2">
                    <div className="h-3 w-3 rounded-full bg-dark-pink"></div>
                    <span className="text-sm font-medium color-slate-dark ">
                      Safe Environment
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-9 -right-2 md:-bottom-6 md:-right-8 animate-[float_6s_ease-in-out_2s_infinite] rounded-2xl bg-[#e0e5ec] p-4 shadow-[7px_7px_15px_#bec3c9,-7px_-7px_15px_#ffffff]">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-dark-purple"></div>
                    <span className="text-sm font-medium color-slate-dark">
                      Joyful Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        </div>
        
      </section>
    </>
  );
};

export default App;


import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";



// Reusable Icon component for this section
const Icon = ({ path, className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={path}
    ></path>
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const LearningModel = () => {

 
  return (
    <section
      id="learning-model"
      className="relative overflow-hidden bg-white-50  section-padding "
    >
      {/* Glassmorphism overlay to create depth */}
      <div className=""></div>

      <div className=" relative section-container">
        {/* Section Header */}
        <div data-aos="fade-down" className="section-heading">
          <h2>
            <span >Our Learning Model</span>
          </h2>
          <p >
            A Cambridge–Montessori blend with a Bangladeshi heart, designed to
            make your chil not just school-ready, but life-ready.
          </p>
        </div>

        {/* Core Blend: Montessori & Cambridge Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Montessori Card */}
          <div data-aos="fade-right"  className="transform  neumorphic-card">
            <div className="mb-6 flex items-center">
              <div className="mr-5 flex h-16 w-16 items-center justify-center neumorphic-gradient-card">
                <FaRegHandshake size={32} className="color-dark-pink" />
                
              </div>
              <h4 className="heading-blue">
                Montessori Elements
              </h4>
            </div>
            <ul className="space-y-4 color-p-blue">
              <li className="flex items-start">
                <CheckIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 color-dark-pink" />
                <span>
                  Hands-on, tactile learning materials to engage the senses.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 color-dark-pink" />
                <span>Freedom within boundaries to foster independence.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 color-dark-pink" />
                <span>
                  Focus on practical life skills and self-care routines.
                </span>
              </li>
            </ul>
          </div>

          {/* Cambridge Card */}
          <div data-aos="fade-left"  className="transform neumorphic-card">
            <div className="mb-6 flex items-center">
              <div className="mr-5 flex h-16 w-16 items-center justify-center rounded-2xl neumorphic-gradient-indigo">
                <FaBookOpen size={32} className="color-dark-purple "/>
              </div>
              <h4 className="heading-blue">
                Cambridge Framework
              </h4>
            </div>
            <ul className="space-y-4 color-slate-dark">
              <li className="flex items-start">
                <CheckIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 color-dark-purple" />
                <span>Language-rich, concept-based learning in English.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 color-dark-purple" />
                <span>Focused development in early literacy and numeracy.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 color-dark-purple" />
                <span>
                  Guided instruction with clear, structured learning outcomes.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Localization Section */}
        <div data-aos="fade-up"  className="relative mt-18 neumorphic-gradient-card-green">
          <h3 className="flex items-center justify-center heading-blue">
            <span className="ml-3 mt-2 text-2xl md:text-3xl"><i className="fa-solid fa-flag mr-3"></i></span>
           Localization for Bangladesh
          </h3>
          <p className="mx-auto mt-3 max-w-3xl color-p-blue">
            Our international curriculum is enriched with local culture and values to create a familiar, effective learning environment.
          </p>
          <div className="mt-8 justify-center  grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-1 rounded-2xl overflow-hidden relative">
              <div
                className=" neumorphic-card overflow-hidden "
                style={{ boxShadow: "none" }}
              >
                <div className=" border-animation ">
                  <h5 className="text-lg font-bold color-cyan">
                    Adapted Phonics
                  </h5>
                  <p className="mt-1 color-p-blue">
                    Vocabulary and sounds tailored for local accent and usage.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-2xl overflow-hidden relative">
              <div
                className="neumorphic-card overflow-hiddenn"
                style={{ boxShadow: "none" }}
              >
                <div className="border-animation ">
                  <h5 className="text-lg font-bold color-dark-pink">
                    Cultural Integration
                  </h5>
                  <p className="mt-1 color-p-blue">
                    Stories, celebrations, and national values woven into
                    learning.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="p-1 rounded-2xl overflow-hidden relative">
                <div
                  className="neumorphic-card overflow-hiddenn"
                  style={{ boxShadow: "none" }}
                >
                  <div className="border-animation ">
                    <h5 className="text-lg font-bold color-blue-light">
                      Bilingual Support
                    </h5>
                    <p className="mt-1 color-p-blue">
                      Building comfort and fluency in both Bangla and English.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModel;

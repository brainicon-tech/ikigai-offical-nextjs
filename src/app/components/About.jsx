import React from "react";
import Image from "next/image";



// Keyframe animations for the background blobs
// const Keyframes = () => (
//   <style>
//     {`
//         @keyframes morph {
//           0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
//           50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
//           100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
//         }
//       `}
//   </style>
// );

const About = () => {
  return (
    <>
      
      <section  data-aos="fade-up"
        id="about"
        className="relative overflow-hidden section-padding"
      >
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 h-full w-full">
          <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[500px] animate-[morph_8s_ease-in-out_infinite] rounded-full bg-purple-300/30 opacity-50 blur-3xl"></div>
          <div className="absolute top-[-20%] right-[-15%] h-[500px] w-[600px] animate-[morph_8s_ease-in-out_2s_infinite] rounded-full bg-pink-300/30 opacity-50 blur-3xl"></div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 backdrop-blur-md"></div>

        <div className=" relative section-container">
          <div className="section-heading">
                <h2>
                  <span className="">Our Philosophy: Finding Joy in Growth</span>
                </h2>
                <p>At Ikigai, we believe every child is unique and full of potential. Our mission is to provide a foundation for lifelong learning and well-being.</p>
              </div>
          <div data-aos="fade-up" className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="relative rounded-3xl neumorphic-card">
               <Image src="/images/about us.svg" alt="Caring teachers with children" width={1200} height={800} priority />
              </div>
            </div>
            <div>
              <h3 className="heading-blue">
                Our Mission & Values
              </h3>
              <p className="mb-8 leading-relaxed color-p-blue">
                To cultivate a vibrant, inclusive community where children are
                empowered to explore, create, and develop a deep love for
                learning. We strive to nurture their unique talents and guide
                them towards discovering their 'ikigai' – their reason for joy
                and purpose.
              </p>
              

              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center neumorphic-inset">
                   <i className="fa-regular fa-heart  text-lg mt-1 color-dark-pink"></i> 
                  </div>
                  <span>
                    <strong>Care & Compassion:</strong> Providing a safe,
                    nurturing, and emotionally supportive environment.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center  neumorphic-inset">
                    <i className="fa-regular fa-lightbulb color-dark-blue text-lg mt-1"></i>
                  </div>
                  <span>
                    <strong>Curiosity & Exploration:</strong> Encouraging
                    discovery, critical thinking, and a love for questions.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center neumorphic-inset">
                    <i className="fa-regular fa-user text-lg mt-1 color-dark-purple"></i>
                  </div>
                  <span>
                    <strong>Collaboration & Community:</strong> Fostering
                    positive social interactions and a sense of belonging.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center neumorphic-inset">
                    <i className="fa-solid fa-leaf text-lg mt-1 color-dark-cyan"></i>
                  </div>
                  <span>
                    <strong>Holistic Development:</strong> Nurturing emotional,
                    social, cognitive, and physical growth.
                  </span>
                </li>
              </ul>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center btn-neumorphic color-dark-pink border-animated"
                >
                  Know More About Us{" "}
                  <i className="fa-solid fa-chevron-right color-dark-pink ml-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

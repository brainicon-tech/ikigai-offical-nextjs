"use client";
import React from "react";
import Image from "next/image";
import { Users, Feather, Paintbrush, Smile, ChevronRight } from "lucide-react";

// Data for the socialization program features
const socializationFeatures = [
  {
    title: "Group Activities",
    description:
      "Builds comfort in groups, teaching turn-taking and listening.",
    icon: Users,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Imaginative Play",
    description: "Encourages empathy and exploring real-life situations.",
    icon: Feather,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Creative Collaborations",
    description: "Fosters teamwork through group art, music, and movement.",
    icon: Paintbrush,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Emotion Coaching",
    description:
      "Helps children name and manage their emotions constructively.",
    icon: Smile,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
];

// Reusable Feature Item Component
const FeatureItem = ({ title, description, Icon, color, bgColor }) => {
  return (
    // Note: Added group class to allow hover effects on children
    <div className="group bg-white-50 flex items-start p-4 transition duration-300 transform hover:shadow-lg rounded-xl">
      {/* Icon Circle */}
      <div className={`p-3 rounded-full ${bgColor} flex-shrink-0 mr-4`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold color-h1-blue mb-1 leading-snug">
          {title}
        </h3>
        <p className=" para">{description}</p>
      </div>
    </div>
  );
};

// Main App Component
const SocializingProgram = () => {
  return (
    <div className=" section-padding">
      <div className="secondary-container">
        {/* Header Section */}
        <div className="secondary-heading">
          <h2 className="">Socialization Program</h2>
          <p className="">
            Creating daily opportunities for children to connect, collaborate,
            and grow—gently and joyfully.
          </p>
        </div>

        {/* Two-Column Content Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Features List */}
          <div className="space-y-4">
            {socializationFeatures.map((feature, index) => (
              <FeatureItem key={index} {...feature} Icon={feature.icon} />
            ))}
          </div>

          {/* Right Column: Image Card */}
          <div className="w-full relative">
            <div className="bg-white-50 p-4 rounded-3xl shadow-xl overflow-hidden   group">
              {/* Container for the image, setting aspect ratio and handling hover scale */}
              <div className="relative w-full h-auto aspect-[3/2] rounded-3xl overflow-hidden shadow-lg transition duration-500 group-hover:scale-[1.05]">
                <Image
                  src="/images/daycare.jpg"
                  alt="Children participating in a socialization program activity"
                  className="rounded-2xl object-cover"
                  width={600}
                  height={400}
                  unoptimized={true} 
                />
              </div>
            </div>
            {/* Decorative element for extra flair */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocializingProgram;

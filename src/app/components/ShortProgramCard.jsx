import React from "react";
import Image from "next/image";
import { Music, Smile, Compass, BookOpen, Feather, Zap, Hand, Heart } from "lucide-react"; // Added Hand and Heart for more options
import CtaButton from "./Button"; // Keep your CTA component

// Mocked paths based on your original file names
const stepToShineImg = "/images/step-to-shine.jpg"; 
const stepUpToSchoolImg = "/images/step-upto-school.jpg"; 

// ICON MAPPING
const IconMap = {
  Music,
  Smile,
  Compass,
  BookOpen,
  Feather,
  Zap,
  Hand,
  Heart,
};

// 1. DATA DEFINITION: JSON structure updated with content from uploaded images
const CARD_DATA = [
  {
    id: 1,
    ageRange: "FOR AGES 1.5 TO 3 YEARS",
    title: "🌿 Step to Shine",
    description:
      "This 3-month transition program is a gentle introduction to a structured social setting. We help toddlers adapt comfortably, build secure bonds, and explore the world with wonder and curiosity, ensuring their first steps away from home are happy ones.",
    image: {
      src: stepToShineImg,
      alt: "Toddler playing in a colorful, secure setting.",
      width: 720,
      height: 380,
    },
    features: [
      {
        iconKey: "Heart",
        title: "Emotional Comfort & Bonding",
        description: "Creating a safe, loving space for children to build trust with caregivers.",
        color: "bg-green-500",
      },
      {
        iconKey: "Zap",
        title: "Simple Routines",
        description: "Establishing gentle, predictable schedules for eating, playing, and resting.",
        color: "bg-orange-500",
      },
      {
        iconKey: "Compass",
        title: "Calm Sensory Play",
        description: "Engaging the senses through nature-based exploration and tactile activities.",
        color: "bg-yellow-500",
      },
      {
        iconKey: "Smile",
        title: "Early Social Cues",
        description: "Introducing sharing and interaction in a supportive group setting.",
        color: "bg-purple-500",
      },
    ],
  },
  {
    id: 2,
    ageRange: "FOR AGES 3 TO 5 YEARS",
    title: "🎒 Step up to School",
    description:
      "This short-term preparatory course is designed to build the foundational skills and emotional readiness needed for a successful transition into mainstream schools. We focus on both academic basics and essential life skills to ensure a confident start.",
    image: {
      src: stepUpToSchoolImg,
      alt: "Child practicing fine motor skills and school readiness.",
      width: 1000,
      height: 800,
    },
    features: [
      {
        iconKey: "BookOpen",
        title: "Pre-Literacy & Numeracy",
        description: "Introducing letters, sounds, and numbers in a fun, engaging way.",
        color: "bg-blue-500",
      },
      {
        iconKey: "Hand",
        title: "Classroom Etiquette",
        description: "Practicing active listening, communication, and following instructions.",
        color: "bg-red-400",
      },
      {
        iconKey: "Feather",
        title: "Fine Motor Development",
        description: "Strengthening hand-eye coordination with puzzles, crafts, and pencil grip practice.",
        color: "bg-pink-500",
      },
      {
        iconKey: "Zap",
        title: "Self-Help Skills",
        description: "Fostering independence in dressing, managing belongings, and eating.",
        color: "bg-orange-500",
      },
    ],
  }
];

// Feature Item Component
const FeatureItem = ({ iconKey, title, description, color }) => {
  const Icon = IconMap[iconKey] || Smile;

  return (
    <div className="flex items-start space-x-4 mt-4">
      <div className={`p-2 rounded-full flex-shrink-0 ${color}`}>
        <Icon size={15} className="text-color-white" />
      </div>
      <div>
        <h4 className="font-semibold color-blue-h1  ">{title}</h4>
        <p className="para">{description}</p>
      </div>
    </div>
  );
};

// GroupCard Component
const GroupCard = ({ group, reverse }) => {
  const { src, alt } = group.image;

  const contentOrder = reverse ? "order-2 lg:order-1" : "order-2 lg:order-1";
  const imageOrder = reverse ? "order-1 lg:order-2" : "order-1 lg:order-2";

  return (
    <div className="bg-white-50 p-2 md:p-6 rounded-2xl shadow-xl overflow-hidden mb-12 transition duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Content Column */}
        <div className={contentOrder}>
          <p className="color-dark-pink font-bold text-sm uppercase tracking-wider mb-2">
            {group.ageRange}
          </p>
          <h1 className="text-lg md:text-xl font-extrabold color-blue-h1 mb-4">
            {group.title}
          </h1>
          <p className="para mb-6">{group.description}</p>

          <div className="space-y-4">
            {group.features.map((feature, index) => (
              <FeatureItem
                key={index}
                iconKey={feature.iconKey}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div
          className={`${imageOrder} relative h-[380px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-[1.01]`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized={true}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

// Main Component
const ShortProgramCard = () => {
  return (
    <div className="section-padding">
      <div className="secondary-container">
        <header className="section-heading ">
          <h2 className="">
            <span>Our Short Programs</span>
          </h2>
          <p className="">
            Focused, purposeful courses designed to support your child through
            key developmental transitions with confidence and joy.
          </p>
        </header>

        <div className="w-full">
          {CARD_DATA.map((group, index) => (
            <GroupCard key={group.id} group={group} reverse={index % 2 !== 0} />
          ))}
        </div>

        <div className="text-center bg-white-50 p-8 rounded-2xl pb-12 mt-8 shadow-lg">
          <h3 className="color-blue-h1 font-extrabold mb-3 text-lg md:text-2xl">
            Ready for the Next Step?
          </h3>
          <p className="mb-7 para">
            Our short programs provide the perfect support for your child's key milestones. Contact us to learn more or to enroll.
          </p>
          <div>
            <a href="#" className="btn-neumorphic border-animated inline-flex items-center">Inquire About Programs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortProgramCard;

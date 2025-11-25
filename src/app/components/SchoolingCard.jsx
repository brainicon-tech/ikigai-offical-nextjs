import React from "react";
import Image from "next/image";
import { Music, Smile, Compass, BookOpen, Feather, Zap } from "lucide-react";
const preplayImg = "/images/preplay.jpg";
const playImg = "/images/play.jpg";
const nursingImg = "/images/nursery.jpg";

// 1. DATA DEFINITION: JSON structure for three cards
const CARD_DATA = [
  {
    id: 1,
    ageRange: "1.5 – 2.5 YEARS",
    title: "Pre-Play Group",
    description:
      "A gentle and nurturing start to structured learning. In Pre-Play, we focus on building trust, developing comfortable routines, and encouraging sensory exploration. It's all about feeling safe, loved, and curious in a warm, welcoming environment.",
    image: {
      src: preplayImg,
      alt: "A happy child lying on grass with bright, painted hands raised.",
      width: 720,
      height: 380,
    },
    features: [
      {
        iconKey: "Music",
        title: "Music & Movement",
        description: "Exploring rhythms and expressing through dance.",
        color: "bg-purple-500",
      },
      {
        iconKey: "Compass",
        title: "Sensory Exploration",
        description: "Engaging with different textures, sounds, and materials.",
        color: "bg-yellow-500",
      },
      {
        iconKey: "Smile",
        title: "Building Trust",
        description: "Forming secure bonds with caregivers and peers.",
        color: "bg-green-500",
      },
    ],
  },
  {
    id: 2,
    ageRange: "2.5 – 4 YEARS",
    title: "Toddler Explorer",
    description:
      "The Toddler Explorer program is designed to spark creativity and develop foundational skills through guided play, literacy, and numeracy introduction in a fun and interactive environment.",
    image: {
      src: playImg,
      alt: "A toddler reading a book with large, colorful blocks.",
      width: 1000,
      height: 800,
    },
    features: [
      {
        iconKey: "BookOpen",
        title: "Early Literacy",
        description: "Introduction to letter sounds and simple words.",
        color: "bg-blue-500",
      },
      {
        iconKey: "Feather",
        title: "Fine Motor Skills",
        description: "Activities to strengthen hand muscles for writing.",
        color: "bg-pink-500",
      },
      {
        iconKey: "Zap",
        title: "Cognitive Play",
        description: "Puzzles and sorting games for problem-solving.",
        color: "bg-orange-500",
      },
    ],
  },
  {
    id: 3,
    ageRange: "4 – 6 YEARS",
    title: "Kindergarten Prep",
    description:
      "Preparing children for formal schooling, this group focuses on advanced social-emotional learning, independent task completion, and mastering pre-math and pre-writing concepts.",
    image: {
      src: nursingImg,
      alt: "Children collaborating on a creative group project.",
    },
    features: [
      {
        iconKey: "Smile",
        title: "Social-Emotional",
        description: "Learning cooperation and conflict resolution.",
        color: "bg-green-600",
      },
      {
        iconKey: "BookOpen",
        title: "Advanced Numeracy",
        description: "Understanding basic addition and subtraction concepts.",
        color: "bg-blue-600",
      },
      {
        iconKey: "Compass",
        title: "Independent Work",
        description: "Developing focus and self-directed activity.",
        color: "bg-yellow-600",
      },
    ],
  },
];

// ICON MAPPING
const IconMap = {
  Music,
  Smile,
  Compass,
  BookOpen,
  Feather,
  Zap,
};

// Feature Item Component
const FeatureItem = ({ iconKey, title, description, color }) => {
  const Icon = IconMap[iconKey] || Smile;

  return (
    <div className="flex items-start space-x-4 mt-4">
      <div className={`p-3 rounded-full flex-shrink-0 ${color}`}>
        <Icon className="w-3 h-3 md:w-5 md:h-5 text-color-white" />
      </div>
      <div>
        <h4 className="font-semibold color-h1-blue text-lg">{title}</h4>
        <p className="para">{description}</p>
      </div>
    </div>
  );
};

// GroupCard Component
const GroupCard = ({ group, reverse }) => {
  const { src, width, height, alt } = group.image;

  const contentOrder = reverse ? "order-2 lg:order-1" : "order-2 lg:order-1";
  const imageOrder = reverse ? "order-1 lg:order-2" : "order-1 lg:order-2";

  return (
    <div className="bg-white-50 p-2 md:p-6 rounded-3xl shadow-xl overflow-hidden mb-12 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgb(0_0_0/0.08),_0_4px_10px_-4px_rgb(0_0_0/0.05)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Content Column */}
        <div className={contentOrder}>
          <p className="color-dark-pink font-bold text-sm uppercase tracking-wider mb-2">
            {group.ageRange}
          </p>
          <h1 className="text-lg md:text-xl font-extrabold color-h1-blue mb-4">
            {group.title}
          </h1>
          <p className=" para mb-8">{group.description}</p>

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
          className={
            imageOrder +
            " relative h-[380px] rounded-2xl overflow-hidden shadow-2xl transition duration-300 transform hover:scale-[1.01] "
          }
        >
          <Image
            src={src}
            alt={alt}
            width={720}
            height={380}
             unoptimized={true} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// Main Component
const SchoolingCard = () => {
  return (
    <div className="section-padding">
      <div className="secondary-container">
        <header className="section-heading">
          <h2 className="  ">
            <span>Our Play Group Programs</span>
          </h2>
          <p className="">
            Find the perfect developmental stage for your child.
          </p>
        </header>

        <div className="w-full">
          {CARD_DATA.map((group, index) => (
            <GroupCard key={group.id} group={group} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolingCard;

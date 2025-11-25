'use client';
import React from 'react';
import Image from 'next/image';
import { Music, Smile, Compass, BookOpen, Feather, Zap, Check } from 'lucide-react'; // Added Check icon

// --- DATA DEFINITION ---
const preplayImg = "/images/parenting-program03.jpg";
const playImg = "/images/curriculum.jpg";
const nursingImg = "/images/img_4215.jpg";

const CARD_DATA = [
  {
    id: 1,
    ageRange: "1.5 – 2.5 YEARS",
    title: "Pre-Play Group",
    description: "A gentle and nurturing start to structured learning. In Pre-Play, we focus on building trust, developing comfortable routines, and encouraging sensory exploration. It's all about feeling safe, loved, and curious in a warm, welcoming environment.",
    keyTakeaways: [
      "Building foundational trust and comfort.",
      "Engaging in sensory exploration activities.",
      "Establishing positive and gentle routines.",
    ],
    ikigaiQuote: "Every little step in learning builds a mountain of confidence.",
    image: { src: preplayImg, alt: "A happy child playing.", width: 720, height: 380 },
    features: [
      { iconKey: "Music", title: "Music & Movement", description: "Exploring rhythms and expressing through dance.", color: "bg-purple-500" },
      { iconKey: "Compass", title: "Sensory Play", description: "Engaging with different textures and sounds.", color: "bg-yellow-500" },
    ]
  },
  {
    id: 2,
    ageRange: "2.5 – 4 YEARS",
    title: "Toddler Explorer",
    description: "The Toddler Explorer program is designed to spark creativity and develop foundational skills through guided play, literacy, and numeracy introduction in a fun and interactive environment.",
    keyTakeaways: [
      "Sparking creativity through imaginative play.",
      "Introduction to early literacy and numeracy.",
      "Developing social interaction skills.",
    ],
    ikigaiQuote: "Curiosity is the compass that guides our young explorers.",
    image: { src: playImg, alt: "A toddler exploring.", width: 1000, height: 800 },
    features: [
      { iconKey: "BookOpen", title: "Early Literacy", description: "Introduction to letter sounds and simple words.", color: "bg-blue-500" },
      { iconKey: "Feather", title: "Fine Motor Skills", description: "Activities to strengthen hand muscles for writing.", color: "bg-pink-500" },
    ]
  },
  {
    id: 3,
    ageRange: "4 – 6 YEARS",
    title: "Kindergarten Prep",
    description: "Preparing children for formal schooling, this group focuses on advanced social-emotional learning, independent task completion, and mastering pre-math and pre-writing concepts.",
    keyTakeaways: [
      "Mastering pre-math and pre-writing concepts.",
      "Enhancing social-emotional learning.",
      "Fostering independent task completion.",
    ],
    ikigaiQuote: "Preparation today creates confident leaders tomorrow.",
    image: { src: nursingImg, alt: "Children collaborating.", width: 1000, height: 800 },
  }
];

// ICON MAPPING
const IconMap = {
  Music,
  Smile,
  Compass,
  BookOpen,
  Feather,
  Zap,
  Check,
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

// Card Component (Hero Style with Checkmarks and Quote)
const ProgramCardHeroStyle = ({ group, reverse }) => {
  const contentOrder = reverse ? 'lg:order-2' : 'lg:order-1';
  const blockOrder = reverse ? 'lg:order-1' : 'lg:order-2';

  return (
    <div className="bg-white-50 p-2 md:p-6 rounded-3xl shadow-xl overflow-hidden mb-12 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgb(0_0_0/0.08),_0_4px_10px_-4px_rgb(0_0_0/0.05)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className={`order-2 ${contentOrder}`}>
          <h2 className="text-lg md:text-2xl font-extrabold color-blue-h1 mb-4">{group.title}</h2>
          <p className="para mb-6">{group.description}</p>

          {/* Checkmark List */}
          <div className="space-y-4 mb-6">
            {group.keyTakeaways.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="ml-3 para">{item}</p>
              </div>
            ))}
          </div>

          {/* Ikigai Quote */}
          <div className="flex items-start p-4 bg-yellow-50 rounded-3xl border-l-4 border-pink-500">
            <Feather className="w-5 h-5 color-dark-pink mt-0.5 flex-shrink-0" />
            <p className="ml-3 text-sm color-gray-dark italic">{group.ikigaiQuote}</p>
          </div>

          {/* Features */}
          
        </div>

        {/* RIGHT COLUMN: IMAGE */}
        <div className={`order-1 ${blockOrder} relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center`}>
          <Image
            src={group.image.src}
            alt={group.image.alt}
            fill
            unoptimized={true}
            className="object-cover w-full h-full rounded-3xl"
            priority
          />
        </div>

      </div>
    </div>
  );
};

// Main Page Component
const SchoolingProgramsPageHeroStyle = () => {
  return (
    <div className="section-padding">
      <div className="secondary-container">
        <header className="section-heading">
          <h2 className="">
            <span>Parenting Program</span>
          </h2>
          <p className="">
            Guided by Ikigai, we support families in raising happy, balanced, and self-aware children in today’s complex world.
          </p>
        </header>

        <div className="w-full">
          {CARD_DATA.map((group, index) => (
            <ProgramCardHeroStyle
              key={group.id}
              group={group}
              reverse={index % 2 !== 0} // alternate sides
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolingProgramsPageHeroStyle;

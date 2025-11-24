import React from 'react';
import { Heart, Shield, Users, MessageSquare, Briefcase, BookOpen, Smile } from 'lucide-react';

// --- DATA DEFINITION 1: Top Two Awareness Cards ---
const AWARENESS_CARDS = [
  {
    title: "Healthy Tech Boundaries",
    description: "We support families in managing screen time with age-appropriate guidelines, digital safety practices, and encouraging creativity over passive consumption.",
    icon: 'Shield',
    quote: "Ikigai promotes mindful use of tools—technology should support, not replace, real experiences.",
    quoteColor: "border-pink-500",
  },
  {
    title: "Abuse & Control Awareness",
    description: "We address difficult topics with sensitivity, helping parents understand boundaries, break harmful patterns, and build respectful communication at home.",
    icon: 'Heart',
    quote: "Ikigai values inner peace—no child thrives under fear or force.",
    quoteColor: "border-yellow-500",
  },
];

// --- DATA DEFINITION 2: Ongoing Growth & Activities ---
const ACTIVITY_FEATURES = [
  {
    title: "Parenting Circles",
    description: "Monthly workshops to share and learn in a supportive community.",
    Icon: Users,
  },
  {
    title: "Expert Q&A Sessions",
    description: "With child psychologists and educators to answer your questions.",
    Icon: MessageSquare,
  },
  {
    title: "Shared Activities",
    description: "Join us for storytime, gardening, and mindfulness with your children.",
    Icon: Smile,
  },
];

// ICON MAPPING
const IconMap = {
  Heart,
  Shield,
};

// --- Sub-Components ---

// Component for the Top Awareness Cards
const AwarenessCard = ({ card }) => {
  const Icon = IconMap[card.icon];

  const QuoteIcon = card.icon === 'Shield' ? (
    <span className="text-2xl mr-2">🤓</span>
  ) : (
    <span className="text-2xl mr-2">💛</span>
  );

  return (
    <div className="bg-white-50 p-4 md:p-8 rounded-2xl shadow-lg   transition duration-300 hover:shadow-2xl">
      <h3 className="text-xl font-bold color-blue-h1">{card.title}</h3>
      <p className="para my-4">{card.description}</p>

      {/* Ikigai Quote Section */}
      <div className={`flex items-start p-3 bg-gray-50 rounded-lg border-l-4 ${card.quoteColor}`}>
        {QuoteIcon}
        <p className="ml-1 text-sm para italic">
          {card.quote}
        </p>
      </div>
    </div>
  );
};

// Component for the Bottom Activity Features
const ActivityFeatureItem = ({ feature }) => {
  // Icon wrapper with corrected background
  const IconWrapper = ({ children }) => (
    <div className="p-2 bg-indigo-50 rounded-full inline-block mb-4">
      {children}
    </div>
  );

  let IconElement;
  if (feature.title === "Parenting Circles") {
    IconElement = <IconWrapper><Users className="w-8 h-8 text-indigo-700" /></IconWrapper>;
  } else if (feature.title === "Expert Q&A Sessions") {
    IconElement = <IconWrapper><span role="img" aria-label="Expert" className="text-3xl">👨‍🏫</span></IconWrapper>;
  } else if (feature.title === "Shared Activities") {
    IconElement = <IconWrapper><span role="img" aria-label="Gardening" className="text-3xl">🥕</span></IconWrapper>;
  }

  return (
    <div className="text-center ">
      {IconElement}
      <h4 className="font-semibold text-lg color-blue-h1 mb-2">{feature.title}</h4>
      <p className="para hidden md:block">{feature.description}</p>
    </div>
  );
};

// --- Main Component ---
export default function ParentingActivities() {
  return (
    <div className="pb-[100px]">
      <div className="secondary-container">

        {/* --- 1. TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-24">
          {AWARENESS_CARDS.map((card, index) => (
            <AwarenessCard key={index} card={card} />
          ))}
        </div>

        {/* --- 2. BOTTOM SECTION --- */}
        <div className="bg-white-50 p-4 md:p-12 rounded-3xl shadow-2xl">
          <header className="text-center mb-12">
            <h2 className="text-lg md:text-3xl font-extrabold color-gray-dark mb-4">
              Ongoing Growth & Regular Activities
            </h2>
            <p className="para ">
              Parenting is a journey, not a destination. We keep families engaged and supported with a variety of regular activities.
            </p>
          </header>

          {/* Activity Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {ACTIVITY_FEATURES.map((feature, index) => (
              <ActivityFeatureItem key={index} feature={feature} />
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="flex justify-center mt-12">
            <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-pink-500 max-w-md">
              <span className="text-2xl mr-2">🕊️</span>
              <p className="ml-1 text-sm text-gray-700 italic">
                Parenting is not a destination—it's a purpose lived daily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

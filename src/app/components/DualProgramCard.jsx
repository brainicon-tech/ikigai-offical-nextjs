import React from 'react';
import { Smile, Zap, CheckCircle, Hand, Globe, Leaf, Droplet, Sun } from 'lucide-react';

// Data for the two program cards
const programs = [
  {
    title: "Personal Awareness Program",
    tagline: "Nurturing a child's sense of identity, emotions, and self-worth—the foundation for lifelong confidence.",
    features: [
      { name: "Emotional Recognition", icon: Smile, color: "text-amber-500", emoji: "😀" },
      { name: "Self-Discovery Activities", icon: Zap, color: "text-purple-500", emoji: "✨" },
      { name: "Choice-Making", icon: CheckCircle, color: "text-green-500", emoji: "✅" },
      { name: "Mindfulness Tools", icon: Hand, color: "text-blue-500", emoji: "🧘" },
    ],
    bgColor: "bg-white",
    hoverShadow: "shadow-amber-200/50",
  },
  {
    title: "Planets & Environmental Care",
    tagline: "Planting the seeds of eco-consciousness by introducing children to the wonders of our Earth.",
    features: [
      { name: "Learning About Planets", icon: Globe, color: "text-indigo-500", emoji: "🪐" },
      { name: "Love for Nature", icon: Leaf, color: "text-lime-500", emoji: "🌿" },
      { name: "Clean & Green Habits", icon: Droplet, color: "text-cyan-500", emoji: "🧼" },
      { name: "Celebrating Earth Day", icon: Sun, color: "text-orange-500", emoji: "🌎" },
    ],
    hoverShadow: "shadow-lime-200/50",
  },
];

// Reusable Feature Item Component - Icon movement added on card hover
const FeatureItem = ({ name, icon: Icon, color }) => (
  <div className="  flex items-center space-x-3 p-2 transition-all duration-300"> 
    {/* Icon now moves up slightly on group hover, but doesn't affect surrounding text layout */}
    <Icon className={`w-6 h-6 ${color} flex-shrink-0 opacity-70 transition-all duration-300 
                      `} /> 
    <span className="color-gray-dark text-sm md:text-lg font-medium  transition-colors duration-300">
      {name}
    </span>
  </div>
);

// Reusable Card Component with Depth Hover Effect
const ProgramCard = ({ title, tagline, features, bgColor, hoverShadow }) => {
  return (
    <div className={`bg-white-50 group p-8 md:p-10 rounded-3xl  shadow-lg  h-full 
                    transition-all duration-500 transform 
                     hover:shadow-2xl hover:${hoverShadow} cursor-pointer`}>
      
      {/* Title & Tagline */}
      <h2 className="text-lg md:text-2xl font-extrabold color-h1-blue mb-2 ">
        {title}
      </h2>
      <p className="para mb-6 border-b border-gray-100 pb-4">
        {tagline}
      </p>

      {/* Features List */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

// Main App Component
const DualProgramCard = () => {
  return (
    <div className="pb-[100px]">
      <div className="secondary-container">
        
        {/* Main Grid Container for the two cards */}
        <section className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {programs.map((program, index) => (
            <ProgramCard  key={index} {...program} />
          ))}
          
        </section>

      </div>
    </div>
  );
};

export default DualProgramCard;
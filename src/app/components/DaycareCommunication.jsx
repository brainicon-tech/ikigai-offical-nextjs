import React from 'react';
import { Volume2, BookOpen, Ear, Zap } from 'lucide-react';

// Data for the communication focus areas
const communicationAreas = [
  {
    title: "Clear Speech",
    description: "Developing phonetic awareness and articulation for easy, precise verbal expression.",
    icon: Volume2,
    accent: "text-red-500 bg-red-100",
    hoverShadow: "shadow-red-500/50",
  },
  {
    title: "Expanded Vocabulary",
    description: "Building a rich lexicon and understanding complex sentence structures through reading and music.",
    icon: BookOpen,
    accent: "text-cyan-500 bg-cyan-100",
    hoverShadow: "shadow-cyan-500/50",
  },
  {
    title: "Active Listening",
    description: "Cultivating focus and retention skills necessary for effective comprehension and respectful dialogue.",
    icon: Ear,
    accent: "text-amber-500 bg-amber-100",
    hoverShadow: "shadow-amber-500/50",
  },
  {
    title: "Verbal Confidence",
    description: "Empowering children to share ideas, ask questions, and speak publicly with assurance and joy.",
    icon: Zap, 
    accent: "text-violet-500 bg-violet-100",
    hoverShadow: "shadow-violet-500/50",
  },
];

const CommunicationCard = ({ title, description, Icon, accent, hoverShadow }) => {
  return (
   
    <div className={`group py-4 px-1 md:p-8 rounded-3xl bg-white-50 backdrop-blur-sm 
                    transform transition-all duration-300 ease-out cursor-pointer 
                    hover:scale-[1.05]  hover:shadow-2xl 
                    hover:shadow-lg ${hoverShadow}`}>
      
      <div className="flex flex-col items-center text-center">
        
        
        <div className={`p-4 rounded-full ${accent} mb-4 transform transition-transform duration-300 group-hover:rotate-6`}>
          <Icon className={`w-8 h-8`} />
        </div>

        
        <div className="transform transition-transform duration-300 ease-out group-hover:-translate-y-1"> 
          {/* Title */}
          <h3 className="color-h1-blue font-bold">
            {title}
          </h3>

          {/* Description (Hidden on mobile, revealed on hover/larger screens for clean look) */}
          <p className="para mt-2 text-sm hidden md:block">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const DaycareCommunication = () => {
  return (
    <div className="section-padding">
      
      
      <div className="">
        
        <div className="secondary-container">

          {/* Header Section */}
          <header className="text-center mb-16">
            <h1 className="heading-blue">
              Speech & Language Communication
            </h1>
            <p className="para">
              Our program builds vocabulary, sentence structure, and clarity through interactive storytelling, music, and peer engagement.
            </p>
          </header>

          {/* Cards Grid Section */}
          <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
            {communicationAreas.map((area, index) => (
              <CommunicationCard 
                key={index} 
                {...area} 
                Icon={area.icon} 
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default DaycareCommunication;
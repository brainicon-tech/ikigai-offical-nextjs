import React from 'react';
import { Leaf, GraduationCap, Users, Shield, Heart } from 'lucide-react';

// Data for the focus area cards
const focusAreas = [
  {
    title: "Holistic Development",
    description: "Fostering emotional, physical, cognitive, and social growth through activities that spark curiosity.",
    icon: Leaf,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    title: "Play-Based Learning",
    description: "Encouraging children to explore what they love through structured play, storytelling, art, and music.",
    icon: GraduationCap,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Parent Partnership",
    description: "Working closely with parents to support each child's journey with open communication.",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Safe & Stimulating",
    description: "Ensuring your child feels secure, loved, and inspired with top-notch hygiene, nutrition, and safety.",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Values & Life Skills",
    description: "Gently introducing kindness, respect, sharing, and independence for lifelong purpose and empathy.",
    icon: Heart,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
];

// Reusable Card Component
const FocusCard = ({ title, description, Icon, color, bgColor }) => {
  return (
    // Apply hover effect here: subtle scale up, increased shadow, and smooth transition
    <div className="bg-white-50 p-4 md:p-6 rounded-2xl shadow-lg transition duration-300
                     hover:scale-[1.03] hover:shadow-2xl 
                    flex flex-col items-center text-center h-full">

      {/* Icon Circle */}
      <div className={`p-4 rounded-full ${bgColor} mb-4`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>

      {/* Title */}
      <h3 className={`text-lg md:text-xl font-semibold mb-2 ${color}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base">
        {description}
      </p>
    </div>
  );
};

// Main App Component
const FocusArea = () => {
  return (
    <div className="section-padding">
      <div className="secondary-container">

        <div className='section-heading'>
          <h2>
            <span>Welcome to Our Day Care</span>
          </h2>
          <p>A place where care, learning, and purposeful play come together to nurture the whole child.</p>
        </div>

        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="heading-blue">
            Our Focus Areas – At a Glance
          </h1>
          <p className="para">
            We nurture the whole child through a balanced blend of care, learning, and purposeful play.
          </p>
        </header>

        {/* Cards Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Render the first 3 cards */}
          {focusAreas.slice(0, 3).map((area, index) => (
            <FocusCard key={index} {...area} Icon={area.icon} />
          ))}
        </section>

        {/* Separator for the bottom row layout */}
        <div className="flex justify-center mt-6 lg:mt-10">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl w-full">
            {/* Render the remaining 2 cards, centered under the first row */}
            {focusAreas.slice(3).map((area, index) => (
              <FocusCard key={index + 3} {...area} Icon={area.icon} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default FocusArea;
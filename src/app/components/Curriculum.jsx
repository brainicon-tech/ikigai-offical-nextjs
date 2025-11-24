import React from 'react';

// Data for the three preschool stages
const stages = [
  {
    name: "Pre-Play",
    age: "Age 1.5 to 2.5 years",
    description: "A gentle start to structured learning. We focus on building trust, developing routines, and encouraging sensory exploration through music, movement, and playful interaction.",
    accentColor: "from-pink-500 to-fuchsia-500",
    headerColor: "text-fuchsia-600",
    scheduleHours: "1.5 hrs",
    schedule: [
      { group: "Pre-Play", morning: "9:00 - 10:30", day: "" }
    ]
  },
  {
    name: "Play Group",
    age: "Age 2.5 to 4 years",
    description: "Learning through entertainment is our primary approach to help children explore new boundaries and spend joyful time away from home. We prepare them for the learning process with thought-provoking tools and expert assistance.",
    accentColor: "from-fuchsia-500 to-purple-600",
    headerColor: "text-purple-600",
    scheduleHours: "2 hrs",
    schedule: [
      { group: "Play Group", morning: "8:30 - 10:30", day: "11:00 - 01:00" }
    ]
  },
  {
    name: "Nursery",
    age: "Age 4 to 6 years",
    description: "In Nursery, we build upon the foundation of play, introducing more structured activities that foster pre-academic skills, critical thinking, and social-emotional growth, ensuring a confident transition to formal schooling.",
    accentColor: "from-purple-600 to-indigo-700",
    headerColor: "text-indigo-700",
    scheduleHours: "2.5 hrs",
    schedule: [
      { group: "Nursery", morning: "8:00 - 10:30", day: "11:00 - 1:30" }
    ]
  }
];

// Component for the schedule table rows
const ScheduleRow = ({ group, morning, day }) => (
  // Ensured text color is dark on the white background
  <tr className="text-gray-700 border-t border-gray-100">
    <td className="py-2 pr-4 font-semibold">{group}</td>
    <td className="py-2 pr-4">{morning}</td>
    <td className="py-2">{day}</td>
  </tr>
);

// Component for a single stage card
const StageCard = ({ stage }) => {
  // Utility for the gradient border effect - Added 'relative' and 'overflow-hidden' for better stacking context
  

  return (
    <div className="activity-card bg-white-50 border-animated">
      {/* Inner card: Added 'relative' and 'z-10' to ensure it sits on top of the gradient wrapper */}
      <div className="bg-white rounded-[calc(1.5rem-1px)] p-6 md:p-8 flex flex-col h-full z-10 relative">
        {/* Stage Header - Using a solid color defined in the stage data */}
        <div className={`text-lg font-extrabold pb-2 ${stage.headerColor}`}>
          {stage.name}
        </div>
        <p className="text-sm font-semibold text-gray-500 mb-4">{stage.age}</p>

        {/* Description - Text is dark */}
        <p className="color-gray-dark text-sm   flex-grow mb-2">
          {stage.description}
        </p>

        {/* Timing Schedule */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <h3 className="text-sm font-bold color-h1-blue mb-2">
            Timing Schedule ({stage.scheduleHours})
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-sm text-gray-400 uppercase font-medium">
                  <th className="pb-2 pr-2 w-1/4 text-[12px]">Group</th>
                  <th className="pb-2 pr-3">Morning ({stage.name === "Pre-Play" ? "Sprout" : stage.name === "Play Group" ? "Sunshine" : "Joy"})</th>
                  <th className="pb-2">Day ({stage.name === "Play Group" ? "Sunlight" : stage.name === "Nursery" ? "Happy" : ""})</th>
                </tr>
              </thead>
              <tbody className='text-[12px]'>
                {stage.schedule.map((item, index) => (
                  <ScheduleRow key={index} {...item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function Curriculum() {
  return (
    <div className="min-h-screen font-inter antialiased section-padding">
      <div className="section-container">

        {/* Global Header */}
        <div className="section-heading">
          <h2 className="">
            <span className="">
              Curriculum & Learning Approach
            </span>
          </h2>
          <p className="">
            A holistic framework designed to nurture your child's cognitive, social-emotional, physical, and language development.
          </p>
        </div>

        {/* Heart of Our Method Section (The text from the first image) */}
        <section className="text-center mb-16 max-w-5xl mx-auto">
          <h2 className="heading-blue">
            The Heart of Our Method: Joyful, Purposeful Play
          </h2>
          <p className="color-gray-dark text-sm md:text-md  mt-[-15px] ">
            At Ikigai, we believe learning is not a race; it's a joyful exploration. Our curriculum is built on the philosophy that children learn best when they are engaged, curious, and playing with purpose. Through play, they develop critical thinking, social skills, and a genuine love for discovery that lasts a lifetime.
          </p>
        </section>

        {/* Preschool Stages Section */}
        <section className="text-center ">
          <h2 className="heading-blue">
            Our Preschool Stages
          </h2>
          <p className="color-gray-dark text-sm md:text-md  mt-[-15px] mb-16">
            Three distinct stages to guide your child's early learning journey.
          </p>

          {/* Cards Container - Responsive Grid */}
          <div className="grid grid-cols-1 gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
            {stages.map((stage, index) => (
              <StageCard key={index} stage={stage} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
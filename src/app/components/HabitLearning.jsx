import React from 'react';
import { Clock, ShowerHead, MessageSquare, Users, CheckCircle, Sparkles } from 'lucide-react';

// Data for the habit learning program
const habits = [
  {
    title: "Daily Routine Discipline",
    description: "Following schedules for eating, napping, and playing; learning responsibility.",
    icon: Clock,
    accent: "from-blue-400 to-indigo-600",
  },
  {
    title: "Personal Hygiene",
    description: "Washing hands, brushing teeth (with play), and gentle toilet training.",
    icon: ShowerHead,
    accent: "from-green-400 to-teal-600",
  },
  {
    title: "Respectful Communication",
    description: "Using kind words, listening patiently, and expressing emotions calmly.",
    icon: MessageSquare,
    accent: "from-pink-400 to-red-600",
  },
  {
    title: "Social Manners & Sharing",
    description: "Learning to take turns, helping peers, and showing empathy.",
    icon: Users,
    accent: "from-yellow-400 to-orange-600",
  },
  {
    title: "Self-Help Skills",
    description: "Eating independently, dressing with support, and carrying their own items.",
    icon: CheckCircle,
    accent: "from-purple-400 to-fuchsia-600",
  },
  {
    title: "Value-Based Lessons",
    description: "Weekly themes like kindness, honesty, patience, and gratitude.",
    icon: Sparkles,
    accent: "from-cyan-400 to-sky-600",
  },
];

// Reusable Card Component with 3D Hover Effect
const HabitCard = ({ title, description, Icon, accent }) => {
  return (
    // Card Container: Use group for hover effects on children
    <div className="group relative perspective-1000">
      
      {/* Background Glow Effect (Optional but enhances modernity) */}
      <div className={`absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-75 transition duration-500
                      blur-lg bg-gradient-to-r ${accent}`}></div>

      {/* Main Card Content */}
      <div className={`relative p-8 h-full bg-white-50 rounded-3xl shadow-2xl
                      transform transition-all duration-500 ease-out 
                      group-hover:-translate-y-2 group-hover:shadow-3xl
                      group-hover:rotate-1`} // Subtle 3D tilt/lift on hover
      >
        <div className="flex flex-col h-full">
          {/* Icon & Title Container */}
          <div className="mb-4 flex items-center">
            {/* Icon Circle - Gradient Border on Hover */}
            <div className={`p-3 rounded-xl mr-4 border-2 border-gray-700
                            group-hover:border-transparent bg-gray-800 
                            transition duration-300 relative overflow-hidden`}>
              
              {/* Gradient border effect (visual flair) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition duration-500`}></div>
              
              <Icon className={`w-6 h-6 text-gray-300 relative z-10`} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold color-h1-blue leading-snug">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="para">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const HabitLearning = () => {
  return (
    <div className="section-padding">
      <div className="secondary-container">

        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold heading-blue mb-4 ">
            Habit Learning Program
          </h1>
          <p className="para">
            We believe good habits build great lives. Our program nurtures essential routines for a balanced life.
          </p>
        </header>

        {/* Cards Grid Section */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          {habits.map((habit, index) => (
            <HabitCard key={index} {...habit} Icon={habit.icon} />
          ))}
        </section>

      </div>
    </div>
  );
};

export default HabitLearning;
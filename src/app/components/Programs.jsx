"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Programs = () => {
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const tabMenu = document.querySelector(".program-nav"); // select the tab menu
  if (element && tabMenu) {
    const headerHeight = 150; // sticky header height
    const tabMenuHeight = tabMenu.offsetHeight; // dynamic height (works for mobile & desktop)
    const extraOffset = 5; // extra space below header + tab menu

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - tabMenuHeight + extraOffset;

    // Only scroll if we're not already close to the target position
    if (Math.abs(window.pageYOffset - offsetPosition) > 5) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};

  return (
    <section id="programs" className="section-padding bg-pastel-gradient">
      <div className="">
        {/* Page Header */}
        <div data-aos="fade-up" className="section-heading ">
          <h2>
            <span>Our Programs</span>
          </h2>
          <p>
            Nurturing each child's unique journey through care, play, and
            purposeful learning.
          </p>
        </div>
        <div
          id="programs-section-start"
          className="program-nav sticky bg-pastel-gradient flex flex-wrap justify-center transition duration-300 md:justify-center py-2 items-center gap-4 md:gap-8 mb-16 lg:mb-20 z-20 border-b border-white/20 backdrop-blur-sm"
          style={{ top: "var(--header-height)" }}
        >
          <a
           
            onClick={() => scrollToSection("daycare")}
             href="#daycare"
            data-tab="daycare"
            className="text-sm color-gray-light lg:text-lg font-semibold pb-2 border-b-2 border-transparent  transition active flex-shrink-0"
          >
            Daycare
          </a>

          

          <a
          onClick={() => scrollToSection("schooling")}
            href="#schooling"
            data-tab="schooling"
            className="text-sm color-gray-light lg:text-lg font-semibold pb-2 border-b-2 border-transparent  transition flex-shrink-0"
          >
            Schooling
          </a>
          <a
          onClick={() => scrollToSection("parenting")}
            href="#parenting"
            data-tab="parenting"
            className="text-sm color-gray-light lg:text-lg font-semibold pb-2 border-b-2 border-transparent  transition flex-shrink-0"
          >
            Parenting Programs
          </a>
          <a
          onClick={() => scrollToSection("short-programs")}
            href="#short-programs"
            data-tab="short-programs"
            className="text-sm color-gray-light lg:text-lg font-semibold pb-2 border-b-2 border-transparent  transition flex-shrink-0"
          >
            Short Programs
          </a>
        </div>

        <div className="section-container">
          <div className="program-content-wrapper">
            {/* Daycare Section */}
           
             <section id="daycare" className="program-content active">
              <div data-aos="fade-up" className="section-heading">
                <h2>
                  <span>Daycare Program</span>
                </h2>
                <p>
                  A nurturing second home where your child can grow, learn, and
                  discover their purpose through joyful play.
                </p>
              </div>

              {/* Ikigai Approach Section */}
              <div
                data-aos="fade-up"
                className="box-shadow-pink rounded-2xl p-8 md:p-12 lg:p-16 mb-20 lg:mb-28"
              >
                <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
                  <div>
                    <h3 className="heading-blue">Our Ikigai Approach</h3>
                    <p className="color-gray-light">
                      Inspired by the Japanese philosophy of "a reason for
                      being," our daycare program is built around four core
                      pillars. We create a balanced, nurturing environment that
                      helps children find joy and purpose in their daily
                      activities.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-2  lg:place-items-stretch gap-6">
                    <div className=" flex">
                      <div className="circle-box bg-pink-300-50 color-dark-pink opacity-60">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-ikigai-pink"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="color-blue-h1 font-bold">
                          What They Love
                        </h4>
                        <p className="color-p-blue text-sm">
                          Encouraging passion.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className=" circle-box bg-purple-300-50-act opacity-60 color-dark-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-ikigai-blue"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="color-blue-h1 font-bold">
                          What They're Good At
                        </h4>
                        <p className="color-p-blue text-sm">Building skills.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="circle-box opacity-60 bg-blue-300-50 color-dark-blue">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-ikigai-blue"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="color-blue-h1 font-bold">
                          What the World Needs
                        </h4>
                        <p className="color-p-blue text-sm">
                          Teaching contribution.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="circle-box opacity-60 bg-yellow-300-50 color-dark-yellow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-ikigai-pink"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </div>
                      <div>
                        <h4 className="color-blue-h1 font-bold">
                          What Brings Reward
                        </h4>
                        <p className="color-p-blue text-sm">
                          Fostering fulfillment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* A Day at Ikigai */}
              <div
                data-aos="fade-up"
                className="max-w-4xl mx-auto mb-18 lg:mb-28"
              >
                <div className="text-center mb-12">
                  <h3 className="heading-blue">A Day at Ikigai</h3>
                  <p className="color-gray-light">
                    A glimpse into our daily rhythm of joyful learning, play,
                    and care.
                  </p>
                </div>
                <div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 className="color-blue-h1 font-bold">
                      Morning Arrival & Free Play
                    </h4>
                    <p className="color-gray-light text-sm">
                      A warm welcome followed by child-led exploration and
                      social interaction.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 className="color-blue-h1 font-bold">
                      Circle Time & Themed Activities
                    </h4>
                    <p className="color-gray-light text-sm">
                      Engaging group sessions with stories, songs, and
                      purpose-driven learning.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 className="color-blue-h1 font-bold">
                      Outdoor Play & Gross Motor Skills
                    </h4>
                    <p className="color-gray-light text-sm">
                      Fresh air and fun activities to develop large muscle
                      groups and coordination.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 className="color-blue-h1 font-bold">
                      Lunch & Quiet Time
                    </h4>
                    <p className="color-gray-light text-sm">
                      A nutritious meal followed by naps or quiet, mindful
                      activities to recharge.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 className="color-blue-h1 font-bold">
                      Creative Expression & Fine Motor Skills
                    </h4>
                    <p className="color-gray-light text-sm">
                      Arts, crafts, and sensory play to enhance creativity and
                      hand-eye coordination.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 className="color-blue-h1 font-bold">
                      Storytelling & Departure
                    </h4>
                    <p className="color-gray-light text-sm">
                      Winding down with a calming story before a happy farewell.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Focus Areas */}
              <div
                data-aos="fade-up"
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-14">
                  <h3 className="heading-blue">Core Focus Areas</h3>
                  <p className="color-gray-light">
                    We nurture the whole child through a balanced blend of care,
                    learning, and purposeful play.
                  </p>
                </div>
                <div className="accordion-container">
                  <div className="accordion-item active">
                    <div className="accordion-header border-slate-bottom">
                      <h4 className="color-blue-h1 font-bold text-lg ">
                        Habit Learning Program
                      </h4>
                      <div className="accordion-icon text-xl">+</div>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-content-inner pt-8 text-ikigai-gray leading-relaxed">
                        <p className="color-gray-light text-sm pt-3">
                          We believe good habits build great lives. Our program
                          is thoughtfully designed to nurture essential routines
                          like daily discipline, personal hygiene, respectful
                          communication, and social manners through guided play
                          and positive reinforcement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header border-slate-bottom">
                      <h4 className="color-blue-h1 font-bold">
                        Socialization Program
                      </h4>
                      <div className="accordion-icon text-xl">+</div>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-content-inner pt-6 text-ikigai-gray leading-relaxed">
                        <p className="color-gray-light text-sm pt-3">
                          Strong social skills are the cornerstone of a
                          confident and compassionate individual. We create
                          daily opportunities for children to connect,
                          collaborate, and grow through group activities,
                          role-play, and creative collaborations, helping them
                          build meaningful connections.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header border-slate-bottom">
                      <h4 className="color-blue-h1 font-bold">
                        Speech & Language Communication
                      </h4>
                      <div className="accordion-icon text-xl">+</div>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-content-inner pt-6 text-ikigai-gray leading-relaxed">
                        <p className="color-gray-light text-sm pt-3">
                          Effective communication is foundational to a child's
                          confidence. Our program supports the early development
                          of speaking, listening, and expressive skills through
                          interactive storytelling, music, and peer engagement,
                          helping every child find their voice.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header border-slate-bottom">
                      <h4 className="color-blue-h1 font-bold">
                        Personal Awareness
                      </h4>
                      <div className="accordion-icon text-xl">+</div>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-content-inner pt-6 text-ikigai-gray leading-relaxed">
                        <p className="color-gray-light text-sm pt-3">
                          Understanding oneself is as important as learning
                          about the world. We nurture a child's sense of
                          identity, emotions, and self-worth through
                          self-discovery activities, choice-making, and
                          mindfulness, building a foundation for lifelong
                          confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header border-slate-bottom">
                      <h4 className="color-blue-h1 font-bold">
                        Planets & Environmental Care
                      </h4>
                      <div className="accordion-icon text-xl">+</div>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-content-inner pt-6 text-ikigai-gray leading-relaxed">
                        <p className="color-gray-light text-sm pt-3">
                          We plant the seeds of eco-consciousness from the very
                          beginning. This program introduces children to the
                          wonders of our Earth and the importance of caring for
                          it through fun lessons, nature walks, and mini
                          eco-projects, instilling habits that last a lifetime.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-10">
                <a href="#" className="btn-neumorphic border-animated inline-flex color-dark-pink items-center">Know More About Daycare
                  <i className="fas fa-arrow-right ml-2"></i></a>
      
              </div>
            </section>
           

            {/* Schooling Section */}
            <section id="schooling" className="program-content">
              <div data-aos="fade-up" className="section-heading">
                <h2>
                  <span>Schooling Programs</span>
                </h2>
                <p>
                  Building a strong foundation for lifelong learning through
                  structured play and joyful academics.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div
                  data-aos="fade-up"
                  className="neumorphic-gradient-card-green p-8 text-center"
                >
                  <div className="circle-box-2 opacity-60 bg-pink-300-50 color-dark-pink mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-ikigai-pink"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10c0-2.2-1.8-4-4-4s-4 1.8-4 4-1.8 4-4 4-4-1.8-4-4a10 10 0 0 0 10-10z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-blue">Pre-Play</h3>
                  <p className="color-gray-light">(1.5 – 2.5 years)</p>
                  <p className="color-gray-dark mt-4">
                    A gentle start to structured learning, focusing on trust,
                    routines, and sensory exploration through music, movement,
                    and playful interaction.
                  </p>
                </div>
                <div className="neumorphic-gradient-card-green  text-center">
                  <div className="circle-box-2 opacity-60 bg-yellow-300-50 color-dark-yellow mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-ikigai-blue"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-blue">Play Group</h3>
                  <p className="color-gray-light">(2.5 – 3.5 years)</p>
                  <p className="color-gray-dark mt-4">
                    Children explore with more independence, learning basic
                    concepts like colors, shapes, and early social skills
                    through guided play and creativity.
                  </p>
                </div>
                <div className="p8 neumorphic-gradient-card-green  text-center">
                  <div className="circle-box-2 opacity-60 bg-blue-300-50 color-dark-blue mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-ikigai-pink"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-blue">Nursery</h3>
                  <p className="color-gray-light">(3.5 – 4.5 years)</p>
                  <p className="color-gray-dark mt-4">
                    A step into early academics with a balance of fun and
                    structure, focusing on pre-reading, pre-writing, numeracy,
                    and communication skills.
                  </p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <a href="#" className="btn-neumorphic border-animated inline-flex items-center color-dark-pink">Know More About Schooling
                  <i className="fas fa-arrow-right ml-2"></i></a>
              </div>
            </section>

            {/* Parenting Section */}
            <section id="parenting" className="program-content">
              <div data-aos="fade-up" className="section-heading">
                <h2>
                  <span>For Parents</span>
                </h2>
                <p>
                  Supporting you on your parenting journey with expert guidance
                  and a caring community.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="glass p-8 md:p-12 rounded-2xl shadow-xl">
                  <h3 className="heading-blue">Mindful Parenting Workshops</h3>
                  <p className="color-gray-dark my-4">
                    Our workshops provide a supportive space to learn practical
                    strategies for positive discipline, effective communication,
                    and fostering your child's emotional well-being. Connect
                    with fellow parents and our expert educators to navigate the
                    beautiful journey of parenthood with confidence and joy.
                  </p>
                  <a href="#" className="color-dark-purple text-sm font-bold">
                    View Workshop Schedule &rarr;
                  </a>
                </div>
                <div className="glass p-8 md:p-12 rounded-2xl shadow-xl">
                  <h3 className="heading-blue">
                    Parent-Child Discovery Sessions
                  </h3>
                  <p className="color-gray-dark my-4">
                    Strengthen your bond and create lasting memories in our
                    guided discovery sessions. These activities are designed to
                    help you and your child explore, create, and learn together,
                    uncovering your shared passions and deepening your
                    connection through the Ikigai philosophy.
                  </p>
                  <a href="#" className="color-dark-purple text-sm font-bold">
                    Learn More &rarr;
                  </a>
                </div>
              </div>
              <div className="mt-10 text-center">
                <a href="#" className="btn-neumorphic border-animated inline-flex items-center color-dark-pink">Know More About Parenting Program
                  <i className="fas fa-arrow-right ml-2"></i></a>
              </div>
            </section>

            {/* Short Programs Section */}
            <section id="short-programs" className="program-content">
              <div data-aos="fade-up" className="section-heading">
                <h2>
                  <span>Short Programs</span>
                </h2>
                <p className="text-lg text-ikigai-gray">
                  Focused, flexible, and fun-filled programs designed to give
                  your child a developmental boost.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
                <div className="lg:order-2">
                  <Image
                    src="/images/toddler-playing.webp"
                    alt="A toddler playing and developing"
                    width={760}
                    height={380}
                    className="rounded-2xl shadow-2xl object-cover w-full"
                  />
                </div>
                <div className="lg:order-1">
                  <p className="color-gray-light">For Ages 1.5 - 2.5 Years</p>
                  <h3 className="heading-blue">Step Up to Shine</h3>
                  <p className="color-gray-light py-4">
                    This program is a gentle introduction to a world of wonder
                    for our youngest learners. We focus on nurturing your
                    toddler's budding curiosity and building a strong foundation
                    for their developmental journey. Through sensory play,
                    music, movement, and tender guidance, we help them explore
                    their environment, build trust, and take their first
                    confident steps toward shining brightly.
                  </p>
                  <a
                    href="#"
                    className="inline-block color-dark-purple font-bold"
                  >
                    Inquire About Enrollment
                  </a>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
                <div>
                  <Image
                    src="/images/preparing.avif"
                    alt="Children preparing for school happily"
                    width={760}
                    height={450}
                    className="rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div>
                  <p className="color-gray-light">To Prepare for Schooling</p>
                  <h3 className="heading-blue">Step Up to School</h3>
                  <p className="color-gray-light py-4">
                    Prepare your child for a smooth and successful transition to
                    formal schooling with our dedicated prep program. We focus
                    on building the essential academic and social skills needed
                    for the classroom, such as letter and number recognition,
                    listening, following instructions, and collaborating with
                    peers. We make learning fun, helping your child step up to
                    school with confidence and excitement.
                  </p>
                  <a
                    href="#"
                    className="inline-block color-dark-purple font-bold"
                  >
                    Learn More & Get Started
                  </a>
                </div>
              </div>
              <div className="mt-10 text-center ">
                <a href="#" className="btn-neumorphic border-animated inline-flex items-center color-dark-pink">Know More About Short Programs
                  <i className="fas fa-arrow-right ml-2"></i></a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Heart, Share2 } from "lucide-react";

// Data for the reels based on user input
const REELS_DATA = [
  {
    id: 1,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1091262553049834%2F&show_text=false&width=267&t=0",
    title: "Trending Moment",
    views: "1.2M",
  },
  {
    id: 2,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FIkigai121%2Fvideos%2F1023344259929492%2F&show_text=false&width=267&t=0",
    title: "Ikigai Vibes",
    views: "850K",
  },
  {
    id: 3,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1409446550430096%2F&show_text=false&width=267&t=0",
    title: "Daily Inspiration",
    views: "2.4M",
  },
  {
    id: 5,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F557372924020412%2F&show_text=false&width=267&t=0",
    title: "Quick Tips",
    views: "120K",
  },
  {
    id: 6,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1624544388257841%2F&show_text=false&width=267&t=0",
    title: "Weekend Mood",
    views: "3.1M",
  },
];

const ReelCard = ({ src, title, views }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative group flex-shrink-0 snap-center">
      {/* Card Container */}
      <div className="w-[280px] h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 relative transition-transform duration-300 hover:-translate-y-1">
        {/* Skeleton Loader */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse flex flex-col items-center justify-center z-10">
            <Play className="w-12 h-12 text-gray-700 opacity-50" />
            <p className="mt-4 text-gray-500 text-sm font-medium">
              Loading Reel...
            </p>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src={src}
          width="267"
          height="476"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          title={title}
        ></iframe>

        {/* Overlay Gradient (Optional - adds visual depth at bottom) */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        {/* Fake UI Elements for Aesthetic (Optional) */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white pointer-events-none">
          <div>
            <p className="font-semibold text-sm drop-shadow-md">{title}</p>
            <p className="text-xs text-gray-300 drop-shadow-md">
              {views} views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReelsSection = () => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Approximate card width + gap
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 0);
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 10); // -10 for floating point buffer
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <section className="">
      <div className="section-container">

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Left Button */}
          {showLeftBtn && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-xl border border-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500 hidden md:flex"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {REELS_DATA.map((reel) => (
              <ReelCard key={reel.id} {...reel} />
            ))}
          </div>

          {/* Right Button */}
          {showRightBtn && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-xl border border-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500 hidden md:flex"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* CSS for hiding scrollbar across browsers */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

// Main App Component to simulate the webpage
const Reel = () => {
  return (
    <div className="section-padding">
      

      {/* Hero Section Placeholder */}
      <div className="">
        <div  data-aos="fade-up" className="section-heading">
          <h2 className="">
            <span> Engage with Video Content</span>
          </h2>
          <p className="">
            Seamlessly integrate social media highlights directly into your
            website.
          </p>
        </div>
      </div>

      {/* The Requested Reels Component */}
      <ReelsSection />
      <div className="text-center mt-10">
        <a href="#" className="btn-neumorphic border-animated inline-flex items-center color-dark-pink">View More Reels</a>
      </div>
    </div>
  );
};

export default Reel;

import Image from "next/image";

const articles = [
  {
    id: 1,
    category: "MODERN PARENTING",
    title: "Navigating the Digital Playground: A Mindful Approach",
    author: "by Ikigai Educators",
    date: "July 10, 2025",
    description:
      "In a world full of screens, how do we ensure healthy digital habits? This article offers practical tips for setting boundaries and using technology to support creativity.",
    imageUrl: "/images/article02.jpg", // Ensure this image exists in your public folder
    altText: "Child reacting to a smartphone, representing digital engagement",
  },
  {
    id: 2,
    category: "OUR CURRICULUM",
    title: "Why a Blended Curriculum? The Magic of Montessori & Cambridge",
    author: "by Ikigai Educators",
    date: "June 28, 2025",
    description:
      "Go deeper into our unique learning model. Understand how combining child-led exploration with structured outcomes prepares your child for a life of curiosity and confidence.",
    imageUrl: "/images/article03.jpg", // Ensure this image exists in your public folder
    altText: "Bright and organized classroom environment",
  },
  {
    id: 3,
    category: "PARENTING TIPS", // New category
    title: "Building Resilience in Young Children: Everyday Strategies",
    author: "by Ikigai Educators",
    date: "June 15, 2025",
    description:
      "Discover practical ways to foster resilience and emotional strength in your child, preparing them for life's challenges with a positive mindset.",
    imageUrl: "/images/article04.jpg", // Ensure this image exists in your public folder
    altText: "Two young children huddled together, looking thoughtful",
  },
  {
    id: 4,
    category: "OUTDOOR LEARNING", // New category
    title: "The Benefits of Outdoor Play: Beyond the Classroom Walls",
    author: "by Ikigai Educators",
    date: "May 20, 2025",
    description:
      "Explore how connecting with nature through outdoor play enhances physical development, problem-solving skills, and a child's overall well-being.",
    imageUrl: "/images/article05.jpg", // Ensure this image exists in your public folder
    altText: "Children playing with cardboard boxes outdoors",
  },
];

export default function LatestArticles() {
  return (
    <section className="section-padding">
      <div className="secondary-container">
        <div className="secondary-heading">
          <h2>
            <span>Latest Articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white-50 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={article.imageUrl}
                  alt={article.altText}
                  layout="fill" // keeps your fill behavior
                  objectFit="cover"
                  unoptimized={true} // <--- ADD THIS
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold color-purple-600 uppercase tracking-wide mb-2">
                  {article.category}
                </p>
                <h3 className="text-lg md:text-xl font-bold color-gray-dark leading-tight mb-3">
                  {article.title}
                </h3>
                <p className="text-sm para mb-4">
                  {article.author} | {article.date}
                </p>
                <p className="para mb-6">{article.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center color-link-blue font-medium transition-colors duration-200"
                >
                  Read More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

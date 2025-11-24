import Image from 'next/image';

export default function FeaturedArticle() {
  return (
    <section className="section-padding">
      <div className="secondary-container">
        <div className='section-heading'>
          <h2>
            <span>Insights & Articles</span>
          </h2>
          <p>Guidance and inspiration for the beautiful journey of parenting, grounded in the Ikigai philosophy.</p>
        </div>
        <h2 className="text-md font-medium color-gray-dark mb-3">Featured Article</h2>
        <div className="bg-white-50 rounded-lg shadow-lg overflow-hidden md:flex transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgb(0_0_0/0.08),_0_4px_10px_-4px_rgb(0_0_0/0.05)] ">
          
          {/* 1. TEXT BLOCK 
            - Use 'order-2' on mobile/default (to place it after the image) 
            - Use 'md:order-1' on medium screens and up (to place it first/on the left) 
          */}
          <div className="p-6 flex flex-col justify-center order-2 md:order-1"> 
            <p className="text-sm font-semibold bg-dark-pink text-color-white rounded-2xl px-2 py-1 text-center max-w-[180px] uppercase tracking-wide">CHILD DEVELOPMENT</p>
            <h3 className="color-h1-blue font-bold text-lg mt-2">
              Finding Your Child's 'Ikigai': The Power of Purposeful Play
            </h3>
            <p className="para mt-4">
              Discover how play is more than just fun. It's how children find their purpose, develop skills, and
              understand the world. Learn how to create an environment that nurtures their inner 'Ikigai'.
            </p>
            <div className="mt-6">
              <a href="#" className="text-indigo-600 hover:text-indigo-900 font-medium flex items-center">
                Read Full Article
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:flex-shrink-0 order-1 md:order-2">
  <div className="relative w-full h-64 md:w-96 md:h-110">
    <Image
      src="/images/article01.jpg"
      alt="Child playing with colorful blocks"
      fill
      className="rounded-t-lg md:rounded-r-lg md:rounded-t-none md:rounded-l-none"
      style={{ objectFit: "cover" }}
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
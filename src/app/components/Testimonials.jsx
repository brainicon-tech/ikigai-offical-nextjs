import SwipeSlide from './SwipeSlide';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white-50 section-padding">
      <div className="section-container">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="section-heading">
          <h2>
            <span className="">
              Happy Families, Thriving Children
            </span>
          </h2>
          <p>
            Hear what parents have to say about their experience with 
            Ikigai Daycare & Preschool.
          </p>
        </div>

        {/* Slider */}
        <div className=' mx-auto'> 
          <SwipeSlide />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

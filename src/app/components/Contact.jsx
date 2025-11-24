import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = (e) => {
  e.preventDefault(); // prevent page reload

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );

  e.target.reset(); // reset form after submission
};
  return (
    <section id="contact" className="section-padding bg-contact-light-purple">
      <div className="section-container">
        <div  data-aos="fade-up" className="section-heading">
          <h2>
            <span>Connect With Us</span>
          </h2>
          <p>
            We'd love to hear from you! Whether you have questions, want to
            start the enrollment process, or just want to say hello, our team is
            ready to assist you.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          <div className="lg:w-3/5 xl:w-1/2 w-full animate-on-scroll">
            <div className="glass p-8 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out h-full flex flex-col">
              <h3 className="heading-blue">
                Send Us a Message
              </h3>
              <form
  id="contactForm"
  onSubmit={sendEmail}
  noValidate
  className="space-y-6 flex-grow flex flex-col"
>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 color-blue-h1">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold  mb-1.5"
                    >
                      Full Name <span className="color-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full custom-input"
                      aria-required="true"
                      aria-describedby="nameError"
                    />
                    <p
                      className="color-danger text-xs mt-1.5 hidden"
                      id="nameError"
                    ></p>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-1.5"
                    >
                      Email Address <span className="color-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full custom-input"
                      aria-required="true"
                      aria-describedby="emailError"
                    />
                    <p
                      className="color-danger text-xs mt-1.5 hidden"
                      id="emailError"
                    ></p>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold color-blue-h1  mb-1.5"
                  >
                    Phone Number
                    <span className=" font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full px-4 py-3 custom-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold color-blue-h1 mb-1.5"
                  >
                    Subject <span className="color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="block w-full custom-input color-blue-h1"
                    aria-required="true"
                    aria-describedby="subjectError"
                  />
                  <p
                    className="color-danger text-xs mt-1.5 hidden"
                    id="subjectError"
                  ></p>
                </div>
                <div className="flex-grow flex flex-col">
                  <label 
                    htmlFor="message"
                    className="block text-sm font-semibold mb-1.5 color-blue-h1"
                 > 
                    Your Message <span className="color-danger">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    className="block w-full h-full flex-grow custom-input resize-none overflow-hidden"
                  ></textarea>
                  <p
                    className="color-danger text-xs mt-1.5 hidden"
                    id="messageError"
                  ></p>
                </div>
                <div className="pt-3 mt-auto">
                  <button
                    type="submit"
                    id="submitButton"
                    aria-label="Send message"
                    className="w-full custom-input cta-button text-color-white"
                  >
                    <span id="buttonText">Send Message</span>
                    <i id="sendIcon" className="fas fa-paper-plane ml-2.5"></i>
                  </button>
                </div>
                <p
                  id="formSubmissionStatus"
                  className="mt-5 text-center text-sm"
                  aria-live="polite"
                ></p>
              </form>
            </div>
          </div>
          <div className="lg:w-3/5 xl:w-1/2 w-full space-y-8 animate-on-scroll">
            <div className="glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5">
              <h3 className="heading-blue">
                Opening Hours
                <span className="text-base font-medium color-pink-300-50">
                  (All Branches)
                </span>
              </h3>
              <div className="space-y-4 color-h1-blue">
                <div className="flex items-center group">
                  <div className="color-dark-pink bg-pink-300-50 rounded-full p-2.5 mr-4">
                    <i className="fas fa-calendar-alt fa-fw text-lg"></i>
                  </div>
                  <span className="">
                    <strong className="font-semibold">
                      Sunday - Thursday:
                    </strong>
                    8:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="color-dark-yellow bg-yellow-300-50 rounded-full p-2.5 mr-4 ">
                    <i className="fas fa-calendar-day fa-fw text-lg"></i>
                  </div>
                  <span className="">
                    <strong className="font-semibold">Saturday:</strong> 09:00
                    AM - 2:00 PM (Condition Apply)
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="color-dark-blue bg-blue-300-50 rounded-full p-2.5 mr-4 ">
                    <i className="fas fa-calendar-times fa-fw text-lg"></i>
                  </div>
                  <span className="">
                    <strong className="font-semibold">Friday:</strong>
                    Closed
                  </span>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5">
              <h3 className="heading-blue">
                Mohammadpur Branch
              </h3>
              <p className="text-sm font-semibold color-dark-pink mb-6">
                (Head Office)
              </p>
              <address className="space-y-4  not-italic color-blue-h1">
                <div className="flex items-start group">
                  <div className="color-dark-pink bg-pink-300-50 rounded-full p-2.5 mr-4 mt-0.5 group-hover:bg-blue-200 transition-colors duration-300 shrink-0">
                    <i className="fas fa-map-marker-alt fa-fw text-lg"></i>
                  </div>
                  <span className="">
                    House-2/10, Humayun Road, Mohammadpur, Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="color-dark-yellow bg-yellow-300-50 rounded-full p-2.5 mr-4 group-hover:bg-blue-200 transition-colors duration-300 shrink-0">
                    <i className="fas fa-phone fa-fw text-lg"></i>
                  </div>
                  <a
                    href="tel:01772523070"
                    className=" hover:underline transition-colors duration-300"
                  >
                    01772-523070
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className="color-dark-blue bg-blue-300-50 rounded-full p-2.5 mr-4  shrink-0">
                    <i className="fas fa-envelope fa-fw text-lg"></i>
                  </div>
                  <a
                    href="mailto:ikigaibd767@gmail.com"
                    className=" hover:underline transition-colors duration-300 break-all"
                  >
                    ikigaibd767@gmail.com
                  </a>
                </div>
              </address>
              <div className="mt-6 h-56 sm:h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.37443966646!2d90.3671023!3d23.7696771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1004b657f41%3A0x8e82dd652fbbf026!2sIkigai%20day%20care%20%26%20Pre-school!5e0!3m2!1sen!2sbd!4v1748704199346!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl shadow-xl color-blue-h1 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5">
              <h3 className="heading-blue">
                Gulshan Branch
              </h3>
              <address className="space-y-4 not-italic">
                <div className="flex items-start group">
                  <div className="color-dark-pink bg-pink-300-50 rounded-full p-2.5 mr-4 mt-0.5  shrink-0">
                    <i className="fas fa-map-marker-alt fa-fw text-lg"></i>
                  </div>
                  <span className="">
                    House 20, Road: 104, Gulshan-2, Dhaka-1212
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="color-dark-yellow bg-yellow-300-50 rounded-full p-2.5 mr-4  shrink-0">
                    <i className="fas fa-phone fa-fw text-lg"></i>
                  </div>
                  <a
                    href="tel:01328079337"
                    className=" hover:underline transition-colors duration-300"
                  >
                    01328079337
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className=" color-dark-blue bg-blue-300-50 rounded-full p-2.5 mr-4 shrink-0">
                    <i className="fas fa-envelope fa-fw text-lg"></i>
                  </div>
                  <a
                    href="mailto:ikigaigulshan@gmail.com"
                    className=" hover:underline transition-colors duration-300 break-all"
                  >
                    ikigaigulshan@gmail.com
                  </a>
                </div>
              </address>
              <div className="mt-6 h-56 sm:h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.790710532525!2d90.41881707402813!3d23.790465987239575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a330f6b207%3A0xa33016e55fde835d!2sHouse%2020%20Rd%20104%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1748704367102!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


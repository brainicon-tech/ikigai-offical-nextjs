'use client';
import { useState } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send the 'email' 
      // to your backend service (e.g., Mailchimp, SendGrid, etc.) here.
      console.log('Subscribed with:', email); 
      setSubmitted(true);
      setEmail(''); // Clear the input field
    }
  };

  return (
    <section className="pb-[100px]">
      <div className="secondary-container">
        <div className="bg-white-50 p-8 sm:p-12 rounded-2xl shadow-2xl  text-center  transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgb(0_0_0/0.08),_0_4px_10px_-4px_rgb(0_0_0/0.05)] ">
          
          <h2 className="text-xl md:text-3xl font-extrabold color-blue-h1 mb-4">
            Stay Connected 📬
          </h2>
          
          <p className="text-sm md:text-lg color-gray-dark mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the **latest articles**, program updates, and **parenting insights** delivered right to your inbox.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-80 px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition duration-150 text-lg color-gray-dark placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-dark-pink text-color-white font-bold text-lg rounded-xl shadow-lg hover:bg-pink-700 transition duration-150 transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg max-w-md mx-auto">
              <p className="text-xl font-semibold text-purple-800">
                🎉 Success! Check your inbox soon.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
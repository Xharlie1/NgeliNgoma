import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8003dcf5-69a7-4865-b463-3cb768606304");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-5 md:px-[12%] py-10 scroll-mt-20 max-w-7xl mx-auto' // Adjusted padding for responsiveness, added max-width and centering
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-4 text-lg font-Ovo text-gray-600' // Adjusted margin-bottom, added text color
      >
        Let's connect
      </motion.h4>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10 p-6 bg-white shadow-xl rounded-lg' // Added card-like styling
      >
        <div>
          <h3 className='text-2xl font-semibold mb-4 text-purple-700'>Get in Touch</h3> {/* Increased font size, added color */}
          <p className='mb-6 text-gray-700 font-Ovo leading-relaxed'> {/* Adjusted margin-bottom, added line-height */}
            Have any questions or opportunities you’d like to share? I’d love to hear from you! Please feel free to reach out using the form or connect through the details below.
          </p>
          <div className='space-y-3 text-base text-gray-700 font-Ovo'> {/* Adjusted spacing, font size */}
            <p className='flex items-center gap-2'><Image src={assets.email} alt='Email icon' width={20} height={20} /> Email: <a href="mailto:mwansabwalya31@gmail.com" className="hover:underline">mwansabwalya31@gmail.com</a></p> {/* Added mail icon, link */}
            <p className='flex items-center gap-2'><Image src={assets.phone} alt='Phone icon' width={20} height={20} /> Phone: <a href="tel:+260974444736" className="hover:underline">+260 974 444 736</a></p> {/* Added phone icon, link */}
            <p className='flex items-center gap-2'><Image src={assets.location} alt='Location icon' width={20} height={20} /> Location: Lusaka, Zambia</p> {/* Added location icon */}
          </div>
          {/* Social media links removed as per your request */}
        </div>

        <form className='space-y-6 text-black' onSubmit={onSubmit}>
          <div>
            <label htmlFor='name' className='block text-base font-medium text-gray-800 mb-1'>Name</label> {/* Increased font size, added color, mb */}
            <input
              type='text'
              id='name'
              required
              name='name'
              className='w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200' // Added focus styles, transition
              placeholder='Your Name'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-base font-medium text-gray-800 mb-1'>Email</label> {/* Increased font size, added color, mb */}
            <input
              type='email'
              id='email'
              name='email'
              required
              className='w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200' // Added focus styles, transition
              placeholder='you@example.com'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-base font-medium text-gray-800 mb-1'>Message</label> {/* Increased font size, added color, mb */}
            <textarea
              id='message'
              name='message'
              required
              className='w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 resize-y' // Added focus styles, transition, resize
              rows='4'
              placeholder='Your message...'
            ></textarea>
          </div>

          <button
            type='submit'
            className='inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg' // Enhanced button styling
          >
            Send Message
            
          </button>
        <p className='mt-4'>{result}</p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
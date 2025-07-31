import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets'; // Ensure consistent import

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-white py-10 px-5 md:px-[12%]'> {/* Darker background, adjusted padding */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto'> {/* Centered content, increased gap */}
        {/* About Section */}
        <div>
          <h3 className='text-2xl font-bold mb-4 text-purple-400'>Ngeli Ngoma</h3> {/* Larger, bolder heading, accent color */}
          <p className='text-sm text-gray-300 font-Ovo leading-relaxed'> {/* Lighter text, better line height */}
            Ngeli hope to inspire both kids and adults to show kindness and help build a better future where no child is forgotten.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className='text-xl font-semibold mb-4 text-white'>Quick Links</h3> {/* Consistent heading style */}
          <ul className='space-y-3 text-sm text-gray-300 font-Ovo'> {/* Increased spacing */}
            <li><a href="#top" className="hover:text-purple-400 transition-colors duration-200">Home</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition-colors duration-200">About</a></li>
            <li><a href="#services" className="hover:text-purple-400 transition-colors duration-200">Events</a></li> {/* Changed to Events for consistency */}
            <li><a href="#work" className="hover:text-purple-400 transition-colors duration-200">Advocacy</a></li> {/* Changed to Advocacy for consistency */}
            <li><a href="#contact" className="hover:text-purple-400 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Follow Me Section */}
        <div>
          <h3 className='text-xl font-semibold mb-4 text-white'>Follow Me</h3> {/* Consistent heading style */}
          <div className='flex flex-col gap-4'>
            {/* Instagram Link */}
            <a
              href='https://www.instagram.com/esther_zulu_3/?fbclid=IwY2xjawK5xFxleHRuA2FlbQIxMABicmlkETBLS2VENmp4a1pyWm1xaEFyAR6oXv6nU81bbTnkvK2kNk7ngQ2zCyTszhRe_u1KOF9O9H8DCT3JkcvBHBDHAQ_aem_DgxSj6mLU7T2Vr6wffEV7w#'
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
              className='flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 group' // Increased gap, hover effect
            >
              <Image src={assets.instgram} alt='Instagram' width={24} height={24} className='transition-transform duration-200 group-hover:scale-110' /> {/* Added width/height, hover scale */}
              Instagram
            </a>
            {/* TikTok Link */}
            <a
              href='https://www.tiktok.com/@estherzulu371?fbclid=IwY2xjawK5xANleHRuA2FlbQIxMABicmlkETBLS2VENmp4a1pyWm1xaEFyAR5gyxXGx48RmybNrjUNm9LSk2PDGKyUH6_-d9-esyWa0TVLrhWTSMuJuJ1J4A_aem_shlRmj_mGOLwZVdhpUQzvA'
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 group'
            >
              <Image src={assets.tiktok} alt='TikTok' width={24} height={24} className='transition-transform duration-200 group-hover:scale-110' /> {/* Added width/height, hover scale */}
              TikTok
            </a>
            {/* Facebook Link */}
            <a
              href='https://www.facebook.com/estherzulu0110?_rdc=1&_rdr#'
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 group'
            >
              <Image src={assets.facebook} alt='Facebook' width={24} height={24} className='transition-transform duration-200 group-hover:scale-110' /> {/* Added width/height, hover scale */}
              Facebook
            </a>
            <p className='flex items-center gap-2'><Image src={assets.email} alt='Email icon' width={20} height={20} />Developer: <a href="mailto:charleszulu0110@gmail.com" className="hover:underline">charleszulu0110@gmail.com</a></p></div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className='text-center text-sm text-gray-400 mt-10 pt-4 border-t border-gray-700 font-Ovo'> {/* Lighter border, lighter text */}
        &copy; {new Date().getFullYear()} Ngeli Ngoma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
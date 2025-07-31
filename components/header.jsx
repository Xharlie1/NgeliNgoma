import React from 'react'; // Removed useState and useEffect
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion'; // AnimatePresence is no longer needed here, but kept for general framer-motion use

const Header = () => {
  return (
    // Outer container for the header, setting it to full viewport height
    <section className="relative  mb-0 h-screen  w-full flex  flex-col  justify-center overflow-hidden ">
      {/* Desktop background image */}
          <Image
            src={assets.BG22}
            alt="Desktop Background"
            fill
            className="hidden md:block object-cover opacity-100 z-0"
            quality={100}
            priority
          />

          {/* Mobile background image */}
          <Image
            src={assets.BG27}
            alt="Mobile Background"
            fill
            className="block  md:hidden object-cover opacity-100 z-0 "
            quality={100}
            priority
          />
      

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content wrapper - Relative position and higher z-index to appear above the background and overlay */}
      <div className='relative z-20 w-11/12 max-w-4xl text-center mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8'>
        {/* Profile Image (commented out in your original code, keeping it for reference) */}
        {/*<motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image src={assets.ms2_image} alt='Esther Zulu profile' className='relative h-50 overflow-hidden rounded-full w-50' width={150} height={150} />
        </motion.div>*/}

        <motion.h3
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className='flex items-end justify-center gap-3 text-xl md:text-3xl font-Ovo text-white drop-shadow-lg leading-tight'
        >
          Hi, I'm Ngeli Ngoma
          <Image src={assets.hand_icon} alt='Waving hand' className='w-7' width={28} height={28} />
        </motion.h3>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-3xl md:text-6xl font-bold text-white drop-shadow-xl tracking-tight'
        >
          Model & Brand Ambassador
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='max-w-2xl mx-auto font-Ovo text-lg text-white leading-relaxed drop-shadow-md'
        >
          The 1st runner-up for Little Miss Africa 2024 in toto category,
           <br/>
          Winner of Little Miss Tiny Top Model 2025.<br/>
          Won Medal As The Rising Star In Junior Category.<br/>
          Brand Ambassador Of Trudy Beauty World
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-8'>
          <motion.a
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            href="#contact"
            className='px-10 py-3 border border-transparent rounded-full bg-purple-600 text-white flex items-center gap-2 hover:bg-purple-700 hover:border-white transition-all duration-300 shadow-lg'
          >
            Message Me
            </motion.a>


        </div>
      </div>
    </section>
  );
};

export default Header;
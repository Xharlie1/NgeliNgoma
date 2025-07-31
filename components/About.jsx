'use client'
import { assets } from '@/assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="relative w-full px-5 md:px-[12%] py-10 scroll-mt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="mt-15">
        <Image
          src={assets.BG3}
          alt="Desktop Background"
          fill
          className="hidden md:block object-cover opacity-50 z-0"
          quality={100}
          priority
        />
        <Image
          src={assets.BG1}
          alt="Mobile Background"
          fill
          className="block md:hidden object-cover opacity-50 z-0"
          quality={100}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-white opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-4 text-lg font-jetbrainsmono text-gray-900"
        >
          About me
        </motion.h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10 max-w-6xl mx-auto">
          {/* Auto Slideshow */}
          <div className="relative w-full h-100 mx-auto overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={assets.BG27}
                  alt='profile'

                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className='text-xl md:text-2xl font-semibold mb-3 text-purple-700'>I'm Ngeli Ngoma</h3>

            <p className='mb-5 text-gray-900 font-Ovo leading-relaxed'>
              Ngeli began her modeling journey at the young age of 4 in 2021, making her debut at the prestigious Kids Fashion Runway Show.
              Her talent and presence were quickly recognized, leading her to return for her second runway appearance at the same event in 2022.
              In 2023, she was invited to walk at the <strong>Save Kids with Cancer</strong> runway fashion show — a powerful event that supports young cancer warriors.
              In 2024, Ngeli proudly represented in the <strong>Little Miss Africa Zambia</strong> competition, earning the title of <em>1st Runner-Up</em> in the <strong>Toto category</strong>.
            </p>

            <p className='mb-5 text-gray-900 font-Ovo leading-relaxed'>
              Her achievements continued in 2025, where she received the <strong>Rising Star Junior Model</strong> medal, followed by her winning title:
              <strong> Little Miss Tiny Top Model 2025</strong>.
              Beyond the runway, Ngeli is a passionate advocate for street children, believing that every child deserves a safe place to call home.
              Her heart for others makes her a shining light — both on and off the stage.
            </p>

            <a
              href='#contact'
              className='inline-block px-8 py-3 border border-gray-500 rounded-full text-black hover:bg-purple-400 hover:text-white transition'
            >
              Let’s Talk
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};


export default About;
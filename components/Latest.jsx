'use client';

import { assets, servicesData } from '@/assets/assets';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (img) => {
    setActiveImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (modalOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="latest"
      className="relative w-full px-5 md:px-[12%] py-10 scroll-mt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-4 text-lg font-Ovo text-gray-600"
        >
          My Work
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-3xl md:text-5xl font-Ovo mb-12 text-blue-800"
        >
          my Advocacy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 leading-relaxed"
        >
          Ngeli Ngoma, a young model with a big heart, is using her voice and platform to speak up for children who live on the streets. Even at 
          her young age, Ngeli believes that every child deserves love, care, and a safe place to call home.
        </motion.p>

        {/* --- Work Data Cards --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5 text-black"
        >
          {servicesData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-no-repeat bg-cover bg-center cursor-pointer group rounded-lg relative"
              key={index}
              onClick={() => openModal(project.bgImage)}
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-[#fd9af5] transition">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>

      {/* Image Modal */}
      {modalOpen && activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-[80vh]">
            <Image
              src={activeImage}
              alt="Full View"
              fill
              className="object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Services;

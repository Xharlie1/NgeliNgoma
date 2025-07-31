'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryData, assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Gallery = () => {
  const IMAGES_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const totalPages = Math.ceil(GalleryData.length / IMAGES_PER_PAGE);

  const handleShowToggle = () => {
    
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1); // Reset to first page
    }
  };
  
  const currentImages = GalleryData.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="gallery"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-12 text-lg font-Ovo text-gray-700"
      >
        My Gallery
      </motion.h4>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
      >
        {currentImages.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="cursor-pointer group rounded-lg overflow-hidden"
            onClick={() => openModal(project.bgImage)}
          >
            <Image
              src={project.bgImage}
              alt={`Gallery image ${index + 1}`}
              width={1000}
              height={1000}
              className="object-cover w-full aspect-square"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        onClick={handleShowToggle}
        className="w-max flex items-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto mt-12 hover:bg-pink-300 duration-500"
      >
        {currentPage < totalPages ? 'Show more' : 'Show less'}
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />
      </motion.button>

      {/* Modal Preview */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full flex items-center justify-center bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = GalleryData.findIndex((img) => img.bgImage === modalImage);
                const prevIndex = (currentIndex - 1 + GalleryData.length) % GalleryData.length;
                setModalImage(GalleryData[prevIndex].bgImage);
              }}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50 hover:scale-125 transition"
              aria-label="Previous image"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = GalleryData.findIndex((img) => img.bgImage === modalImage);
                const nextIndex = (currentIndex + 1) % GalleryData.length;
                setModalImage(GalleryData[nextIndex].bgImage);
              }}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50 hover:scale-125 transition"
              aria-label="Next image"
            >
              ❯
            </button>

            {/* Image Preview */}
            <Image
              src={modalImage}
              alt="Preview"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}


    </motion.div>
  );
};

export default Gallery;

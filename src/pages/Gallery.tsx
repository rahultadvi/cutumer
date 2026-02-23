import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Filter } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { GALLERY_ITEMS } from '../constants';

import Marquee from '../components/Marquee';

const Gallery: React.FC = () => {
  const marqueeItems = ['Bridal', 'Hair', 'Makeup', 'Spa', 'Nails', 'Glow', 'Luxury', 'Artistry'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = ['All', 'Hair', 'Makeup', 'Spa', 'Bridal'];

  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <div className="min-h-screen py-20">
      <Marquee items={marqueeItems} className="mb-20" />
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Our Masterpieces" subtitle="Visual Gallery" />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all border ${
                activeFilter === filter
                  ? "bg-luxury-gold text-black border-luxury-gold"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-luxury-gold hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <Maximize2 className="w-10 h-10 text-luxury-gold mb-4" />
                  <span className="text-white font-bold uppercase tracking-widest text-sm">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-10 right-10 text-white hover:text-luxury-gold transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-10 h-10" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scissors, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-8"
        >
          <Scissors className="w-24 h-24 text-luxury-gold" />
        </motion.div>
        <h1 className="text-9xl font-serif font-bold gold-text mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-12">
          It seems the page you are looking for has been trimmed away. Let's get you back to the main salon.
        </p>
        <Link to="/" className="btn-gold inline-flex items-center">
          <Home className="mr-2 w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle,
  MessageSquareText,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../utils';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Grooming for Confidence & Style',
      date: 'December 19, 2025',
      img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'How Regular Facials Can Transform Your Skin',
      date: 'December 19, 2025',
      img: 'https://images.unsplash.com/photo-1570172619245-711f83f5fd19?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Healthy & Shiny Hair',
      date: 'December 19, 2025',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-luxury-gold selection:text-black">
      {/* Header Section */}
      <section className="bg-luxury-black pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-luxury-gold/20 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">Blogs</h1>
              <nav className="flex items-center text-sm font-bold uppercase tracking-widest">
                <Link to="/" className="text-gray-500 hover:text-luxury-gold transition-colors">Home</Link>
                <div className="w-1 h-1 bg-luxury-gold rounded-full mx-4" />
                <span className="text-white">Blogs</span>
              </nav>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block"
            >
              <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 backdrop-blur-xl shadow-2xl">
                <MessageSquareText className="w-12 h-12 text-luxury-gold/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
                <div className="p-10 relative">
                  <h3 className="text-2xl font-black mb-6 leading-tight tracking-tight group-hover:text-luxury-gold transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">
                      {post.date}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-luxury-black text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-luxury-gold group-hover:text-black transition-all"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Blog;

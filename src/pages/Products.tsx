import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Star, 
  ShoppingBag, 
  Scissors, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle,
  Store,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Male', 'Female', 'Children', 'Unisex'];

  const products = [
    {
      id: 1,
      name: 'hair dryer kit',
      category: 'Unisex',
      price: '2,500',
      description: 'This hair dryer kit is designed for fast, effortless styling at home or on the go. It delivers power.',
      img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'Bottles',
      category: 'Unisex',
      price: '200',
      description: 'This bottle container is made from durable, food-grade material to keep your beverages safe and fresh.',
      img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      name: 'Travel bag',
      category: 'Unisex',
      price: '1,200',
      description: 'This travel bag is designed to make every journey comfortable and organized. Crafted from durable material.',
      img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      name: 'Beard Oil',
      category: 'Male',
      price: '850',
      description: 'Premium beard oil for a soft, manageable, and healthy-looking beard. Infused with natural oils.',
      img: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      name: 'Hair Serum',
      category: 'Female',
      price: '1,500',
      description: 'Advanced hair serum for frizz control and intense shine. Protects against heat damage.',
      img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      name: 'Kids Shampoo',
      category: 'Children',
      price: '450',
      description: 'Tear-free, gentle shampoo specially formulated for kids\' sensitive scalps and fine hair.',
      img: 'https://images.unsplash.com/photo-1556229167-7313a24039c8?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const testimonials = [
    {
      name: 'H Prince Jacob J',
      rating: 5,
      text: 'Very young and energetic people working here....Pleased with the haircut and good suggestions made by one of them was very helpful...',
      img: 'https://i.pravatar.cc/150?u=jacob'
    },
    {
      name: 'Vahida Shaikh',
      rating: 5,
      text: 'I satisfied with hair spa.... relaxing by massage...good staf..naziya n nazrana both expert in there work',
      img: 'https://i.pravatar.cc/150?u=vahida'
    },
    {
      name: 'Rahul Sharma',
      rating: 5,
      text: 'Best salon in Downtown Areaz` for family. The kids zone is amazing and my son loved his haircut experience.',
      img: 'https://i.pravatar.cc/150?u=rahul'
    }
  ];

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">Products</h1>
              <nav className="flex items-center text-sm font-bold uppercase tracking-widest">
                <Link to="/" className="text-gray-500 hover:text-luxury-gold transition-colors">Home</Link>
                <div className="w-1 h-1 bg-luxury-gold rounded-full mx-4" />
                <span className="text-white">Products</span>
              </nav>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block"
            >
              <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 backdrop-blur-xl shadow-2xl">
                <Store className="w-12 h-12 text-luxury-gold/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <span className="text-gray-400 font-black tracking-[0.2em] uppercase text-[10px] mb-4 block">Filter by Category</span>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-8 py-3 rounded-full font-bold text-sm transition-all border-2",
                      activeCategory === cat 
                        ? "bg-black text-white border-black" 
                        : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
                    )}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="w-full max-w-xl relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-5 bg-white border-2 border-gray-100 rounded-full focus:border-black outline-none transition-all font-medium text-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow text-center">
                    <h3 className="text-2xl font-black mb-4 tracking-tight capitalize">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-50">
                      <span className="text-3xl font-black text-luxury-gold tracking-tighter">₹{product.price}</span>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-black text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-luxury-gold hover:text-black transition-all shadow-lg"
                      >
                        Shop Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ShoppingBag className="w-20 h-20 text-gray-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-400">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or category filter</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-gray-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">CLIENT TESTIMONIALS</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">What Our Client Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-50 p-12 rounded-[4rem] relative group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100"
              >
                <Quote className="absolute top-12 right-12 w-16 h-16 text-gray-200 group-hover:text-luxury-gold/20 transition-colors" />
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black tracking-tight">{t.name}</h4>
                    <div className="flex text-luxury-gold mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed font-medium italic">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-16">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={cn(
                "w-3 h-3 rounded-full border-2 border-gray-200 transition-all",
                i === 0 ? "bg-black border-black w-8" : "bg-transparent"
              )} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;

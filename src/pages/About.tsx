import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Star, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  Scissors
} from 'lucide-react';

const About: React.FC = () => {
  const experts = [
    { 
      name: 'IMRAN', 
      role: 'HAIR SPECIALIST', 
      img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400',
      branch: 'Seventh Heaven'
    },
    { 
      name: 'PERVEZ', 
      role: 'Staff Member', 
      img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400',
      branch: 'Seventh Heaven'
    },
    { 
      name: 'MUJAMMIL', 
      role: 'HAIR SPECIALIST', 
      img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400',
      branch: 'Seventh Heaven'
    },
  ];

  const stats = [
    { icon: Award, value: '19+', label: 'Years of Experience.' },
    { icon: Users, value: '200+', label: 'Company Clients' },
    { icon: Users, value: '28+', label: 'Staff Members' },
  ];

  const reviews = [
    { name: 'Karan Rathod', date: '14 days ago', text: "It's my first visit and feels like home here people are so good and polite particularly aadil so...", rating: 5 },
    { name: 'Zubin Kadri', date: '15 days ago', text: "Service is very good end I m satisfied from this salon", rating: 5 },
    { name: 'Shahnawaz Ajmeri', date: '16 days ago', text: "Mustakim bhai good haircut good service beard master", rating: 5 },
    { name: 'Sakil Sandhi', date: '17 days ago', text: "Adil is best hairstlish", rating: 5 },
    { name: 'Sporty Gaming', date: '16 days ago', text: "Mr Mustakim bhai good service and very good hair cut", rating: 5 },
    { name: 'Abdul Jethava', date: '17 days ago', text: "Nice and good services by sameer", rating: 5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
      {/* Breadcrumb Header */}
      <section className="bg-luxury-black pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/20 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8"
          >
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter"
              >
                About Us
              </motion.h1>
              <nav className="flex items-center text-sm font-bold uppercase tracking-widest">
                <Link to="/" className="text-gray-500 hover:text-luxury-gold transition-colors">Home</Link>
                <div className="w-1 h-1 bg-luxury-gold rounded-full mx-4" />
                <span className="text-white">About us</span>
              </nav>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="hidden md:block"
            >
              <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 backdrop-blur-xl shadow-2xl">
                <HelpCircle className="w-12 h-12 text-luxury-gold/50" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Where Technique Meets Taste */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600" alt="Salon" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 cursor-pointer"
                  >
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </motion.div>
                </div>
              </motion.div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="bg-luxury-black rounded-[4rem] p-10 text-center flex flex-col items-center justify-center h-1/2 shadow-2xl border border-white/5"
                >
                  <span className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-black mb-3">Est. Since</span>
                  <span className="text-6xl font-black text-white tracking-tighter">1998</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                >
                  <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" alt="Salon" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-luxury-gold font-black tracking-[0.2em] uppercase text-[10px] mb-6 block border-l-2 border-luxury-gold pl-4">
                ABOUT TOUCH & GLOW - UNISEX FAMILY SALON IN AHMEDABAD
              </span>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9] tracking-tighter">
                Where Technique <br /> Meets Taste
              </h2>
              <p className="text-gray-500 text-xl mb-12 leading-relaxed font-medium">
                At <span className="text-black font-black">Touch & Glow</span>, we don't do guesswork. As a unisex family salon in Ahmedabad, we combine strong fundamentals with modern styling—so every cut sits better, every colour looks balanced, and every treatment is chosen for your hair's actual condition.
              </p>
              
              <div className="space-y-10 mb-16">
                {[
                  { title: 'Detail-driven finishing', desc: 'precision sections, clean lines, and shape that grows out well.' },
                  { title: 'Smart service choices', desc: "we recommend colour and treatments based on texture, damage level, and maintenance you're comfortable with." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-8 group"
                  >
                    <span className="text-black font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">0{i+1}.</span>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      <span className="text-black font-black uppercase text-sm tracking-widest block mb-2">{item.title}</span>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-black text-white rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-luxury-gold hover:text-black transition-all duration-500 shadow-xl"
              >
                Read Our Full Story
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-32 bg-[#F5F5F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#1A1A1A] text-white px-16 py-4 rounded-2xl font-bold text-2xl mb-20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/10"
          >
            Seventh Heaven Branch
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {experts.map((expert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col items-center p-8"
              >
                <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-8 relative bg-[#F8F9FA]">
                  {/* Background Logo Effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <Scissors className="w-40 h-40 rotate-45" />
                  </div>
                  <img 
                    src={expert.img} 
                    alt={expert.name} 
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <div className="text-center w-full">
                  <h4 className="text-2xl font-black mb-2 tracking-tight text-[#1A1A1A]">{expert.name}</h4>
                  <p className="text-gray-400 font-bold italic text-xs uppercase tracking-[0.1em] mb-8">{expert.role}</p>
                  
                  <div className="inline-block bg-[#1A1A1A] text-white px-8 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-lg">
                    Seventh Heaven
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-gray-400 font-bold uppercase text-[10px] tracking-widest"
          >
            No other staff available for this branch.
          </motion.p>
        </div>
      </section>

      {/* Facts & Figures */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <span className="text-gray-400 font-black tracking-[0.2em] uppercase text-[10px] mb-6 block border-l-2 border-luxury-gold pl-4">COMPANY OVERVIEW</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">Facts & <br /> Figures</h2>
            </motion.div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-16">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-luxury-black rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <stat.icon className="w-10 h-10 text-luxury-gold" />
                  </div>
                  <span className="text-6xl font-black mb-3 tracking-tighter">{stat.value}</span>
                  <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter"
            >
              What Our Customers Say
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl inline-flex flex-wrap items-center justify-center gap-12 border border-gray-100"
            >
              <div className="flex items-center gap-6">
                <span className="text-5xl font-black tracking-tighter">4.8</span>
                <div className="space-y-1">
                  <div className="flex text-luxury-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">378 reviews on Google</p>
                </div>
              </div>
              <button className="bg-[#4285F4] text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-all shadow-xl">
                Review us on Google
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* AI Summary Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center shadow-inner">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-black text-purple-600 uppercase text-xs tracking-widest">AI Summary</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verified Insights</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <ul className="space-y-6 text-sm text-gray-500 font-medium">
                {[
                  'Mustakim is highly praised for his hair cutting and massage skills.',
                  'Naziya receives accolades for her excellent hair coloring and highlights.',
                  'Customers appreciate the friendly and professional behavior of the staff.'
                ].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {reviews.map((review, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <img src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black tracking-tight text-lg">{review.name}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-luxury-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500">{review.text}</p>
                <button className="text-luxury-gold font-black uppercase text-[10px] tracking-widest hover:underline">Read full review</button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white border border-gray-200 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl"
            >
              Load More Reviews
            </motion.button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 font-black tracking-[0.3em] uppercase text-[10px] mb-6 block"
          >
            PRODUCTS WE USE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-24 tracking-tighter"
          >
            Brands We Use
          </motion.h2>
          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-20 rounded-[5rem] border border-gray-100 w-full max-w-xl shadow-inner group"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1200px-L%27Or%C3%A9al_logo.svg.png" 
                alt="L'Oreal" 
                className="w-full grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Scissors, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Search,
  Brain,
  Palette
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES, TESTIMONIALS } from '../constants';
import { cn } from '../utils';
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const HERO_SLIDES = [
  {
    id: 1,
    subtitle: 'WELCOME TO Touch and Magic',
    title: "Touch of Gloss Waiting Lounge",
    description: 'Relax in our thoughtfully designed waiting space, where glossy interiors, calm vibes, and comfort set the tone for your perfect salon experience.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    subtitle: 'WELCOME TO TOUCH AND MAGIC',
    title: "Men's Grooming Section",
    description: 'A dedicated space for boys and men, designed for precision haircuts, grooming, and a confident salon experience.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    subtitle: 'WELCOME TO TOUCH AND MAGIC',
    title: "Kids' Fun Cut Zone",
    description: 'A cheerful space designed just for kids, where haircuts become fun rides in our car-style chairs—safe, playful, and stress-free.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
  }
];

const TICKER_ITEMS = [
  { icon: Scissors, text: 'Hair Style' },
  { icon: Sparkles, text: 'Hair Coloring' },
  { icon: Scissors, text: 'Shaving' },
  { icon: Heart, text: 'Organic Facial' },
  { icon: Sparkles, text: 'Eyebrow Shaping' },
  { icon: Star, text: 'Natural Color' },
  { icon: Sparkles, text: 'Eyelash Tinting' },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [query, setQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAiQuery = async () => {
    if (!query.trim()) return;
    setIsThinking(true);
    setAiResponse("");
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: query,
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
          systemInstruction: "You are a beauty and wellness expert for Touch and Magic Family Salon. Answer complex queries about hair care, skin treatments, and salon services with deep reasoning and helpful advice."
        }
      });
      setAiResponse(response.text || "I'm sorry, I couldn't process that request.");
    } catch (error) {
      console.error("AI Error:", error);
      setAiResponse("An error occurred while thinking. Please try again.");
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="overflow-hidden bg-luxury-black text-white">
      {/* Hero Slider */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={HERO_SLIDES[currentSlide].id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <span className="text-gray-400 tracking-[0.2em] uppercase text-xs font-bold">
                      {HERO_SLIDES[currentSlide].subtitle}
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                    {HERO_SLIDES[currentSlide].title}
                  </h1>
                  
                  <p className="text-gray-400 text-lg max-w-md mb-12 leading-relaxed">
                    {HERO_SLIDES[currentSlide].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="btn-gold !px-10 !py-4">
                      Book Now
                    </Link>
                    <Link to="/contact" className="btn-outline-gold !px-10 !py-4">
                      Contact Now
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Image with Custom Shape */}
            <div className="relative flex justify-center lg:justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={HERO_SLIDES[currentSlide].id}
                  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.7 }}
                  className="relative w-full max-w-xl"
                >
                  <div className="relative aspect-[1.2/1] overflow-hidden shadow-2xl border-2 border-white/10" 
                       style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 40%' }}>
                    <img
                      src={HERO_SLIDES[currentSlide].image}
                      alt={HERO_SLIDES[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <div className="absolute bottom-0 left-0 flex space-x-4 translate-y-12">
                <button onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} className="text-gray-500 hover:text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)} className="text-gray-500 hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentSlide === i ? "bg-white w-6" : "bg-gray-600"
              )}
            />
          ))}
        </div>
      </section>

      {/* Service Ticker */}
      <div className="bg-white py-6 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {TICKER_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center mx-10">
                  <div className="w-2 h-2 bg-black rounded-full mr-3" />
                  <span className="text-black font-bold uppercase tracking-wider text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* AI Thinking Section */}
      <section className="py-20 bg-black/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-luxury-gold/10 px-4 py-2 rounded-full mb-6 border border-luxury-gold/20">
            <Brain className="w-5 h-5 text-luxury-gold" />
            <span className="text-luxury-gold text-xs font-bold uppercase tracking-widest">AI Beauty Concierge</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Ask our expert anything</h2>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., What's the best treatment for dry hair?"
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 focus:outline-none focus:border-luxury-gold transition-colors text-white placeholder:text-gray-500"
              onKeyDown={(e) => e.key === 'Enter' && handleAiQuery()}
            />
            <button
              onClick={handleAiQuery}
              disabled={isThinking}
              className="absolute right-2 top-2 bottom-2 bg-luxury-gold text-black px-6 rounded-full font-bold hover:bg-luxury-gold-light transition-colors disabled:opacity-50"
            >
              {isThinking ? "Thinking..." : <Search className="w-5 h-5" />}
            </button>
          </div>
          <AnimatePresence>
            {aiResponse && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 p-8 glass-card text-left relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-luxury-gold" />
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{aiResponse}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-luxury-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
              >
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600" alt="Salon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>
              </motion.div>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-[40px] p-8 text-center flex flex-col items-center justify-center h-1/2"
                >
                  <span className="text-gray-400 uppercase tracking-widest text-xs mb-2">Since</span>
                  <span className="text-5xl font-bold gold-text">1998</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-square rounded-3xl overflow-hidden"
                >
                  <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" alt="Salon" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
              >
                ABOUT Touch and Magic
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight"
              >
                Premium Care, <br /> Personalised for Every Style
              </motion.h2>
              
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                <span className="text-white font-bold">Touch and Magic</span> is a unisex family salon in Ahmedabad built for consistent results—clean finishing, honest consultation, and services tailored to your hair type and routine. Whether you want a simple refresh or a complete transformation, our focus is comfort, hygiene, and a look you can maintain confidently.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    num: '01.',
                    title: 'Consultation-first service:',
                    desc: 'we recommend cuts, colour and treatments based on face shape, hair texture and lifestyle.'
                  },
                  {
                    num: '02.',
                    title: 'Family-friendly experience:',
                    desc: 'a calm, welcoming space with patient styling for adults and kids, plus neat grooming for men and women.'
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6"
                  >
                    <span className="text-luxury-gold font-bold text-xl">{item.num}</span>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        {item.title} <span className="text-gray-400 font-normal text-lg">{item.desc}</span>
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa & Wellness Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gray-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">SPA & WELLNESS</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Relaxation That Feels Truly Premium</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shrink-0">
                  <Star className="w-8 h-8 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Skilled Spa Therapists</h4>
                  <p className="text-gray-600 leading-relaxed">Our trained therapists focus on what your body needs that day—tight shoulders, tired legs, or full-body relaxation. Choose gentle to firm pressure, and we'll tailor the session for comfort and relief.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shrink-0">
                  <Heart className="w-8 h-8 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Quality Oils & Skin-Friendly Products</h4>
                  <p className="text-gray-600 leading-relaxed">We use premium oils and products selected for a smooth, clean finish and a calming experience. Expect soothing aromas, hygienic application, and a spa routine that leaves you refreshed.</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-full overflow-hidden border-8 border-gray-100 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" alt="Spa" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Spa Pricing</h3>
              {[
                { title: '30 Minutes Session', desc: 'Quick relaxation & stress relief', price: '₹1,200' },
                { title: '60 Minutes Session', desc: 'Complete body relaxation', price: '₹2,000', popular: true },
                { title: '90 Minutes Session', desc: 'Deep therapy & rejuvenation', price: '₹2,800' }
              ].map((plan, i) => (
                <div key={i} className={cn(
                  "p-6 rounded-2xl border transition-all",
                  plan.popular ? "bg-black text-white border-black" : "bg-gray-50 border-gray-100"
                )}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">{plan.title}</h4>
                    <span className={cn("font-bold", plan.popular ? "text-luxury-gold" : "text-black")}>{plan.price}</span>
                  </div>
                  <p className={cn("text-sm", plan.popular ? "text-gray-400" : "text-gray-500")}>{plan.desc}</p>
                  {plan.popular && <span className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mt-2 block">Most Popular</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert In Section */}
      <section className="py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gray-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">PROFESSIONAL SERVICES</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">We are Expert in</h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-20">At Touch and Magic, a unisex family salon in Ahmedabad, we keep it simple: great technique, clean finishing, and results that suit your face shape, hair texture, and daily routine.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Scissors,
                title: 'Cutting & Styling',
                desc: 'Precision haircuts and easy-to-carry styling for men and women—classic, modern, or trendy. We focus on shape, volume, and finishing so your look stays sharp even after you step out.'
              },
              {
                icon: Sparkles,
                title: 'Hair Treatments',
                desc: 'Hair spa, smoothening and keratin-focused care to reduce frizz, improve manageability, and add shine. We assess your hair condition first, then suggest the right treatment and aftercare for lasting results.'
              },
              {
                icon: Palette,
                title: 'Hair Coloring',
                desc: 'From natural coverage to highlights and full color, we create shades that match your skin tone and style. Expect careful sectioning, even application, and a finish that looks rich, balanced, and fresh.'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                  <item.icon className="w-10 h-10 text-luxury-gold" />
                </div>
                <h4 className="text-2xl font-bold mb-6">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

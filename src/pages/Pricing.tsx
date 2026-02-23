import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Sparkles, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { PRICING_PLANS } from '../constants';
import { cn } from '../utils';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Choose Your Experience" subtitle="Pricing Plans" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -15 }}
              className={cn(
                "glass-card p-12 flex flex-col relative overflow-hidden transition-shadow hover:shadow-[0_30px_60px_rgba(212,175,55,0.2)]",
                plan.isPopular && "border-luxury-gold ring-1 ring-luxury-gold scale-105 z-10"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-luxury-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] py-1 px-10 rotate-45 translate-x-[35px] translate-y-[20px]">
                  Most Loved
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold gold-text">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/ session</span>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-luxury-gold mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/booking" 
                className={cn(
                  "w-full text-center py-4 rounded-full font-bold transition-all",
                  plan.isPopular ? "btn-gold" : "btn-outline-gold"
                )}
              >
                Book This Plan
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ or Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: 'Safe & Hygienic', desc: 'We follow strict sterilization protocols for all tools.' },
            { icon: Sparkles, title: 'Premium Products', desc: 'Only the finest international brands touch your skin.' },
            { icon: Crown, title: 'VIP Treatment', desc: 'Every client is royalty in our salon.' },
            { icon: Star, title: 'Expert Stylists', desc: 'Our team has over 15 years of industry experience.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                <item.icon className="w-8 h-8 text-luxury-gold" />
              </div>
              <h4 className="text-white font-bold mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

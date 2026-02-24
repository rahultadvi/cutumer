import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Scissors, CheckCircle2, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';

const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: searchParams.get('service') || '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setFormData(prev => ({ ...prev, service }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp Logic
    const phoneNumber = '919913546386';
    const message = `Hello Touch and Magic Salon, I want to book ${formData.service} on ${formData.date} at ${formData.time}. My name is ${formData.name}, phone ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    setIsSubmitted(true);
    
    // Redirect after a short delay to show success state
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-luxury-gold" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Booking Initiated!</h2>
          <p className="text-gray-400 mb-8">
            We are redirecting you to WhatsApp to confirm your appointment with our team.
          </p>
          <div className="flex items-center justify-center space-x-2 text-luxury-gold">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-2 h-2 bg-current rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              className="w-2 h-2 bg-current rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
              className="w-2 h-2 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading title="Reserve Your Glow" subtitle="Online Booking" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-3">
                <label className="flex items-center text-sm font-medium text-gray-400">
                  <User className="w-4 h-4 mr-2 text-luxury-gold" />
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <label className="flex items-center text-sm font-medium text-gray-400">
                  <Phone className="w-4 h-4 mr-2 text-luxury-gold" />
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-3 md:col-span-2">
                <label className="flex items-center text-sm font-medium text-gray-400">
                  <Scissors className="w-4 h-4 mr-2 text-luxury-gold" />
                  Select Service
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-luxury-gold transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-luxury-black">Choose a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name} className="bg-luxury-black">
                      {s.name} - {s.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="space-y-3">
                <label className="flex items-center text-sm font-medium text-gray-400">
                  <Calendar className="w-4 h-4 mr-2 text-luxury-gold" />
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-luxury-gold transition-colors [color-scheme:dark]"
                />
              </div>

              {/* Time */}
              <div className="space-y-3">
                <label className="flex items-center text-sm font-medium text-gray-400">
                  <Clock className="w-4 h-4 mr-2 text-luxury-gold" />
                  Preferred Time
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-luxury-gold transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-luxury-black">Select time slot</option>
                  {['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'].map((t) => (
                    <option key={t} value={t} className="bg-luxury-black">{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="btn-gold w-full py-5 text-lg flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Confirm via WhatsApp</span>
              </button>
              <p className="text-center text-gray-500 text-xs mt-6 uppercase tracking-widest">
                No payment required now. Pay at the salon after your service.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;

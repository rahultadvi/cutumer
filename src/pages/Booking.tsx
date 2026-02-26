import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Scissors,
  CheckCircle2,
  MessageCircle,
  MapPin,
  Mail,
  Clock3,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false); // State for terms agreement
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: searchParams.get('service') || '',
    date: '',
    time: '',
    message: '',
  });

  useEffect(() => {
    setMounted(true);
    const service = searchParams.get('service');
    if (service) {
      setFormData((prev) => ({ ...prev, service }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return; // Extra safety

    const phoneNumber = '919913546386';
    const message = `Hello Touch & Glow Salon, I want to book ${formData.service
      } on ${formData.date} at ${formData.time}. My name is ${formData.name
      }, phone ${formData.phone}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  // Loading / success screen
  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div
          className={`glass-card p-12 text-center max-w-md w-full transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <div className="w-20 h-20 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-luxury-gold" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Booking Initiated!
          </h2>
          <p className="text-gray-400 mb-8">
            We are redirecting you to WhatsApp to confirm your appointment with
            our team.
          </p>
          <div className="flex items-center justify-center space-x-2 text-luxury-gold">
            <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-current rounded-full animate-pulse animation-delay-200" />
            <div className="w-2 h-2 bg-current rounded-full animate-pulse animation-delay-400" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <span>Home</span>
            <span>/</span>
            <span className="text-luxury-gold">Contact</span>
          </div>

          {/* Header */}
          <SectionHeading title="Get In Touch With Us" subtitle="Contact" />

          {/* Two column layout: Contact Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Left: Contact details & hours */}
            <div
              className={`space-y-8 transition-all duration-700 delay-100 ${mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                }`}
            >
              {/* Address card */}
              <div className="glass-card p-8 hover:shadow-lg hover:shadow-luxury-gold/10 transition-shadow">
                <h3 className="text-xl font-serif text-white mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-luxury-gold mr-2" />
                  Address
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Regency lane Gate 3, Amber Tower, Sarkhej Rd,
                  <br />
                  near Gulzar park, Juhapura,
                  <br />
                  Downtown Area, Gujarat 380055
                </p>
              </div>

              {/* Phone & Email */}
              <div className="glass-card p-8 hover:shadow-lg hover:shadow-luxury-gold/10 transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center">
                      <Phone className="w-5 h-5 text-luxury-gold mr-2" />
                      Phone
                    </h3>
                    <p className="text-gray-400">+91 99135 46386</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center">
                      <Mail className="w-5 h-5 text-luxury-gold mr-2" />
                      Email
                    </h3>
                    <p className="text-gray-400">tochandglow@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="glass-card p-8 hover:shadow-lg hover:shadow-luxury-gold/10 transition-shadow">
                <h3 className="text-xl font-serif text-white mb-4 flex items-center">
                  <Clock3 className="w-5 h-5 text-luxury-gold mr-2" />
                  Working Hours
                </h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Mon – Sat</span>
                    <span>10:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div
              className={`glass-card p-8 md:p-10 transition-all duration-700 delay-200 ${mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-400">
                    <User className="w-4 h-4 mr-2 text-luxury-gold" />
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all hover:bg-white/10"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-400">
                    <Phone className="w-4 h-4 mr-2 text-luxury-gold" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Enter Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all hover:bg-white/10"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-400">
                    <Scissors className="w-4 h-4 mr-2 text-luxury-gold" />
                    Select Service
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all hover:bg-white/10 appearance-none"
                  >
                    <option value="" disabled className="bg-luxury-black">
                      Select the service
                    </option>
                    {SERVICES.map((s) => (
                      <option
                        key={s.id}
                        value={s.name}
                        className="bg-luxury-black"
                      >
                        {s.name} - {s.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-400">
                      <Calendar className="w-4 h-4 mr-2 text-luxury-gold" />
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all hover:bg-white/10 [color-scheme:dark]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-luxury-gold" />
                      Time Slot
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all hover:bg-white/10 appearance-none"
                    >
                      <option value="" disabled className="bg-luxury-black">
                        Select Time Slot
                      </option>
                      {[
                        '09:00 AM',
                        '10:00 AM',
                        '11:00 AM',
                        '12:00 PM',
                        '01:00 PM',
                        '02:00 PM',
                        '03:00 PM',
                        '04:00 PM',
                        '05:00 PM',
                        '06:00 PM',
                        '07:00 PM',
                      ].map((t) => (
                        <option key={t} value={t} className="bg-luxury-black">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-400">
                    <MessageCircle className="w-4 h-4 mr-2 text-luxury-gold" />
                    Write a Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write a Message"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all hover:bg-white/10 resize-none"
                  />
                </div>

                {/* Functional checkbox for terms */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 rounded border-white/20 bg-white/5 text-luxury-gold focus:ring-luxury-gold focus:ring-1 transition-all cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                    I agree to the terms and conditions
                  </label>
                </div>

                {/* Submit Button - disabled if not agreed */}
                {/* Submit Button - production level with full animations */}
                <button
                  type="submit"
                  disabled={!agreed}
                  className={`
    w-full font-semibold py-4 rounded-xl
    flex items-center justify-center space-x-3
    transition-all duration-300 ease-out
    shadow-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 focus:ring-offset-luxury-black
    ${agreed
                      ? 'bg-luxury-gold text-luxury-black hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-luxury-gold/30 hover:border-luxury-gold/50 border border-transparent'
                      : 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-60 border border-gray-500/30'
                    }
  `}
                >
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <span>Book Appointment</span>
                </button>

                {/* Payment note */}
                <p className="text-center text-gray-500 text-xs uppercase tracking-widest">
                  NO PAYMENT REQUIRED NOW. PAY AT THE SALON AFTER YOUR SERVICE.
                </p>
              </form>
            </div>
          </div>

          {/* Branch Locations */}
          <div className="mt-20">
            <h2 className="text-3xl font-serif text-white text-center mb-12">
              Visit Any of Our 3 Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Touch & Glow - Branch 1',
                  address:
                    'Regency lane Gate 3, Amber Tower, Sarkhej Rd, near Gulzar park, Juhapura, , Gujarat 380055',
                  phone: '+91 99135 46386',
                  email: 'branch1@touchandglow.com',
                },
                {
                  name: 'Touch & Glow - Branch 2',
                  address:
                    'GF-18, Block-A, Seventh Heaven, opp. Al Burooj,Downtown Area, Gujarat 380055',
                  phone: '+91 99135 46386',
                  email: 'branch2@touchandglow.com',
                },
                {
                  name: 'Touch & Glow - Branch 3',
                  address:
                    'Shop no 06, ALIF APARTMENT, Sarkhej Makarba Rd, Makarba, Downtown Area, Gujarat 382210',
                  phone: '+91 99135 46386',
                  email: 'branch3@touchandglow.com',
                },
              ].map((branch, idx) => (
                <div
                  key={idx}
                  className={`glass-card p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 ${mounted
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${idx * 100 + 300}ms` }}
                >
                  <h3 className="text-xl font-serif text-white mb-2">
                    {branch.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{branch.address}</p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-luxury-gold" />
                    {branch.phone}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center mt-2">
                    <Mail className="w-4 h-4 mr-2 text-luxury-gold" />
                    {branch.email}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer (unchanged) */}
      <footer
        className={`w-full bg-luxury-black/95 border-t border-white/10 py-12 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-serif text-white mb-4">Our Location</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Touch & Glow, Downtown Area
                <br />
                Regency lane Gate 3, Amber Tower,
                <br />
                Sarkhej Rd, near Gulzar park,
                <br />
                Juhapura, Downtown Area, Gujarat 380055
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif text-white mb-4">Get in Touch</h4>
              <p className="text-gray-400 text-sm flex items-center mb-2">
                <Phone className="w-4 h-4 mr-2 text-luxury-gold" />
                +91 99135 46386
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                <Mail className="w-4 h-4 mr-2 text-luxury-gold" />
                tochandglow@gmail.com
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif text-white mb-4">Working Hours</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span>10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-serif text-white mb-4">
                Touch & Glow <span className="text-xs font-light block text-luxury-gold">FAMILY SALON</span>
              </h4>
              <ul className="space-y-2 text-sm">
                {['Home', 'About us', 'Products', 'Services', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-luxury-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            Designed & Developed By Zantatech Solutions
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
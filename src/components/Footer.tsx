import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Top Contact Info Section */}
      <div className="border-b border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: MapPin, title: 'Our Location', content: 'Touch and Magic,\nDowntown Area' },
              { icon: Phone, title: 'Get in Touch', content: 'Phone: +91 123456789\nEmail: touchandmagic@gmail.com' },
              { icon: Clock, title: 'Working Hours', content: 'Mon-Sat: 10:00 AM – 9:00 PM\nSunday: 10:00 PM – 9:00 PM' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl transition-all duration-500 group-hover:bg-luxury-gold group-hover:-translate-y-2">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed whitespace-pre-wrap">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Logo and Socials */}
            <div className="flex flex-col items-center md:items-start gap-8">
              <Link to="/" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-black font-black text-xl">TG</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tighter uppercase leading-none">
                    Touch and Magic
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-luxury-gold">
                    Family Salon
                  </span>
                </div>
              </Link>
              
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: MessageCircle, href: 'https://wa.me/919913546386' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all border border-white/10"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                { label: 'Home', path: '/' },
                { label: 'About us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Services', path: '/services' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' }
              ].map((link, i) => (
                <Link 
                  key={i}
                  to={link.path}
                  className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Credit Section */}
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Designed & Developed By <span className="text-luxury-gold">zantatech solutions</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

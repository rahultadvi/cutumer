import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Scissors,
  Headphones,
  Calendar,
  Send
} from 'lucide-react';
import { cn } from '../utils';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   alert('Thank you! Your appointment request has been sent.');
  // };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://cutumer.onrender.com/api/appointments",
      formData
    );

    if (res.status === 200 || res.status === 201) {
      alert("✅ Appointment booked successfully");

      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    }
  } catch (err) {
    console.log(err);
    alert("❌ Booking failed");
  }
};
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
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">Contact</h1>
              <nav className="flex items-center text-sm font-bold uppercase tracking-widest">
                <Link to="/" className="text-gray-500 hover:text-luxury-gold transition-colors">Home</Link>
                <div className="w-1 h-1 bg-luxury-gold rounded-full mx-4" />
                <span className="text-white">Contact</span>
              </nav>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block"
            >
              <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 backdrop-blur-xl shadow-2xl">
                <Headphones className="w-12 h-12 text-luxury-gold/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-gray-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">CONTACT FORM</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Get In Touch With Us</h2>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-gray-500 font-bold text-sm ml-2">Enter Name</label>
              <input 
                type="text"
                placeholder="Name"
                required
                className="w-full px-8 py-5 bg-white border-2 border-transparent rounded-2xl focus:border-black outline-none transition-all font-medium text-lg shadow-sm"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-gray-500 font-bold text-sm ml-2">Enter Phone Number</label>
              <input 
                type="tel"
                placeholder="Phone"
                required
                className="w-full px-8 py-5 bg-white border-2 border-transparent rounded-2xl focus:border-black outline-none transition-all font-medium text-lg shadow-sm"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-gray-500 font-bold text-sm ml-2">
  Select the service
</label>

<input
  type="text"
  required
  placeholder="Enter service (Haircut, Beard, Facial...)"
  className="w-full px-8 py-5 bg-white border-2 border-transparent rounded-2xl focus:border-black outline-none transition-all font-medium text-lg shadow-sm"
  value={formData.service}
  onChange={(e) =>
    setFormData({ ...formData, service: e.target.value })
  }
/>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-gray-500 font-bold text-sm ml-2">Select Appointment Date</label>
              <div className="relative">
                <input 
                  type="date"
                  required
                  className="w-full px-8 py-5 bg-white border-2 border-transparent rounded-2xl focus:border-black outline-none transition-all font-medium text-lg shadow-sm"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
              <label className="text-gray-500 font-bold text-sm ml-2">Select Appointment Time</label>
              <select 
                required
                className="w-full px-8 py-5 bg-white border-2 border-transparent rounded-2xl focus:border-black outline-none transition-all font-medium text-lg shadow-sm appearance-none"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              >
                <option value="">Select Time Slot</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
              <label className="text-gray-500 font-bold text-sm ml-2">Write a Message</label>
              <textarea 
                placeholder="Write a Message"
                rows={6}
                className="w-full px-8 py-5 bg-white border-2 border-transparent rounded-2xl focus:border-black outline-none transition-all font-medium text-lg shadow-sm resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2 flex justify-center pt-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-16 py-5 bg-black text-white rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-luxury-gold hover:text-black transition-all shadow-2xl flex items-center gap-4"
              >
                Book Appointment
                <Calendar className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Our Branches Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-gray-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">OUR BRANCHES</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Visit Any of Our 3 Locations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Touch and Magic - Branch 1',
                address: 'Regency lane Gate 3, Amber Tower, Sarkhej Rd, near Gulzar park, Juhapura, Ahmedabad, Gujarat 380055',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.686445470356!2d72.51860887531304!3d23.00041287919313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b282998a98d%3A0x6d6c7c379fdad8121!2sTouch%20and%20Glow%20family%20salon!5e0!3m2!1sen!2sin!4v1708670000000!5m2!1sen!2sin'
              },
              {
                title: 'Touch and Magic - Branch 2',
                address: 'GF-18, Block-A, Seventh Heaven, opp. Al Burooj, Ahmedabad, Gujarat 380055',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.686445470356!2d72.51860887531304!3d23.00041287919313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b282998a98d%3A0x6d6c7c379fdad8121!2sTouch%20and%20Glow%20family%20salon!5e0!3m2!1sen!2sin!4v1708670000000!5m2!1sen!2sin'
              },
              {
                title: 'Touch and Magic - Branch 3',
                address: 'Shop no 06, ALIF APARTMENT, Sarkhej Makarba Rd, Makarba, Ahmedabad, Gujarat 382210',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.686445470356!2d72.51860887531304!3d23.00041287919313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b282998a98d%3A0x6d6c7c379fdad8121!2sTouch%20and%20Glow%20family%20salon!5e0!3m2!1sen!2sin!4v1708670000000!5m2!1sen!2sin'
              }
            ].map((branch, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-luxury-black rounded-[2rem] flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:bg-luxury-gold group-hover:-translate-y-2">
                  <MapPin className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{branch.title}</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Address:</p>
                  <p className="text-gray-500 font-medium leading-relaxed">{branch.address}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {[
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.686445470356!2d72.51860887531304!3d23.00041287919313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b282998a98d%3A0x6d6c7c379fdad8121!2sTouch%20and%20Glow%20family%20salon!5e0!3m2!1sen!2sin!4v1708670000000!5m2!1sen!2sin',
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.686445470356!2d72.51860887531304!3d23.00041287919313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b282998a98d%3A0x6d6c7c379fdad8121!2sTouch%20and%20Glow%20family%20salon!5e0!3m2!1sen!2sin!4v1708670000000!5m2!1sen!2sin',
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.686445470356!2d72.51860887531304!3d23.00041287919313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b282998a98d%3A0x6d6c7c379fdad8121!2sTouch%20and%20Glow%20family%20salon!5e0!3m2!1sen!2sin!4v1708670000000!5m2!1sen!2sin'
            ].map((url, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="rounded-[3rem] overflow-hidden h-[500px] shadow-2xl border border-gray-100"
              >
                <iframe
                  src={url}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import axios from 'axios';

const FloatingButtons: React.FC = () => {
  const phoneNumber = '919016394292'; // your number

  const message = encodeURIComponent(
    'Hello Royal Glow Salon, I would like to inquire about your services.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
const handleCall = async () => {
  try {
    await axios.post("https://cutumer.onrender.com/api/call", {
      phone: phoneNumber,
    });

    alert("Calling you shortly...");
  } catch (err) {
    console.error(err);
    alert("Call failed");
  }
};
  return (
    <>
      {/* CALL BUTTON */}
      {/* <motion.a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-28 right-8 z-50 bg-blue-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Phone className="w-6 h-6 relative z-10" />

        <span className="absolute right-full mr-4 bg-white text-black text-sm font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Call us
        </span>
      </motion.a> */}
      <motion.button
  onClick={handleCall}
  aria-label="Call us"
  className="fixed bottom-28 right-8 z-50 bg-blue-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <Phone className="w-6 h-6" />
</motion.button>

      {/* WHATSAPP BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MessageCircle className="w-6 h-6 relative z-10" />

        <span className="absolute right-full mr-4 bg-white text-black text-sm font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Chat with us
        </span>
      </motion.a>
    </>
  );
};

export default FloatingButtons;
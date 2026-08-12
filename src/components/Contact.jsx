import React from "react";
import { motion } from "framer-motion";
import contactBg from "../assets/contact-bg.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top Line */}
      <div className="absolute top-5 left-6 right-6 md:left-10 md:right-10">
        <div className="border-t border-white/50" />
      </div>

      {/* Contact Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex min-h-[500px] md:min-h-[600px] flex-col items-center justify-center text-center text-white px-6"
      >
        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-10">
          CONTACT
        </h2>

        {/* Email */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl tracking-wide font-light mb-2">
            EMAIL
          </h3>

          <a
            href="mailto:glamlinq@gmail.com"
            className="text-lg md:text-2xl font-light hover:opacity-70 transition"
          >
            glamlinq@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-xl md:text-2xl tracking-wide font-light mb-2">
            PHONE
          </h3>

          <a
            href="tel:+256776241092"
            className="text-lg md:text-2xl font-light hover:opacity-70 transition"
          >
            (256) 776 241 092
            
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
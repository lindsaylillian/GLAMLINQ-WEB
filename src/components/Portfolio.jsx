import { motion } from "framer-motion";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import aboutMain from "../assets/about-main.jpg";
import aboutBg from "../assets/about-bg.jpg";
import makeup from "../assets/makeup.jpg";

const images = [
  service1,
  service2,
  service3,
  aboutMain,
  aboutBg,
  makeup,
];

const Portfolio = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-6xl text-[#111] uppercase">
            Featured Gallery
          </h2>
        </motion.div>

        {/* Gallery */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="
                  w-full
                  h-[500px]
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-105
                "
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;
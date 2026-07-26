import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";


const services = [
  {
    title: "Prom Makeup",
    image: service1,
    description:
      "Perfect for photoshoots and fashion events, we blend unmatched elegance and artistic flair with high-end products.",
  },
  {
    title: "Bridal Makeup",
    image: service2,
    description:
      "From romantic ethereal looks to classic bridal beauty, we create a personalized experience for your special day.",
  },
 
  {
    title: "Special Occasion",
    image: service3,
    description:
      "Whether it's a graduation, birthday, engagement or gala, we create a flawless look that reflects your unique style.",
  },
];

const Services = () => {
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
          <p className="uppercase tracking-[4px] text-gray-500 mb-4">
            Our Services
          </p>

          <h2 className="font-serif text-6xl text-[#111]">
            BEAUTY FOR
            <br />
            EVERY MOMENT
          </h2>
        </motion.div>

        {/* Services */}

       <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="text-center group max-w-[360px] mx-auto"
            >

              
            {/* Service Title */}

<h3 className="font-serif text-3xl mb-8">
  {service.title}
</h3>

{/* Image */}

<div className="overflow-hidden rounded-sm">

  <img
    src={service.image}
    alt={service.title}
    className="
      w-full
      h-[450px]
      object-cover
      transition
      duration-700
      group-hover:scale-105
    "
  />

</div>

{/* Divider */}

<div className="flex justify-center mt-8 mb-8">
  <div className="w-[2px] h-16 bg-gray-300"></div>
</div>

{/* Description */}

<p className="text-gray-600 text-lg leading-8 px-2">
  {service.description}
</p>

            </motion.div>

          ))}

        </div>

        {/* Button */}

        <div className="flex justify-center mt-20">

          <Link
            href="#booking"
            className="
              px-12
              py-5
              border
              border-black
              rounded-full
              uppercase
              tracking-[3px]
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              hover:scale-105
            "
          >
            Book Now
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Services;
import { motion } from "framer-motion";
import storyImage from "../assets/about-story.jpg";

const AboutStory = () => {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={storyImage}
              alt="Professional Makeup Artist"
              className="
                w-full
                max-w-[520px]
                h-[650px]
                object-cover
                shadow-2xl
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[5px] text-[#888] mb-6">
              SERVING CLIENTS | ON-LOCATION
            </p>

            <h2 className="font-serif text-[64px] leading-tight text-[#111] mb-8">
                     LUXURY THAT FINDS YOU
            </h2>

            <p className="text-[#555] text-lg leading-9 mb-8">
            With on-location convenience, we bring the sophistication of luxurious beauty services right to your doorstep. Glam-linq By Lindsay offers carefully customized looks for both individuals and businesses alike.
            </p>

            <button className="
              border
              border-black
              px-10
              py-4
              uppercase
              tracking-[3px]
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
            ">
              Learn More
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;
import { motion } from "framer-motion";
import aboutMain from "../assets/about-main.jpg";
import aboutBg from "../assets/about-bg.jpg";


const About = () => {
  return (
    <section className="bg-[#faf9f7] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[4px] text-lg mb-8 text-[#222]">
              Makeup that's yours truly
            </p>

            <h2 className="font-serif text-[72px] leading-[1.05] text-[#111] mb-10">
              CONNECTING WITH
              <br />
              YOUR ESSENCE
            </h2>

            <p className="text-[#444] text-xl leading-10 max-w-xl">
              We believe in expressing your unique essence regardless of
              the occasion. Whether it's a brand photoshoot or your wedding
              day, we curate experiences where every brushstroke reflects
              your narrative.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            {/* Background Image */}

            <motion.img
              src={aboutBg}
              alt=""
              className="
                w-[400px]
                h-[720px]
                object-cover
                grayscale
                opacity-20
                translate-x-32
              "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />

            {/* Foreground Image */}

            <motion.img
              src={aboutMain}
              alt=""
              className="
                absolute
                w-[350px]
                h-[450px]
                object-cover
                top-50
                left-[-45px]
                shadow-2xl
              "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              viewport={{ once: true }}
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
import { motion } from "framer-motion";

import bookingBg from "../assets/booking-bg.jpg";

const Booking = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}

      <img
        src={bookingBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Booking Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-10
          w-full
          max-w-xl
          mx-6
          rounded-3xl
          bg-white/90
          backdrop-blur-lg
          shadow-2xl
          p-10
        "
      >
        <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-2">
          Glam Linq
        </p>

        <h1 className="font-serif text-5xl mb-2">
          Book Your Session
        </h1>

        <p className="text-gray-600 mb-10">
          Let's begin with a few details about you.
        </p>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-sm uppercase tracking-wider">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm uppercase tracking-wider">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+256..."
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm uppercase tracking-wider">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            className="
              w-full
              py-4
              mt-4
              rounded-full
              bg-black
              text-white
              uppercase
              tracking-[3px]
              hover:bg-gray-800
              transition
            "
          >
            Continue
          </button>

        </form>

      </motion.div>

    </section>
  );
};

export default Booking;
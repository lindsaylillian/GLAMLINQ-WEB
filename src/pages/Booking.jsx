import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import bookingBg from "../assets/booking-bg.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";



export default function Booking() {
  const [step, setStep] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
const sendBooking = async () => {
  try {
    // Send booking to your business email
    await emailjs.send(
      "service_6yisatn",
      "template_emmdjnv",
      formData,
      "5IIWRIuzIytCTAqel"
    );

    // Send confirmation email to the client
    await emailjs.send(
      "service_6yisatn",
      "template_x4mc25s",
      formData,
      "5IIWRIuzIytCTAqel"
    );

    setBookingSuccess(true);

  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",

  service: "",
  location: "",
  date: "",
  time: "",

  skinType: "",
  skinTone: "",
  makeupStyle: "",
  allergies: "",
  notes: "",
  reminder: false,

  photo: null,
});

 const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 150]);
  return (
    <section className="relative min-h-screen">

      {/* Background */}

      <motion.img
  src={bookingBg}
  alt=""
  style={{ y }}
  className="absolute inset-0 w-full h-full object-cover"
/>
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}

      <div className="relative z-10 flex items-center justify-center min-h-screen py-20 px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="
  w-full
  max-w-3xl
  rounded-[32px]
  bg-white/15
  backdrop-blur-2xl
  border
  border-white/30
  shadow-[0_20px_60px_rgba(0,0,0,0.25)]
  p-12
"
        >
          <div
  className="
  absolute
  -top-20
  -right-20
  w-52
  h-52
  rounded-full
  bg-pink-200/20
  blur-3xl
  "
></div>
<div
  className="
  absolute
  -bottom-20
  -left-20
  w-60
  h-60
  rounded-full
  bg-yellow-100/20
  blur-3xl
  "
></div>

          {/* Heading */}

          <p className="uppercase tracking-[5px] text-sm text-white/80">
            The Glam Linq
          </p>

          <h1 className="font-serif text-5xl mt-2">
            Book Your Session
          </h1>

          <p className="text-white/80 mt-3 mb-10">
            Let's begin by getting to know you.
          </p>

          {/* Progress */}

          <div className="flex justify-between items-center mb-12">

  {[1,2,3,4].map((number)=>(
    <div
      key={number}
      className="flex flex-col items-center flex-1"
    >

      <div
        className={`
          w-11
          h-11
          rounded-full
          flex
          items-center
          justify-center
          font-semibold
          transition

          ${
            step >= number
            ? "bg-black text-white"
            : "bg-white border border-gray-300"
          }
        `}
      >
        {number}
      </div>

      <p className="text-xs mt-2">

        {
          [
            "Personal",
            "Appointment",
            "Beauty",
            "Review"
          ][number-1]
        }

      </p>

    </div>
  ))}

</div>

         {/* STEP 1 */}
<AnimatePresence mode="wait">  

{step === 1 && (
  <motion.div
      key="step1"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.4 }}
    >

  <form className="space-y-6">

    <div>
      <label>Full Name</label>
      <input
        type="text"
        className="
w-full
rounded-xl
bg-white/30
backdrop-blur-md
border
border-white/40
px-5
py-4
placeholder:text-gray-500
focus:outline-none
focus:border-black
transition
"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />
    </div>

    <div>
      <label>Phone Number</label>
      <input
        type="tel"
        className="
w-full
rounded-xl
bg-white/30
backdrop-blur-md
border
border-white/40
px-5
py-4
placeholder:text-gray-500
focus:outline-none
focus:border-black
transition
"
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
      />
    </div>

    <div>
      <label>Email Address</label>
      <input
        type="email"
        className="
w-full
rounded-xl
bg-white/30
backdrop-blur-md
border
border-white/40
px-5
py-4
placeholder:text-gray-500
focus:outline-none
focus:border-black
transition
"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />
    </div>

    <div className="flex justify-end">
      <button
        type="button"
        onClick={() => setStep(2)}
        className="
px-10
py-4
rounded-full
bg-black/80
backdrop-blur-lg
text-white
hover:bg-black
transition-all
duration-300
"
      >
        Continue →
      </button>
    </div>

  </form>
  </motion.div>
)}
{/* STEP 2 */}

{step === 2 && (
   <motion.div
      key="step2"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.4 }}
    >
  

  <form className="space-y-6">

    <div>
      <label className="block mb-2 font-medium">
        Select Service
      </label>

      <select
        className="
w-full
rounded-xl
bg-white/30
backdrop-blur-md
border
border-white/40
px-5
py-4
placeholder:text-gray-500
focus:outline-none
focus:border-black
transition
"
        value={formData.service}
        onChange={(e) =>
          setFormData({
            ...formData,
            service: e.target.value,
          })
        }
      >
        <option value="">Choose a service</option>
        <option>Bridal Makeup</option>
        <option>Casual Makeup</option>
        <option>Prom Makeup</option>
        <option>Special Occasion Makeup</option>
        <option>Photoshoot Makeup</option>
        <option>Makeup Lessons</option>

      </select>
    </div>

    <div>
      <label className="block mb-2 font-medium">
        Appointment Date
      </label>

      <input
        type="date"
        className="
w-full
rounded-xl
bg-white/30
backdrop-blur-md
border
border-white/40
px-5
py-4
placeholder:text-gray-500
focus:outline-none
focus:border-black
transition
"
        value={formData.date}
        onChange={(e) =>
          setFormData({
            ...formData,
            date: e.target.value,
          })
        }
      />
    </div>

  <div>
  <label className="block mb-2 font-medium">
    Preferred Time
  </label>

  <input
    type="time"
    min="06:00"
    max="19:00"
    className="
w-full
rounded-xl
bg-white/30
backdrop-blur-md
border
border-white/40
px-5
py-4
placeholder:text-gray-500
focus:outline-none
focus:border-black
transition
"
    value={formData.time}
    onChange={(e) =>
      setFormData({
        ...formData,
        time: e.target.value,
      })
    }
  />
</div>

    <div>
      <label className="block mb-2 font-medium">
        Appointment Location
      </label>

      <input
        type="text"
        placeholder="Enter your location"
        className="
w-full
rounded-xl
bg-white/30
backdrop-blur-md
border
border-white/40
px-5
py-4
placeholder:text-gray-500
focus:outline-none
focus:border-black
transition
"
        value={formData.location}
        onChange={(e) =>
          setFormData({
            ...formData,
            location: e.target.value,
          })
        }
      />
    </div>

    <div className="flex justify-between pt-4">

      <button
        type="button"
        onClick={() => setStep(1)}
        className="
px-8
py-3
rounded-full
border
border-black
hover:bg-black
hover:text-white
transition
"
      >
        Back
      </button>

      <button
        type="button"
        onClick={() => setStep(3)}
        className="
px-8
py-3
rounded-full
bg-black
text-white
hover:bg-gray-800
transition
"
      >
        Continue →
      </button>

    </div>

  </form>

</motion.div>

      )}

{/* STEP 3 */}

{step === 3 && (
  <form className="space-y-6">

    {/* Skin Type */}

    <div>
      <label className="block mb-2 font-medium text-white">
        Skin Type
      </label>

      <select
        className="w-full rounded-xl bg-white/20 border border-white/40 text-white px-5 py-4 backdrop-blur-md"
        value={formData.skinType}
        onChange={(e) =>
          setFormData({
            ...formData,
            skinType: e.target.value,
          })
        }
      >
        <option value="" className="text-black">
          Select Skin Type
        </option>

        <option className="text-black">
          Oily
        </option>

        <option className="text-black">
          Dry
        </option>

        <option className="text-black">
          Combination
        </option>

        <option className="text-black">
          Normal
        </option>

        <option className="text-black">
          Sensitive
        </option>

      </select>
    </div>

    {/* Skin Tone */}

    <div>
      <label className="block mb-2 font-medium text-white">
        Skin Tone
      </label>

      <input
        type="text"
        placeholder="e.g. Fair, Medium, Deep"
        className="w-full rounded-xl bg-white/20 border border-white/40 text-white placeholder:text-white/60 px-5 py-4"
        value={formData.skinTone}
        onChange={(e) =>
          setFormData({
            ...formData,
            skinTone: e.target.value,
          })
        }
      />
    </div>

    {/* Makeup Style */}

    <div>
      <label className="block mb-2 font-medium text-white">
        Preferred Makeup Style
      </label>

      <select
        className="w-full rounded-xl bg-white/20 border border-white/40 text-white px-5 py-4"
        value={formData.makeupStyle}
        onChange={(e) =>
          setFormData({
            ...formData,
            makeupStyle: e.target.value,
          })
        }
      >
        <option value="" className="text-black">
          Select Style
        </option>

        <option className="text-black">
          Soft Glam
        </option>

        <option className="text-black">
          Full Glam
        </option>

        <option className="text-black">
          Natural
        </option>

        <option className="text-black">
          Bridal
        </option>

        <option className="text-black">
          Editorial
        </option>

      </select>
    </div>

    {/* Allergies */}

    <div>
      <label className="block mb-2 font-medium text-white">
        Allergies / Skin Sensitivities
      </label>

      <textarea
        rows="3"
        className="w-full rounded-xl bg-white/20 border border-white/40 text-white placeholder:text-white/60 px-5 py-4"
        placeholder="Tell us about any allergies..."
        value={formData.allergies}
        onChange={(e) =>
          setFormData({
            ...formData,
            allergies: e.target.value,
          })
        }
      />
    </div>

    {/* Event Details */}

    <div>
      <label className="block mb-2 font-medium text-white">
        Tell us about your event
      </label>

      <textarea
        rows="4"
        className="w-full rounded-xl bg-white/20 border border-white/40 text-white placeholder:text-white/60 px-5 py-4"
        placeholder="Wedding, graduation, birthday, photoshoot..."
        value={formData.notes}
        onChange={(e) =>
          setFormData({
            ...formData,
            notes: e.target.value,
          })
        }
      />
    </div>

    {/* Inspiration Photo */}

    <div>
      <label className="block mb-2 font-medium text-white">
        Upload Inspiration Photo
      </label>

      <input
        type="file"
        accept="image/*"
        className="w-full text-white"
      />
    </div>

    <div className="flex justify-between mt-10">

      <button
        type="button"
        onClick={() => setStep(2)}
        className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setStep(4)}
        className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Continue →
      </button>

    </div>

  </form>
)}

{/* STEP 4 */}

{step === 4 && (
  <div className="space-y-8">

    <h2 className="text-3xl font-serif text-white">
      Confirmation
    </h2>

    <div className="bg-white/10 rounded-2xl p-6 space-y-4 text-white">

      <div>
        <strong>Name:</strong> {formData.name}
      </div>

      <div>
        <strong>Phone:</strong> {formData.phone}
      </div>

      <div>
        <strong>Email:</strong> {formData.email}
      </div>

      <div>
        <strong>Service:</strong> {formData.service}
      </div>

      <div>
        <strong>Date:</strong> {formData.date}
      </div>

      <div>
        <strong>Time:</strong> {formData.time}
      </div>

      <div>
        <strong>Location:</strong> {formData.location}
      </div>

      <div>
        <strong>Skin Type:</strong> {formData.skinType}
      </div>

      <div>
        <strong>Skin Tone:</strong> {formData.skinTone}
      </div>

      <div>
        <strong>Preferred Style:</strong> {formData.makeupStyle}
      </div>

      <div>
        <strong>Allergies:</strong> {formData.allergies || "None"}
      </div>

      <div>
        <strong>Event Details:</strong> {formData.notes}
      </div>

    </div>

    <div className="flex justify-between">

      <button
        type="button"
        onClick={() => setStep(3)}
        className="border border-white text-white px-8 py-3 rounded-full"
      >
        ← Back
      </button>

      <button
        type="submit"
        onClick={() => setBookingSuccess(true)}
        className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Confirm Booking
      </button>

    </div>

  </div>
)}


</AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
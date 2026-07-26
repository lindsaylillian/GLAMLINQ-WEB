import { useState } from "react";
import "./FAQ.css";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "HOW FAR IN ADVANCE SHOULD I BOOK MY APPOINTMENT?",
    answer:
      "It's always best to book as soon as possible to secure your preferred date. Bridal appointments are typically booked 6–12 months in advance, while other appointments can usually be booked several weeks ahead.",
  },
  {
    question: "WHAT IS THE BOOKING PROCESS?",
    answer:
      "Submit your booking request through the booking form. Once your preferred date is confirmed, you'll receive a confirmation email with pricing and payment details. A deposit is required to officially reserve your appointment.",
  },
  {
    question: "DO YOU OFFER MAKEUP TRIALS?",
    answer:
      "Yes! Bridal makeup trials are available and highly recommended. Trials allow us to perfect your desired look before your special day.",
  },
  {
    question: "DO YOU TRAVEL TO MY LOCATION?",
    answer:
      "Yes. We offer both studio and mobile makeup services. Travel fees may apply depending on your location.",
  },
  {
    question: "HOW LONG DOES A MAKEUP SESSION TAKE?",
    answer:
      "A standard makeup session takes approximately 1–2 hours depending on the chosen service.",
  },
  {
    question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
    answer:
      "We accept Mobile Money, bank transfers, and cash. Payment instructions are provided after booking confirmation.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        <h2 className="faq-title">
          FREQUENTLY
          <br />
          ASKED QUESTIONS
        </h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <FiChevronDown
  className={`faq-icon ${
    activeIndex === index ? "rotate" : ""
  }`}
/>
              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
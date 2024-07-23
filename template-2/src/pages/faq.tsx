import { useState } from "react";
import TsParticles from "../components/ts-particles";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Freshville and surrounding areas. Contact us to see if we cover your location.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use eco-friendly and non-toxic cleaning products to ensure the safety of your family and pets.",
  },
  {
    question: "Can I customize my cleaning plan?",
    answer:
      "Absolutely! We offer customizable cleaning plans to fit your specific needs and preferences.",
  },
  {
    question: "How do I book a cleaning service?",
    answer:
      "You can easily book a cleaning service through our website's booking form or by contacting us via email or phone. We'll help you schedule a convenient time for your cleaning.",
  },
  {
    question: "What should I do before the cleaning team arrives?",
    answer:
      "To ensure the most effective cleaning, we recommend tidying up any personal items and clutter. This allows our team to focus on deep cleaning your home.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, you do not need to be home during the cleaning. Many of our clients provide us with access instructions, such as a key or door code, so we can perform the cleaning while they are away.",
  },
  // {
  //   question: "What if I’m not satisfied with the cleaning service?",
  //   answer:
  //     "Your satisfaction is our top priority. If you’re not satisfied with any aspect of our service, please contact us within 24 hours, and we will address your concerns promptly.",
  // },
  // {
  //   question: "Are your cleaning staff background checked?",
  //   answer:
  //     "Yes, all of our cleaning staff undergo thorough background checks and are fully trained to ensure they meet our high standards of service.",
  // },
  // {
  //   question: "What payment methods do you accept?",
  //   answer:
  //     "We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Payment details will be provided once the service is booked.",
  // },
  // {
  //   question: "How can I reschedule or cancel a cleaning appointment?",
  //   answer:
  //     "To reschedule or cancel a cleaning appointment, please contact us at least 24 hours in advance. We will do our best to accommodate your needs.",
  // },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="absolute overflow-hidden w-full h-full">
        {/* Particles Effect */}
        <TsParticles />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-hotpink relative font-londrina">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 relative font-news">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-skyblue rounded-md">
            <button
              className="w-full p-4 text-left flex justify-between items-center focus:outline-none bg-white transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-slate-100 text-hotpink">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

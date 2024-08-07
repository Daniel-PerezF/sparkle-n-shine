import { useEffect } from "react";
import TsParticles from "../components/ts-particles";
import {
  FaBroom,
  FaHandSparkles,
  FaTruckMoving,
  FaHammer,
  FaStar,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    title: "Regular House Cleaning",
    description:
      "Weekly, bi-weekly, or monthly cleaning schedules. Dusting, vacuuming, mopping, and sanitizing all living areas.",
    icon: <FaBroom className="text-4xl mb-4 text-blue-300" />,
  },
  {
    title: "Deep Cleaning",
    description:
      "Thorough cleaning of every nook and cranny. Detailed attention to baseboards, vents, blinds, and more.",
    icon: <FaHandSparkles className="text-4xl mb-4 text-green-300" />,
  },
  {
    title: "Move-In/Move-Out Cleaning",
    description:
      "Comprehensive cleaning to make your move stress-free. Ensuring every room is spotless and ready for new occupants.",
    icon: <FaTruckMoving className="text-4xl mb-4 text-yellow-200" />,
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Removing dust and debris after renovations. Polishing surfaces and making your new space shine.",
    icon: <FaHammer className="text-4xl mb-4 text-rose-300" />,
  },
  {
    title: "Specialty Cleaning Services",
    description:
      "Carpet and upholstery cleaning. Window cleaning, inside and out.",
    icon: <FaStar className="text-4xl mb-4 text-purple-300" />,
  },
  {
    title: "Office Cleaning",
    description:
      "Customized cleaning plans for offices and commercial spaces. Ensuring a clean and healthy work environment for employees and clients.",
    icon: <FaBuilding className="text-4xl mb-4 text-orange-300" />,
  },
];

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <div className="absolute overflow-hidden">
        <TsParticles />
      </div>
      <main className="container mx-auto px-4 py-2 font-londrina text-hotpink relative">
        <section className="py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full p-4 bg-white rounded-md shadow-md"
              >
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-4 font-londrina">
                    {service.title}
                  </h3>
                  {service.icon}
                </div>
                <p className="font-news">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full flex justify-center mb-10">
          <a
            className="px-6 py-3 w-1/2 md:w-1/5 text-center bg-skyblue text-white font-semibold rounded-md hover:bg-[#0CBCE9] hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
            href="/contact"
          >
            Book Now
          </a>
        </div>
      </main>
    </div>
  );
};

export default Services;

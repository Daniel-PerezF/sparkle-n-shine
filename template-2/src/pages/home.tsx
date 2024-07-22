import {
  FaBroom,
  FaHandSparkles,
  FaTruckMoving,
  FaHammer,
  FaStar,
  FaBuilding,
} from "react-icons/fa";
import TsParticles from "../components/ts-particles";

const services = [
  {
    title: "Regular House Cleaning",
    description:
      "Weekly, bi-weekly, or monthly cleaning schedules. Dusting, vacuuming, mopping, and sanitizing all living areas.",
    icon: FaBroom,
    iconClass: "text-blue-300",
  },
  {
    title: "Deep Cleaning",
    description:
      "Thorough cleaning of every nook and cranny. Detailed attention to baseboards, vents, blinds, and more.",
    icon: FaHandSparkles,
    iconClass: "text-green-300",
  },
  {
    title: "Move-In/Move-Out Cleaning",
    description:
      "Comprehensive cleaning to make your move stress-free. Ensuring every room is spotless and ready for new occupants.",
    icon: FaTruckMoving,
    iconClass: "text-yellow-200",
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Removing dust and debris after renovations. Polishing surfaces and making your new space shine.",
    icon: FaHammer,
    iconClass: "text-rose-300",
  },
  {
    title: "Specialty Cleaning Services",
    description:
      "Carpet and upholstery cleaning. Window cleaning, inside and out.",
    icon: FaStar,
    iconClass: "text-purple-300",
  },
  {
    title: "Office Cleaning",
    description:
      "Customized cleaning plans for offices and commercial spaces. Ensuring a clean and healthy work environment for employees and clients.",
    icon: FaBuilding,
    iconClass: "text-orange-300",
  },
];

const reviews = [
  {
    text: '"Sparkle & Shine Cleaning Services transformed my home! Their attention to detail and use of eco-friendly products really stood out. I couldn\'t be happier with the results and the friendly team that came to clean. Highly recommend!"',
    author: "- Emma S.",
  },
  {
    text: '"We recently had Sparkle & Shine handle a deep clean of our office, and the difference is night and day. The team was professional, efficient, and left our workspace spotless. We\'ll definitely be using their services again!"',
    author: "- John R.",
  },
  {
    text: '"I was impressed with the Move-In/Move-Out cleaning service from Sparkle & Shine. They made the transition into our new home smooth and stress-free. The house looked immaculate when we arrived. Great job!"',
    author: "- Lisa M.",
  },
  {
    text: '"Post-construction cleaning was a breeze with Sparkle & Shine. They handled all the dust and debris left from our renovation, and our space looks brand new. Their attention to detail was exceptional!"',
    author: "- Alex T.",
  },
  {
    text: '"I\'ve tried several cleaning services over the years, but Sparkle & Shine is by far the best. Their team is reliable, thorough, and very accommodating with my specific needs. They have earned a loyal customer in me."',
    author: "- Natalie W.",
  },
  {
    text: '"The Specialty Cleaning Services provided by Sparkle & Shine were top-notch. They cleaned our carpets and upholstery to perfection. The entire process was smooth and hassle-free. Highly recommend for anyone needing detailed cleaning!"',
    author: "- Michael B.",
  },
  {
    text: '"I\'ve used Sparkle & Shine for regular house cleaning and have always been impressed with their service. The staff is friendly, professional, and always does an excellent job. My home feels fresh and clean every time!"',
    author: "- Sarah K.",
  },
  {
    text: '"Sparkle & Shine made a significant impact on our office environment. Their customized cleaning plan worked perfectly for us, and the cleanliness has noticeably improved. Their service is worth every penny!"',
    author: "- David C.",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between text-white">
      <div className="absolute overflow-hidden">
        {/* Particles Effect */}
        <TsParticles />
      </div>
      <main className="flex-grow z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-hotpink text-white font-rubik">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Sparkle n Shine
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Our mission is to bring a touch of brilliance to your home,
            providing exceptional cleaning services that make your space feel
            refreshed and rejuvenated.
          </p>
          <a
            className="px-6 py-3 bg-skyblue text-white font-semibold rounded-md hover:bg-[#0CBCE9] hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
            href="/contact"
          >
            Book Now
          </a>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-hotpink font-londrina">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 font-news">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full p-4 bg-hotpink rounded-md shadow-md"
              >
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-4 font-londrina">
                    {service.title}
                  </h3>
                  <service.icon
                    className={`text-4xl mb-4 ${service.iconClass}`}
                  />
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 px-4 bg-hotpink">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-londrina">
            What Our Clients Say
          </h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-8 font-news">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0"
                >
                  <p className="italic">{review.text}</p>
                  <p className="mt-4 font-semibold text-skyblue">
                    {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

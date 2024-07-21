import {
  FaBroom,
  FaHandSparkles,
  FaTruckMoving,
  FaHammer,
  FaStar,
  FaBuilding,
} from "react-icons/fa";
import TsParticles from "../components/ts-particles";
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
          <h1 className="text-4xl md:text-6xl font-bold text- mb-6">
            Welcome to Sparkle n Shine
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Our mission is to bring a touch of brilliance to your home,
            providing exceptional cleaning services that make your space feel
            refreshed and rejuvenated.
          </p>
          <a
            className="px-6 py-3 bg-skyblue text-white font-semibold rounded-md hover:bg-orange-500 transition duration-300"
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
            <div className="w-full p-4 bg-hotpink rounded-md shadow-md">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold mb-4 font-londrina">
                  Regular House Cleaning
                </h3>
                <FaBroom className="text-4xl mb-4 text-blue-300" />
              </div>
              <p>
                Weekly, bi-weekly, or monthly cleaning schedules. Dusting,
                vacuuming, mopping, and sanitizing all living areas.
              </p>
            </div>
            <div className="w-full p-4 bg-hotpink rounded-md shadow-md">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold mb-4">Deep Cleaning</h3>
                <FaHandSparkles className="text-4xl mb-4 text-green-300" />
              </div>
              <p>
                Thorough cleaning of every nook and cranny. Detailed attention
                to baseboards, vents, blinds, and more.
              </p>
            </div>
            <div className="w-full p-4 bg-hotpink rounded-md shadow-md">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold mb-4">
                  Move-In/Move-Out Cleaning
                </h3>
                <FaTruckMoving className="text-4xl mb-4 text-yellow-200" />
              </div>
              <p>
                Comprehensive cleaning to make your move stress-free. Ensuring
                every room is spotless and ready for new occupants.
              </p>
            </div>
            <div className="w-full p-4 bg-hotpink rounded-md shadow-md">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold mb-4">
                  Post-Construction Cleaning
                </h3>
                <FaHammer className="text-4xl mb-4 text-rose-300" />
              </div>
              <p>
                Removing dust and debris after renovations. Polishing surfaces
                and making your new space shine.
              </p>
            </div>
            <div className="w-full p-4 bg-hotpink rounded-md shadow-md">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold mb-4">
                  Specialty Cleaning Services
                </h3>
                <FaStar className="text-4xl mb-4 text-purple-300" />
              </div>
              <p>
                Carpet and upholstery cleaning. Window cleaning, inside and out.
              </p>
            </div>
            <div className="w-full p-4 bg-hotpink rounded-md shadow-md">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold mb-4">Office Cleaning</h3>
                <FaBuilding className="text-4xl mb-4 text-orange-300" />
              </div>
              <p>
                Customized cleaning plans for offices and commercial spaces.
                Ensuring a clean and healthy work environment for employees and
                clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-hotpink ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-londrina">
            What Our Clients Say
          </h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-8 font-news">
              <div className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0">
                <p className="italic">
                  "Sparkle & Shine Cleaning Services transformed my home! Their
                  attention to detail and use of eco-friendly products really
                  stood out. I couldn't be happier with the results and the
                  friendly team that came to clean. Highly recommend!"
                </p>
                <p className="mt-4 font-semibold">- Emma S.</p>
              </div>
              <div className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0">
                <p className="italic">
                  "We recently had Sparkle & Shine handle a deep clean of our
                  office, and the difference is night and day. The team was
                  professional, efficient, and left our workspace spotless.
                  We'll definitely be using their services again!"
                </p>
                <p className="mt-4 font-semibold">- John R.</p>
              </div>
              <div className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0">
                <p className="italic">
                  "I was impressed with the Move-In/Move-Out cleaning service
                  from Sparkle & Shine. They made the transition into our new
                  home smooth and stress-free. The house looked immaculate when
                  we arrived. Great job!"
                </p>
                <p className="mt-4 font-semibold">- Lisa M.</p>
              </div>
              <div className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0">
                <p className="italic">
                  "Post-construction cleaning was a breeze with Sparkle & Shine.
                  They handled all the dust and debris left from our renovation,
                  and our space looks brand new. Their attention to detail was
                  exceptional!"
                </p>
                <p className="mt-4 font-semibold">- Alex T.</p>
              </div>
              <div className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0">
                <p className="italic">
                  "I've tried several cleaning services over the years, but
                  Sparkle & Shine is by far the best. Their team is reliable,
                  thorough, and very accommodating with my specific needs. They
                  have earned a loyal customer in me."
                </p>
                <p className="mt-4 font-semibold">- Natalie W.</p>
              </div>
              <div className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0">
                <p className="italic">
                  "The Specialty Cleaning Services provided by Sparkle & Shine
                  were top-notch. They cleaned our carpets and upholstery to
                  perfection. The entire process was smooth and hassle-free.
                  Highly recommend for anyone needing detailed cleaning!"
                </p>
                <p className="mt-4 font-semibold">- Michael B.</p>
              </div>
              <div className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0">
                <p className="italic">
                  "I've used Sparkle & Shine for regular house cleaning and have
                  always been impressed with their service. The staff is
                  friendly, professional, and always does an excellent job. My
                  home feels fresh and clean every time!"
                </p>
                <p className="mt-4 font-semibold">- Sarah K.</p>
              </div>
              <div className="w-80 p-4 bg-white text-hotpink rounded-md shadow-md flex-shrink-0">
                <p className="italic">
                  "Sparkle & Shine made a significant impact on our office
                  environment. Their customized cleaning plan worked perfectly
                  for us, and the cleanliness has noticeably improved. Their
                  service is worth every penny!"
                </p>
                <p className="mt-4 font-semibold">- David C.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

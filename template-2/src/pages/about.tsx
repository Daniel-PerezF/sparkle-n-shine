import { useEffect } from "react";
import TsParticles from "../components/ts-particles";

const teamMembers = [
  {
    name: "Jane Smith",
    role: "Lead Cleaner",
    description:
      "Jane has over 10 years of experience in the cleaning industry, ensuring every space is spotless.",
    image: "/avatar-1.png",
  },
  {
    name: "Jon Doe",
    role: "Cleaning Specialist",
    description:
      "Jon specializes in deep cleaning and is known for his meticulous attention to detail.",
    image: "/avatar-2.png",
  },
  {
    name: "Michael Brown",
    role: "Cleaning Technician",
    description:
      "Michael is skilled in using advanced cleaning technologies and techniques to achieve the best results.",
    image: "/avatar-3.png",
  },
  {
    name: "Emily Davis",
    role: "Customer Service",
    description:
      "Emily handles all customer inquiries and ensures a smooth and satisfying client experience.",
    image: "/avatar-4.png",
  },
];

const AboutMePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <div className="absolute overflow-hidden">
        <TsParticles />
      </div>
      {/* Main Content */}
      <main className="relative w-full">
        <section className="py-10 bg-hotpink text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-londrina">
            About Sparkle & Shine Cleaning Services
          </h2>
          <div className="w-full flex justify-center pb-10">
            <div className="flex flex-col font-news">
              <div>
                <img
                  src="/sparkle-white.png"
                  alt="Business Team"
                  className="rounded-full w-40 h-40 mx-auto mb-6"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-center">
                  Sparkle & Shine Cleaning Services is dedicated to transforming
                  homes into spotless sanctuaries. With a team of highly trained
                  and reliable professionals, we offer comprehensive cleaning
                  solutions tailored to meet your specific needs. Whether it's a
                  one-time deep clean or a regular maintenance schedule, we
                  ensure that every corner of your home gleams with perfection.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-2xl font-bold text-center mb-6 text-hotpink font-londrina">
            Meet the Team
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-3/4 p-4">
                <div className="bg-white shadow-md rounded-lg p-6 text-center h-full flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-lg">{member.role}</p>
                  <p className="text-sm mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutMePage;

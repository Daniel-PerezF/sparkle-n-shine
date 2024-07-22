import TsParticles from "../components/ts-particles";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen text-hotpink">
      <div className="absolute overflow-hidden">
        {/* Particles Effect */}
        <TsParticles />
      </div>
      <main className="container mx-auto px-4 py-2">
        <section className="py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-londrina">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-londrina">
            <div className="bg-white relative rounded-md p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Sparkle n Shine</h3>
              <p className="text-lg leading-relaxed font-news">
                Address: 56 Clean Street, Freshville, CA 90210
              </p>
              <p className="text-lg leading-relaxed font-news">
                Phone: (123) 456-7890
              </p>
              <p className="text-lg leading-relaxed font-news">
                contact@sparkleshine.com
              </p>
            </div>
            <div>
              <form className="bg-white relative rounded-md p-6 shadow-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 rounded-md bg-[#FFD6EE] focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 rounded-md bg-[#FFD6EE] focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 rounded-md bg-[#FFD6EE] focus:outline-none focus:ring focus:border-blue-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-skyblue text-white py-2 px-4 hover:bg-[#0CBCE9] hover:scale-105 hover:shadow-lg duration-300 ease-in-out rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;

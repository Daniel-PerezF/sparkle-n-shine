import { FaFacebookF, FaInstagram, FaYelp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-hotpink pb-6 pt-3 relative bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/sparkle-hotpink.png"
            alt="company logo"
            className="w-[65px] mb-2 md:mb-0 md:mr-4"
          />
          <p className="text-sm">
            &copy; 2024 Sparkle n Shine. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-skyblue ease-in-out duration-300"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-skyblue ease-in-out duration-300"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Yelp"
            className="hover:text-skyblue ease-in-out duration-300"
          >
            <FaYelp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

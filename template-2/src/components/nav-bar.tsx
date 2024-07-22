import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";

const NavBar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [navStyle, setNavStyle] = useState({
    navColor: "bg-hotpink",
    textColor: "text-white",
    logoSrc: "/sparkle-white.png",
    hamburgerColor: "#fff",
  });
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const handleNavLinkClick = (path: string) => {
    navigate(path);
    setNav(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavStyle({
        navColor: "bg-white shadow-lg",
        textColor: "text-hotpink",
        logoSrc: "/sparkle-hotpink.png",
        hamburgerColor: "hotpink",
      });
    } else {
      setNavStyle({
        navColor: "bg-[#FF5CAD]",
        textColor: "text-white",
        logoSrc: "/sparkle-white.png",
        hamburgerColor: "#fff",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 text-xl leading-10 px-4 py-2 transition-all font-londrina duration-500 ${navStyle.navColor} ${navStyle.textColor}`}
    >
      <div className="mx-auto flex justify-between items-end">
        <div className="flex items-center">
          <img
            src={navStyle.logoSrc}
            alt="company logo"
            className="w-[70px] cursor-pointer hover:scale-110 ease-in-out duration-300"
            onClick={() => handleNavLinkClick("/")}
          />
        </div>
        <div className="md:hidden">
          <Hamburger
            toggled={nav}
            toggle={setNav}
            size={24}
            color={navStyle.hamburgerColor}
          />
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavLinkClick(link.path)}
              className="hover:text-skyblue duration-300 ease-in-out"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden md:hidden"
          >
            <div className="relative my-2">
              <nav>
                <ul className="px-2 space-y-2">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className="cursor-pointer hover:text-skyblue ease-in-out duration-300 "
                      onClick={() => handleNavLinkClick(link.path)}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;

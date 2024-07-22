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
            className="hover:text-skyblue  ease-in-out duration-300 "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.63h3.128V8.413c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.59l-.467 3.63h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-skyblue  ease-in-out duration-300 "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.924 4.924 0 00-8.388 4.482 13.978 13.978 0 01-10.15-5.146 4.924 4.924 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.053 2.282 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.923 4.923 0 004.6 3.417A9.874 9.874 0 010 21.539 13.94 13.94 0 007.548 24c9.142 0 14.307-7.721 14.307-14.426 0-.22-.005-.438-.014-.653A10.229 10.229 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-skyblue  ease-in-out duration-300 "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.992 0H4.008C1.79 0 0 1.79 0 4.008v15.984C0 22.21 1.79 24 4.008 24h15.984C22.21 24 24 22.21 24 19.992V4.008C24 1.79 22.21 0 19.992 0zM7.123 20.452H3.666V9.138h3.457v11.314zm-1.731-12.887c-1.105 0-2-.896-2-2 0-1.104.895-2 2-2s2 .896 2 2c0 1.104-.895 2-2 2zm15.064 12.887h-3.457v-5.771c0-1.373-.024-3.137-1.911-3.137-1.911 0-2.205 1.494-2.205 3.035v5.873H9.425V9.138h3.319v1.547h.047c.462-.873 1.593-1.792 3.281-1.792 3.508 0 4.151 2.31 4.151 5.314v6.245z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

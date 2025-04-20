import { FaYoutube, FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaComments } from "react-icons/fa";
import chaicode from "../assets/chaicode-white.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left section */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <img src={chaicode} alt="ChaiCode Logo - Home for programmers" className="h-10" />
          </div>
          <p className="mt-2 text-gray-400">Home for programmers</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-gray-400">
            <a className="transition transform hover:-translate-y-1 hover:text-white" href="https://www.youtube.com/@chaiaurcode" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
               <FaYoutube />
            </a>
            <a className="transition transform hover:-translate-y-1 hover:text-white" href="https://www.instagram.com/hiteshchoudharyofficial/?hl=en" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer">
               <FaInstagram />
            </a>
            <a className="transition transform hover:-translate-y-1 hover:text-white" href="https://github.com/hiteshchoudhary" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a className="transition transform hover:-translate-y-1 hover:text-white" href="https://x.com/hiteshdotcom" aria-label="X Profile" target="_blank" rel="noopener noreferrer">
               <FaTwitter />
            </a>
            <a className="transition transform hover:-translate-y-1 hover:text-white" href="https://www.linkedin.com/in/hiteshchoudhary/" aria-label="Linkdln Profile" target="_blank" rel="noopener noreferrer">
               <FaLinkedin />
            </a>
            <a className="transition transform hover:-translate-y-1 hover:text-white" href="https://discord.com/invite/WDrH3zuWFb" aria-label="We Write Code Discord" target="_blank" rel="noopener noreferrer">
               <FaComments />
            </a>  
          </div>

          <p className="text-sm mt-6 text-gray-500">
            © 2025 ChaiCode. All rights reserved.
          </p>
        </div>

        {/* Right section */}
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition-colors duration-200" href="https://courses.chaicode.com/learn" rel="noopener noreferrer">Courses</a></li>
              <li><a className="hover:text-white transition-colors duration-200" href="https://courses.chaicode.com/learn/view-all?show=batch&type=17" rel="noopener noreferrer">Cohort</a></li>
              <li><a className="hover:text-white transition-colors duration-200" href="https://courses.chaicode.com/learn/batch/about?bundleId=226894" rel="noopener noreferrer">Coding Hero</a></li>
              <li><a className="hover:text-white transition-colors duration-200" href="https://freeapi.app/" rel="noopener noreferrer">FreeAPI</a></li>
              <li><a className="hover:text-white transition-colors duration-200" href="https://masterji.co" rel="noopener noreferrer">Masterji</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition-colors duration-200" href="https://www.chaicode.com/docs" rel="noopener noreferrer">Docs</a></li>
              <li><a className="hover:text-white transition-colors duration-200" href="https://www.chaicode.com/terms-of-services" rel="noopener noreferrer">Terms of Service</a></li>
              <li><a className="hover:text-white transition-colors duration-200" href="https://www.chaicode.com/pricing-policy" rel="noopener noreferrer">Pricing Policy</a></li>
              <li><a className="hover:text-white transition-colors duration-200" href="https://www.chaicode.com/refund-policy" rel="noopener noreferrer">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[180px] font-bold text-center mt-16 text-transparent bg-clip-text bg-gradient-to-t from-orange-700 to-orange-500 opacity-20">
        CHAICODE
      </div>
    </footer>
  );
};

export default Footer;
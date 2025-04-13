// export default function Footer(){
//   return (
//     <div>
//     </div>
//   )
// }


import { FaYoutube, FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaComments } from "react-icons/fa";
import chaicode from "../assets/chaicode-white.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left section */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <img src={chaicode} alt="ChaiCode Logo" className="w-32  h-10" />
          </div>
          <p className="mt-2 text-gray-400">Home for programmers</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-gray-400">
            <FaYoutube />
            <FaInstagram />
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
            <FaComments />
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
              <li><a href="#">Courses</a></li>
              <li><a href="#">Cohort</a></li>
              <li><a href="#">Coding Hero</a></li>
              <li><a href="#">FreeAPI</a></li>
              <li><a href="#">Masterji</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Docs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Pricing Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="text-[18vw] md:text-[180px] font-bold text-center mt-16 text-transparent bg-clip-text bg-gradient-to-t from-orange-700 to-orange-500 opacity-20">
        CHAICODE
      </div>
    </footer>
  );
};

export default Footer;

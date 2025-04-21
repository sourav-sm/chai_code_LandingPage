import { Download, Bell, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import chaicodeApp from "../assets/chaicodeApp.webp";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";
import useInViewFade from "../hooks/useInViewFade";

export default function AppDownload() {
  const {ref,isVisible}=useInViewFade();
  return (
    <section className="pb-10  bg-gradient-to-br from-black to-zinc-900 text-white py-1 px-6 md:px-12 lg:px-24 mt-5 overflow-hidden">
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <section 
           ref={ref}
           className={`space-y-6 transition-all duration-[1200ms] ease-out transform ${
             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
         }`}>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400">
          Turn every moment into a learning opportunity !
          </h2>
          <p className="text-lg text-zinc-300 max-w-xl">
          Master coding with interactive lessons and real-world projects.
          Download now and start your journey to becoming a developer!
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Zap className="text-orange-400" size={20} />
              <span>Offline course access</span>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="text-orange-400" size={20} />
              <span>Live session notifications</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="text-orange-400" size={20} />
              <span>Revision while commuting</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://apps.apple.com/in/app/chaicode/id6504993143" target="_blank"  rel="noopener noreferrer"  className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition transform hover:-translate-y-1.5">
              Download on the 
              <div className="flex gap-1">
              <FaAppStoreIos className="text-2xl"/>
               <span className="font-bold">
               App Store
                </span> 
              </div>
                
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition transform hover:-translate-y-1.5">
               Get it on 
              <div className="flex">
              <IoLogoGooglePlaystore className="text-2xl"/>
               <span className="font-bold">
               Google Play
                </span>
              </div>
            </a>
          </div>
        </motion.div>
        </section>

        {/* Mobile App with Animation */}
        <section 
          className={`space-y-6 transition-all duration-[1200ms] ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
         }`}
        >
        
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
           <motion.img
             src={chaicodeApp}
             alt="Chai code App"
             className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] max-w-full h-auto rounded-[2rem] shadow-2xl border border-orange-500/20 lg:mt-10"
             whileHover={{ scale: 1.05, rotate: 1 }}
             transition={{ type: "spring", stiffness: 200 }}
           />
        </motion.div>
        </section>
      </div>
    </section>
  );
}

const cardStyle = "bg-[#1a1a1a] border border-gray-600 rounded-xl p-4 shadow-md text-white";
import useInViewFade from "../hooks/useInViewFade";
import hitesh from "../assets/hitesh-sir-image.jpg";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Features(){
  const {ref,isVisible}=useInViewFade();
    return(  
      <section
        ref={ref}
        className={`transition-all duration-[1200ms] ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-16'
        } overflow-hidden`}
      >

        <div className="mx-auto max-w-screen-xl bg-black text-white py-16 px-4 md:px-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-orange-500">But Why ChaiCode ?</h1>
             <p className="text-center text-gray-400 text-lg mb-12">ChaiCode exists because we love tech and teaching</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className={`space-y-6 transition-all duration-[1200ms] ease-out transform ${
             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
         }`}>

          <div className={cardStyle}>
            <h3 className="font-bold text-lg mb-2">Comprehensive Curriculum</h3>
            <p className="text-sm text-gray-300">Master key concepts and hands-on skills with clarity and confidence...</p>
          </div>
          <div className={cardStyle}>
            <h3 className="font-bold text-lg mb-2">You finish it</h3>
            <p className="text-sm text-gray-300">Our cohorts are a collaborative journey...</p>
          </div>
          <div className={cardStyle}>
            <h3 className="font-bold text-lg mb-2">Industry Guests</h3>
            <p className="text-sm text-gray-300">We’re connected with industry experts...</p>
          </div>
        </div>

        {/* Center Card */}
        <div className="text-center border border-gray-600 rounded-xl p-6">
          <img src={hitesh} alt="Hitesh Choudhary" className="rounded-xl mx-auto mb-4 w-full h-auto max-h-64 object-cover"/>
          <h2 className="text-2xl font-bold mb-2">Hitesh Choudhary</h2>
          <p className="text-sm text-gray-300 mb-4">
                Retired from corporate... stepped into 43 countries.
          </p>
          <h3 className="font-semibold text-lg mb-2">Approach</h3>
          <p className="text-sm text-gray-300">Project based courses with peer learning and bounties with many activities</p>
          {/* social links */}
          <div className="flex justify-center items-center gap-3 mt-3 text-3xl">
            <a className="transition transform hover:-translate-y-1.5" href="https://github.com/hiteshchoudhary" target="_blank" rel="noopener noreferrer">
               <FaGithub/>
            </a>
            <a className="transition transform hover:-translate-y-1.5" href="https://x.com/Hiteshdotcom?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
               <FaXTwitter/>      
            </a>
            <a className="transition transform hover:-translate-y-1.5" href="https://www.youtube.com/@chaiaurcode" target="_blank" rel="noopener noreferrer"> 
               <FaYoutube/>    
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className={`space-y-6 transition-all duration-[1200ms] ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
        }`}>

          <div className={cardStyle}>
            <h3 className="font-bold text-lg mb-2">Code and Chill</h3>
            <p className="text-sm text-gray-300">Coding should be fun, not frightening...</p>
          </div>
          <div className={cardStyle}>
            <h3 className="font-bold text-lg mb-2">Improve Communication</h3>
            <p className="text-sm text-gray-300">One of the best ways to boost communication skills is through practice...</p>
          </div>
          <div className={cardStyle}>
            <h3 className="font-bold text-lg mb-2">Bounties</h3>
            <p className="text-sm text-gray-300">Every cohort comes with exciting cash prizes...</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8">
        <button className="bg-orange-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition">
          Join Cohorts Live Classes
        </button>
      </div>
    </div>
    </section>
)}
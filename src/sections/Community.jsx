import { FaDiscord } from "react-icons/fa";
import chaicodewhite from "../assets/chaicode-white.png"

export default function Community(){
    return(
        <section className="bg-black text-white py-16 px-6 md:px-20">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Block */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold leading-snug">
              Join our <br />
              <span className="font-bold">community where</span> <br />
              <span className="font-bold">creativity thrives.</span>
            </h2>
          </div>
  
          {/* Image and Discord Button Block */}
          <div className="w-full md:w-1/2 border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center h-64">
            <div className="text-xl text-gray-400 mb-6">
                <img src={chaicodewhite} alt="" />
            </div>
            <div className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 shadow-md">
              <FaDiscord className="text-4xl"/>
              <span className="font-semibold text-4xl">Discord</span>
            </div>
          </div>
        </div>
  
        {/* Active Coders Tag */}
        <div className="mt-10">
          <div className="inline-block bg-orange-500 text-black font-semibold px-6 py-3 rounded shadow">
            80,000 Active <br /> coders in Discord
          </div>
        </div>
      </section>
    )
}
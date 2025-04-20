import { FaDiscord } from "react-icons/fa";
import chaicodewhite from "../assets/chaicode-white.png";

function joinDiscord(){
  window.open("https://discord.com/invite/WDrH3zuWFb","_blank");
}

export default function Community() {
  return (
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

        {/* Flipping Card */}
        <div onClick={joinDiscord}
          className="relative w-full md:w-1/2 h-64 group [perspective:1000px]"
        >
          <div
            className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full border border-gray-700 rounded-2xl p-4 flex flex-col items-center justify-center backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={chaicodewhite} alt="" className="mb-6" />
              <div className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 shadow-md">
                <FaDiscord className="text-4xl" />
                <span className="font-semibold text-4xl">Discord</span>
              </div>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center bg-orange-500 text-black font-semibold [transform:rotateY(180deg)]"
              style={{ backfaceVisibility: "hidden" }}
            >
              <span className="text-2xl text-center">
                80,000+ Coders Active <br /> on Discord
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

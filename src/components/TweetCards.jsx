import { FaHeart } from "react-icons/fa";
import tweetImg from "../assets/tweetImg.png";

const TweetInfo=[
    {
        img:tweetImg,
        tweetLink:"https://x.com/Sourav44281219/status/1909895441266655398"
    },
    {
        img:tweetImg,
        tweetLink:"https://x.com/Sourav44281219/status/1909895441266655398"
    },
    {
        img:tweetImg,
        tweetLink:"https://x.com/Sourav44281219/status/1909895441266655398"
    },
]



export default function TweetCards(){
    return (
      <div className="text-white text-center py-10">
        <h2 className="text-lg text-gray-300">Love that we get from our community</h2>
          <div className="flex justify-center items-center gap-2">
             <h1 className="text-4xl text-orange-500 font-bold my-3">Tweet Love</h1>
             <FaHeart className="text-3xl text-orange-500"/>
          </div>
  
        <div className="flex justify-center flex-wrap gap-5 my-6">
          {TweetInfo.map((tweet,idx) => (
            <div
              key={idx}
              className="border border-gray-500 rounded-lg w-96 h-80 flex items-center justify-center text-white transform transition hover:-translate-y-2"
            >
              <a href={tweet.tweetLink} target="_blank" rel="noopener noreferrer">
              <img src={tweet.img} alt="" className=""/>
              </a>
            </div>
          ))}
        </div>
        
        <div className="pt-5 pb-5">
        <a href="https://courses.chaicode.com/learn" className="mt-4 px-5 py-2 border-2 border-yellow-500 rounded bg-orange-500 transition">
          Join Cohorts Live Classes
        </a>
        </div>
        
  
        <p className="text-lg text-gray-200 pt-4">
          Our students are not only working in big tech companies
          <br />
          but are now founders of funded startups and product creators
        </p>
      </div>
    );
  };
  
  
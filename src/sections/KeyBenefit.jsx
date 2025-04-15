import React from "react";
import BenefitCard from "../components/BenefitCard";
import { FaChalkboardTeacher, FaGift, FaBed, FaCode, FaBrain, FaBook } from "react-icons/fa";
import CollageBouncingBalls from "../components/Collage"

const benefits = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Taught by Professionals",
    description: "Our cohorts are being taught by top industry experts and educators",
  },
  {
    icon: <FaGift />,
    title: "Bounties",
    description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
  },
  {
    icon: <FaBed />,
    title: "Coding hostels",
    description: "There is nothing like late night discussion with fellow learners and solving bugs",
  },
  {
    icon: <FaCode />,
    title: "Peer Code Reviews",
    description: "With our internal tools like Masterji, every code assignment gets feedback to improve your code",
  },
  {
    icon: <FaBrain />,
    title: "Leet Lab",
    description: "Our in-house built LeetCode style platform that helps you understand programming fundamentals",
  },
  {
    icon: <FaBook />,
    title: "Revision classes",
    description: "We have so many peer classes that you get many chances to learn the topic",
  },
];

const KeyBenefits = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-orange-500">Key Benefits of Cohorts</h1>
        <p className="text-center text-lg mb-12 text-gray-300">
          Cohorts are the best way to learn because you finish the course in a timely manner
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="border border-white p-6 rounded-lg flex flex-col lg:flex-row justify-between gap-6 ">
            <div className=" bg-black flex justify-center items-center w-full lg:w-1/2">
              <CollageBouncingBalls />
            </div>
            <div className="flex flex-col gap-3 lg:ml-5 w-full lg:w-1/2">
               <h2 className="text-orange-500 text-2xl font-semibold">Alumni Network and job listings</h2>
                <p className="text-white text-sm font-semibold">
                  The alumni Network that you always wished for in your college. We have a dedicated platform where students get to
                  know each other, do projects, make agencies and join Hackathons. Our HR team also posts regular job updates that
                  you can apply directly whenever you are ready.
                </p>    
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;

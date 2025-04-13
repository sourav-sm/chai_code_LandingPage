import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person6.jpg";

const testimonials = [
  { 
    img:person1,
    name: "Rohan T.",
    role: "Frontend Developer at CodeWave",
    feedback: "Joining this coding course was the best decision of my career. I went from knowing nothing to building full-stack web apps in just 3 months!"
  },
  {
    img:person2,
    name: "Aanya S.",
    role: "Software Engineer Intern at DevNexus",
    feedback: "I always struggled with JavaScript, but the way concepts were explained here made everything click. The hands-on projects were a game changer."
  },
  {
    img:person3,
    name: "Priya M.",
    role: "Final Year CSE Student, NIT Duragpur",
    feedback: "From HTML basics to deploying a MERN stack app — this course covers it all. The mentors are incredibly supportive and responsive."
  },
  {
    img:person4,
    name: "Vikram S.",
    role: "Freelance Web Developer",
    feedback: "The live doubt sessions and project reviews helped me stay on track and improve continuously. I even landed a freelance project during the course!"
  },
  {
    img:person5,
    name: "Neha R.",
    role: "Backend Developer Trainee at TechNova",
    feedback: "I built my portfolio site from scratch and cracked interviews thanks to the mock tests and resume sessions. Highly recommended!"
  },
  {
    img:person6,
    name: "Arjun P.",
    role: "Junior Developer, CodeCrafters",
    feedback: "This course helped me understand Git, React, Node.js, and even deployment. Everything was so beginner-friendly, yet in-depth."
  }
];




export default function Testimonials(){
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-orange-500">
        Our Students feedback
      </h1>
      <p className="text-gray-300 text-center max-w-xl mb-10">
        Explore the incredible advantages of enrolling in our courses and enhancing your skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {testimonials.map((t,idx,)=>(
          <div
          key={idx}
          className="flex flex-col justify-center bg-gray-900 items-center rounded-2xl shadow-md p-6 border border-gray-200 transition transform duration-300 hover:-translate-y-2"
        >
          <img src={t.img} alt="student-img" className=" rounded-full w-20 h-20 object-cover border-2 border-orange-500"/>
          
          <h3 className="font-semibold text-lg text-orange-500">{t.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t.role}</p>
          <p className="text-gray-800 dark:text-gray-200 italic ">"{t.feedback}"</p>
        </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-3 border border-orange-500 bg-orange-500 text-white rounded-md hover:bg-orange-700 hover:text-black transition">
        Join Cohorts Live Classes
      </button>
    </div>
  );
}
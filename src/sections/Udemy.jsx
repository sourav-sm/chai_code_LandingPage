// import { FaRupeeSign } from "react-icons/fa"; 
// import Rating from "../components/Rating";

const courses = [
    {
      id: 1,
      title: "Complete web development course",
      description: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
      rating: "4.7 Stars",
      badge: "Top Rated",
      videoID:"KZ31wDjYleI",
      originalPrice:3089,
      currentPrice:449,
      discount:"85%",
      courseLink:"https://www.udemy.com/course/web-dev-master/?couponCode=NVDIN35",
      courseRating:4.7,
      label:"Top Rated"
    },
    {
        id: 2,
        title: "cjknckjnsjcnjkcnskld",
        description: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
        rating: "4.7 Stars",
        badge: "Top Rated",
        videoID:"KZ31wDjYleI",
        originalPrice:3089,
        currentPrice:449,
        discount:"85%",
        courseLink:"https://www.udemy.com/course/web-dev-master/?couponCode=NVDIN35",
        courseRating:4.7,
        label:"Top Rated"
      },
      {
        id: 3,
        title: "hvuyhgbiuhiu",
        description: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
        rating: "4.7 Stars",
        badge: "Top Rated",
        videoID:"KZ31wDjYleI",
        originalPrice:3089,
        currentPrice:449,
        discount:"85%",
        courseLink:"https://www.udemy.com/course/web-dev-master/?couponCode=NVDIN35",
        courseRating:4.7,
        label:"Top Rated"
      }
  ];

// export default function Udemy(){
//     return (
//         <div className="text-white bg-black">
//            <div className="flex flex-col justify-center items-center">
//              <h1 className="text-4xl font-bold text-orange-500">Udemy</h1>
//              <p>Not only in India, we are global leaders in Tech Education</p>
//            </div>

//           <div className="overflow-x-auto whitespace-nowrap py-10">
//             <div className="flex gap-6 w-max">
//             {courses.map((course,idx)=>(
//             <div key={idx} className="flex ml-5">
//               {/* {course  info} */}
//               <div className="p-5 flex flex-col border border-gray-500 gap-4 max-w-2xl">
//                <h1 className="text-2xl font-bold">{course.title}</h1>
//                <p className="text-gray-400">{course.description}</p>
//                <Rating value={course.courseRating} label={course.label}/>
//                <div className="flex gap-2">
//                  <p className="flex justify-center items-center text-orange-500 text-2xl font-bold"><FaRupeeSign/>{course.currentPrice}</p>
//                  <p className=" flex justify-center items-center text-gray-700 text-lg line-through"><FaRupeeSign/>{course.originalPrice}</p>
//                  <p className="text-orange-500 bg-orange-900 p-1 rounded-xl text-md">{course.discount}off</p>
//                </div>
//                <div className="flex justify-center items-center">
//                   <a className="bg-orange-500 px-3 py-2 text-white hover:text-black text-xl mt-2 rounded-xl transition transform hover:-translate-y-1" target="_blank"
//                     href={course.courseLink}>Check Udemy Course</a>
//                   </div>
//               </div>
//                {/* {videocard} */}
//               <div className="border border-white/40 rounded-md p-1 w-full max-w-xl mx-auto">
//                <div className="aspect-video">
//                   <iframe
//                     className="w-full h-full rounded-md"
//                     src={`https://www.youtube.com/embed/${course.videoID}`}
//                       title="YouTube video player"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                    ></iframe>
//                   </div>
//                 </div>
//             </div>
//           ))}
//             </div>
//           </div>
            
           
//         </div>
//     )
// }







import { useState } from 'react';
import { FaRupeeSign, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Rating from '../components/Rating'; // Assuming you have this component
// import { courses } from './data'; // Replace with your data import

export default function Udemy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const course = courses[currentIndex];

  return (
    <div className="text-white bg-black min-h-screen py-10 px-4">
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-4xl font-bold text-orange-500">Udemy</h1>
        <p className="text-center text-lg mt-2">
          Not only in India, we are global leaders in Tech Education
        </p>
      </div>

      <div className="flex justify-center items-center gap-6">
        {/* Left Arrow */}
        <button onClick={handlePrev} className="text-white text-2xl hover:text-orange-500">
          <FaArrowLeft />
        </button>

        {/* Course Card */}
        <div className="flex flex-col lg:flex-row border border-gray-500 gap-6 max-w-5xl w-full p-6 rounded-lg">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-400 mb-4">{course.description}</p>
            <Rating value={course.courseRating} label={course.label} />
            <div className="flex gap-3 mt-3 items-center">
              <p className="text-orange-500 text-2xl font-bold flex items-center">
                <FaRupeeSign /> {course.currentPrice}
              </p>
              <p className="text-gray-600 text-lg line-through flex items-center">
                <FaRupeeSign /> {course.originalPrice}
              </p>
              <p className="bg-orange-900 text-orange-400 px-3 py-1 rounded-xl text-sm">
                {course.discount} off
              </p>
            </div>
            <a
              className="bg-orange-500 px-4 py-2 inline-block text-white hover:text-black text-lg mt-4 rounded-xl transition transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
              href={course.courseLink}
            >
              Check Udemy Course
            </a>
          </div>

          {/* Video Embed */}
          <div className="flex-1 border border-white/40 rounded-md p-1">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-md"
                src={`https://www.youtube.com/embed/${course.videoID}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={handleNext} className="text-white text-2xl hover:text-orange-500">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}


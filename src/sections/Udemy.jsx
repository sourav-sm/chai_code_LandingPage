import { FaRupeeSign} from 'react-icons/fa';
import Rating from '../components/Rating'; 

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
        id: 3,
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
      }
  ];

export default function Udemy() {

return (
    <div className="text-white bg-black min-h-screen py-10 px-4">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-4xl font-bold text-orange-500">Udemy</h1>
        <p className="text-center text-lg mt-2">
          Not only in India, we are global leaders in Tech Education
        </p>
      </div>
  
      {/* Scrollable Course Cards */}
      <div className="overflow-x-auto"
        style={{
            scrollbarWidth:'none',
            msOverflowStyle:'none'
        }}
       >
        <div className="flex gap-8 w-max px-4 pb-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 border border-gray-500 rounded-lg w-[90vw] md:w-[95vw] lg:w-[900px] p-6 bg-zinc-900"
            >
              {/* Course Card */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Course Info */}
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
                  <div className="h-72 md:h-80">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}  

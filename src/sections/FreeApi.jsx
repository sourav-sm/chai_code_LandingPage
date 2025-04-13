// export default function FreeApi(){
//     return (
//       <div className="bg-black">
//         <div className="flex justify-center items-center">
//             <h1 className="text-4xl font-bold text-white">FreeAPI - Open Source</h1>
//         </div>
//         <div className="flex p-4 justify-between">
//             <div className="w-1/2 p-4 text-white ml-10">
//                 <h1 className="text-2xl font-semibold">Unlock Your Potential with Our API Hub</h1>
//                 <p className="">Our API Hub is designed to streamline your learning experience in API handling across various programming languages.With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications.
//                    Join us to enhance your skills and take your coding projects to the next level!</p>
//             </div>
//             <div className="border border-white/40 rounded-md p-1 w-full max-w-md mx-auto mt-8">
//             <div className="aspect-video">
//               <iframe
//                 className="w-full h-full rounded-md"
//                 src="https://www.youtube.com/embed/q8EevlEpQ2A"
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                ></iframe>
//              </div>
//             </div>
//         </div>
//       </div>
//     )
// }



export default function App() {
    return (
      <div className="min-h-screen bg-black text-white font-sans p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-500">
          FreeAPI - Open Source
        </h1>
  
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="w-full md:w-1/2 ml-10">
            <h2 className="text-3xl font-semibold mb-4">
              Unlock Your Potential with Our API Hub
            </h2>
            <p className="text-base leading-relaxed">
              Our API Hub is designed to streamline your learning experience in API handling across various programming languages.
              
              With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications.
              <br />
              Join us to enhance your skills and take your coding projects to the next level!
            </p>
          </div>
  
          {/* Right Column - Video Placeholder */}
        <div className="border border-white/40 rounded-md p-1 w-full max-w-md mx-auto mt-8">
             <div className="aspect-video">
               <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/DxedlhTyR7Q"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               ></iframe>
             </div>
            </div>
        </div>
  
        <div className="flex justify-center mt-12">
            <a href="https://freeapi.app/" target="_blank" className="border border-yellow-400 px-6 py-2 rounded-md bg-orange-500 text-black hover:bg-orange-800 text-xl">
            Check FreeAPI Docs
            </a>
        </div>
      </div>
    );
  }
  
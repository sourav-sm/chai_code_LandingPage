import { TypeAnimation } from 'react-type-animation';

export default function Hero(){
    return (
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-black">
     <div className="mx-auto w-screen max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        
    <div className="mx-auto max-w-3xl text-center">
    <div className="text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200  px-3 py-1 -mt-16 max-w-fit mx-auto rounded-md">
    <p className="text-sm leading-tight">
      <TypeAnimation
        sequence={['Trusted by 1.5M Code Learners', 2000]}
        speed={30}
        wrapper="span"
        repeat={0}
      />
    </p>
</div>

      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white mb-8">
        Consistency and Community Learning for coding courses.
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
      Content is every where, we provide a learning experience that is unmatahed. Bounties, peer learning peer code reviews, Virtual hostel, Alumni Network, Doubt sessions, Group projects and so many other activities to keep you on track.
      </p>

      <div className="flex justify-center bg-orange-500  items-center gap-1 mt-4  text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200 border px-3 py-1 max-w-fit mx-auto rounded-md ">
          <a className="text-2xl" href="https://courses.chaicode.com/learn" > Check all Live Cohorts </a>
           <span className="relative flex h-4 w-4 pt-0.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-95"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
      </div>

      <div className="border border-white/40 rounded-md p-1 w-full max-w-md mx-auto mt-8">
       <div className="aspect-video">
         <iframe
           className="w-full h-full rounded-md"
           src="https://www.youtube.com/embed/q8EevlEpQ2A"
             title="YouTube video player"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
          ></iframe>
        </div>
      </div>
     </div>
  </div>
  </section>
)}
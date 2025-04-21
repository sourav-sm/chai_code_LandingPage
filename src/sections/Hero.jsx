import { TypeAnimation } from 'react-type-animation';
import useInViewFade from '../hooks/useInViewFade';

export default function Hero() {
  const { ref, isVisible } = useInViewFade();

  return (
    <section
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 w-full overflow-hidden`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-base text-gray-700 dark:text-gray-200 bg-orange-100/60 dark:bg-orange-400/10 px-4 py-1 rounded-full max-w-fit mx-auto mb-4 shadow-sm">
            <TypeAnimation
              sequence={['Trusted by 1.5M Code Learners', 2000]}
              speed={30}
              wrapper="span"
              repeat={0}
            />
          </div>

          <h1 className="text-3xl  sm:text-4xl md:text-5xl font-bold  text-gray-900 dark:text-white leading-sung sm:leading-tight mb-6">
          Consistency and Community Learning for coding courses.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Content is everywhere. We offer an unmatched learning experience — bounties, peer learning, code reviews, virtual hostels, alumni networks, doubt sessions, group projects, and more to keep you on track and engaged.
          </p>

          <div className="flex justify-center bg-orange-500  items-center gap-2 mt-6 sm:mt-8 text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200 border px-3 py-1 max-w-fit mx-auto rounded-md animate-bounce">
           <a className="text-2xl font-bold" href="https://courses.chaicode.com/learn" > Check all Live Cohorts </a>
            <span className="relative flex h-4 w-4 pt-0.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-95"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
          </div>

          <div className="border border-white/30 rounded-xl p-1 w-full max-w-md mx-auto mt-12 shadow-xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/W43v7ePnjAA"
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
  );
}

export default function Card({ videoUrl, title, CourseIndo, CoursePrice, CourseUrl }) {
  return (
      <article className="w-full h-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <div className="border border-white/40 rounded-md p-1 w-full">
              <div className="aspect-video">
                  <iframe
                      className="w-full h-full rounded-md"
                      src={videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
              </div>
          </div>

          <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white">{title}</h3>

              <p className="mt-2 line-clamp-3 text-md/relaxed text-gray-500 dark:text-gray-400">
                  {CourseIndo}
              </p>

              <div className="text-white flex gap-2 mt-2">
                  <span className="border-2 border-white text-white px-3 py-1 rounded-xl font-bold text-lg">
                      {CoursePrice.current}
                  </span>
                  <span className="line-through text-gray-400 font-semibold text-sm">
                      {CoursePrice.original}
                  </span>
              </div>

              <div className="flex justify-center mt-4">
                  <a href={CourseUrl} className="group inline-flex items-center gap-1 text-2xl font-medium bg-orange-500 px-4 py-2 border rounded-2xl">
                      <span>Buy Now</span>
                      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                          &rarr;
                      </span>
                  </a>
              </div>
          </div>
      </article>
  );
}

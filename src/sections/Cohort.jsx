import Card from "../components/Card";

const cardData=[
    {
        videoUrl:"https://www.youtube.com/embed/yG8JMlldoCE",
        title:" Web Dev Cohort - Live 1.0 ",
        courseInfo:"Master full-stack web development with Web Dev Cohort - Live 1.0. Learn HTML, CSS, JS, React, Next.js, Node, Docker, databases like MongoDB/PostgreSQL, DevOps with AWS (ECR, EC2, CloudFront), modern workflows like Turbo Repo, TypeScript, and GitHub CI/CD.",
        coursePrice:{ current:"6,999 INR",original:"8,999 INR"},
        courseUrl:"https://courses.chaicode.com/learn/batch/about?bundleId=214297"
    },
    {
        videoUrl:"https://www.youtube.com/embed/VNb_LawBBWU",
        title:"GenAI with python | concept to deployment projects 1.0",
        courseInfo:"Learn GenAl in Hindi with concepts, end to end projects with deployment and best learning community.",
        coursePrice:{ current:"4,999 INR",original:"7,999 INR"},
        courseUrl:"https://courses.chaicode.com/learn/batch/about?bundleId=227321"
    },
    {
        videoUrl:"https://www.youtube.com/embed/oBLpqSHc3lA",
        title:"DevOps for Developers 1.0 ",
        courseInfo:"Linux, DevOps, Docker, Containers, SonarQube, Prometheus & Grafana, Load balancing, zero down time deployments",
        coursePrice:{ current:"4,999 INR",original:"7,999 INR"},
        courseUrl:"https://courses.chaicode.com/learn/batch/about?bundleId=227963"
    },
    {
        videoUrl:"https://www.youtube.com/embed/Kjd-SWpe1do",
        title:"Full Stack Data science 1.0",
        courseInfo:"Python, Machine Learning, deep learning, NLP, Al, Langchain and more. A complete Data science journey",
        coursePrice:{ current:"6,999 INR",original:"8,999 INR"},
        courseUrl:"https://courses.chaicode.com/learn/batch/about?bundleId=227817"
    }
]


export default function Cohort(){
    return (
        <div className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-black">
            <div className="text-white flex flex-col justify-center items-center mb-5">
                <h1 className="text-5xl font-bold text-orange-500">Cohorts</h1>
                <p className="text-2xl font-bold">Live Training Classes</p>
            </div>

            <div className="overflow-x-auto lg:px-10"
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}>
                <div className="flex gap-10 p-5 w-max scroll-smooth snap-x snap-mandatory"
                 style={{
                    overflow: "hidden"
                  }}
                >
                    {cardData.map((data, index) => (
                        <div 
                          key={index} 
                          className="snap-start shrink-0 w-[320px] sm:w-[360px] md:w-[400px] border-2 border-white transition transform hover:-translate-y-2 hover:border-orange-500 rounded-xl"
                        >
                            <Card 
                                videoUrl={data.videoUrl} 
                                title={data.title} 
                                CourseIndo={data.courseInfo} 
                                CoursePrice={data.coursePrice}
                                CourseUrl={data.courseUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

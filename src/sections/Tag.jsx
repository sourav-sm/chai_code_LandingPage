import {motion} from "framer-motion"
import django from "../assets/topic_clound_img/django.png";
import docker from "../assets/topic_clound_img/docker.png";
import kubernetes from "../assets/topic_clound_img/kubernets.png";
import python from "../assets/topic_clound_img/python.png";
import react from "../assets/topic_clound_img/react.png";
import reactnative from "../assets/topic_clound_img/reactnative.png";
import html from "../assets/topic_clound_img/html.png";
import fastapi from "../assets/topic_clound_img/fastapi.jpg";
import aws from "../assets/topic_clound_img/aws.png";
import flluter from "../assets/topic_clound_img/flluter.png";
import git from "../assets/topic_clound_img/git.png";
import numpy from "../assets/topic_clound_img/numpy.png";
import tailwindcss from "../assets/topic_clound_img/tailwindcss.png";



const topics = [
  {
     imglink:docker,
    name:"Docker",
    youtubeLink:"https://www.youtube.com/watch?v=rr9cI4u1_88"
  },
  {
    imglink:python,
    name:"MCP Server",
    youtubeLink:"https://www.youtube.com/watch?v=dZyQNy3-HjU"
  },{
    imglink:kubernetes,
    name:"Kubernetes",
    youtubeLink:"https://www.youtube.com/watch?v=hJw8Sy13Vp8"
  },
  {
    imglink:python,
    name:"Python",
    youtubeLink:"https://www.youtube.com/watch?v=Ca5DLSDfPec&list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s"
  },
  {
    imglink:reactnative,
    name:"React Native",
    youtubeLink:"https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c"
  },{
    imglink:django,
    name:"Django",
    youtubeLink:"https://www.youtube.com/watch?v=j6szNSzw4BU&list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy"
  },
  {
    imglink:django,
    name:"Nextjs",
    youtubeLink:"https://www.youtube.com/watch?v=OgS1ZWZItno&list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq"
  },
  {
    imglink:react,
    name:"Rectjs",
    youtubeLink:"https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
  },{
    imglink:django,
    name:"Javascript",
    youtubeLink:"https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"
  },
  {
    imglink:django,
    name:"NodeJs",
    youtubeLink:""
  },
  {
    imglink:fastapi,
    name:"FastAPI",
    youtubeLink:"https://www.youtube.com/watch?v=foGklduxhM0&list=PLu71SKxNbfoCFwFuOqIOG8iM1JeOLq3Wv"
  },{
    imglink:numpy,
    name:"Numpy",
    youtubeLink:"https://www.youtube.com/watch?v=x7ULDYs4X84&list=PLu71SKxNbfoDzco7QLan_WqsRKndIycxH"
},{
    imglink:tailwindcss,
    name:"TailwindCSS",
    youtubeLink:"https://www.youtube.com/watch?v=s2p3AxNXwsE&list=PLu71SKxNbfoBLTxvkUIvy3_VR-vZK6Eq7"
  },
  {
    imglink:aws,
    name:"AWS",
    youtubeLink:"https://www.youtube.com/watch?v=TLf5OASKf18&list=PLu71SKxNbfoAlLSbCCttE4p5xxkDVCOk_"
  },
  {
    imglink:flluter,
    name:"Flutter",
    youtubeLink:"https://www.youtube.com/watch?v=7b4BoyRHx-c&list=PLu71SKxNbfoAtiwwVakdtUELcBNk5zvSJ"
  },{
    imglink:html,
    name:"HTML",
    youtubeLink:"https://www.youtube.com/watch?v=XmLOwJHFHf0&list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI"
  },
  ,{
    imglink:django,
    name:"Typescript",
    youtubeLink:"https://www.youtube.com/watch?v=j89BvWz8Eag&list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW"
  },
  {
    imglink:git,
    name:"Git",
    youtubeLink:"https://www.youtube.com/watch?v=7tOLcNZfPso&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o"
  }
];

const handleClick=(link)=>{
    if(link){
        window.open(link,"_blank");
    }
};


export default function TopicsCloud() {
    return (
      <div className="bg-black">
        <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">Topics Cloud</h1>
            <p>You can find videos and courses on topics and much more</p>
        </div>

        <div className="max-h-screen w-full bg-gradient-to-br from-[#010b16] to-[#021f2f] flex items-center justify-center px-6 py-12">
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl text-white">
              {topics.map((topic, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => handleClick(topic.youtubeLink)}
                  className="rounded-full border  hover:border-orange-500 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 cursor-pointer flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <img
                    src={topic.imglink}
                    alt={topic.name}
                    className="h-20 w-20 object-cover rounded-full border-2 border-white"
                  />
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    );
  }

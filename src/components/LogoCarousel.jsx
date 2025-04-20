import Marquee from "react-fast-marquee";
import netflix from "../assets/netflix.webp";
import amazon from "../assets/amazon.jpeg";
import meta from "../assets/meta.jpg";
import google from "../assets/Google.jpg";
import x from "../assets/x.jpg";
import zomato from "../assets/zomato.png";
import zepto from "../assets/zepto.png"

const LogoImages=[
  {
    image:netflix
  },
  {
    image:zomato
  },
  {
    image:meta
  },
  {
    image:zomato
  },
  {
    image:google
  },
  {
    image:x
  },
  {
    image:zepto
  },
  {
    image:netflix
  },
  {
    image:amazon
  },
  {
    image:zomato
  }
]


const LogoCarousel = () => {

  return (
    <div className="bg-black">
      <Marquee gradient={false} speed={40}>
        {LogoImages.map(( logo,idx) => (
          <img key={idx} src={logo.image} alt="comapny images" className=" w-40 h-24 " />
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;

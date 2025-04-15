import Marquee from "react-fast-marquee";

const LogoCarousel = () => {
  const logos = Array.from({ length: 10 }); // dummy array

  return (
    <div className="bg-black">
      <Marquee gradient={false} speed={40}>
        {logos.map((_, idx) => (
          <div
            key={idx}
            className="border border-gray-500 rounded-lg w-40 h-24 mx-4 flex items-center justify-center text-white text-lg"
          >
            Logo Card
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;

import TweetCards from "../components/TweetCards";
import LogoCarousel from "../components/LogoCarousel";

export default function TweetSection() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <TweetCards />
      <LogoCarousel />
    </div>
  );
}

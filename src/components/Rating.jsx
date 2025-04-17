import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Rating({ value, label }) {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-2 text-white">
      <span className="text-4xl font-bold">{value}</span>
      <div>
         <div className="flex space-x-1">
           {[...Array(fullStars)].map((_, i) => (
             <FaStar key={`full-${i}`} className="text-orange-500 w-4 h-4" />
           ))}
           {hasHalfStar && (
             <FaStarHalfAlt className="text-orange-500 w-4 h-4" />
           )}
           {[...Array(emptyStars)].map((_, i) => (
             <FaRegStar key={`empty-${i}`} className="text-orange-500 w-4 h-4" />
           ))}
             
         </div>
         <span className="text-sm text-gray-400">{label}</span>
      </div>
    </div>
  );
}

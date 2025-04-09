import React from "react";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="border border-white bg-black p-6 rounded-lg flex flex-col gap-3 w-full h-full">
      {icon && <div className="text-white text-3xl">{icon}</div>}
      <h2 className="text-orange-500 text-xl font-semibold">{title}</h2>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};

export default BenefitCard;

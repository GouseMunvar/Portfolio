import React from "react";

const SvgCard = ({ component: Svg, description, color }) => {
  return (
    <div className="w-[120px] h-[150px] flex flex-col items-center border rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-[150px] flex justify-center items-center">
        {/* Render SVG component with color */}
        <Svg className="w-[80px] h-[80px]" fill={color} />
      </div>
      <div className="w-full bg-brand text-center text-white py-2">
        {description}
      </div>
    </div>
  );
};

export default SvgCard;

import React from "react";
import shape1 from "../../assets/shape_1.png";
import shape2 from "../../assets/shape_2.png";

const SingleCountProgressResolveCard = ({ title, count, gradient }) => {
  return (
    <div >
      <div
        className={`relative min-h-[160px] md:h-[180px]
      ${gradient}
      rounded-xl shadow-lg px-6 md:px-10 py-5
      text-white flex flex-col justify-center text-center
      overflow-hidden`}
      >
        {/* Left Shape */}
        <img
          src={shape1}
          alt=""
          className="absolute left-0 top-0 h-full w-auto object-contain opacity-50"
        />

        {/* Right Shape */}
        <img
          src={shape2}
          alt=""
          className="absolute right-0 top-0 h-full w-auto object-contain opacity-50"
        />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-sm md:text-base opacity-90">{title}</h3>

          <h1 className="text-3xl md:text-4xl font-bold mt-3">{count}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleCountProgressResolveCard;

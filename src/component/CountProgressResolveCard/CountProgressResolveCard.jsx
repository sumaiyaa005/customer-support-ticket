import React from "react";
import SingleCountProgressResolveCard from "./SingleCountProgressResolveCard";

const CountProgressResolveCard = () => {
  return (
    <div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* In Progress Card */}
        <SingleCountProgressResolveCard
          title="In-Progress"
          count={5}
          gradient="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        />

        {/* Resolved Card */}
        <SingleCountProgressResolveCard
          title="Resolved"
          count={12}
          gradient="bg-gradient-to-r from-[#54CF68] to-[#00827A]"
        />
      </div>
    </div>
  );
};

export default CountProgressResolveCard;

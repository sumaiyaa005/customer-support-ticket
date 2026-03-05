import React from "react";
import SingleCountProgressResolveCard from "./SingleCountProgressResolveCard";

const CountProgressResolveCard = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SingleCountProgressResolveCard
        title="In-Progress"
        count={inProgressCount}
        gradient="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
      />
      <SingleCountProgressResolveCard
        title="Resolved"
        count={resolvedCount}
        gradient="bg-gradient-to-r from-[#54CF68] to-[#00827A]"
      />
    </div>
  );
};


export default CountProgressResolveCard;

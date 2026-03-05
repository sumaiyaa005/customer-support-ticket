import React from "react";
import calender from "../../assets/calender.png";

const SingleCustomerCard = ({ customerTicket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    customerTicket;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl">
      <div className="p-4 md:p-6">
        {/* Title + Status */}
        <div className="flex justify-between items-center mb-3 md:mb-4 gap-2">
          <h4 className="font-semibold text-xs sm:text-sm md:text-base">
            {title}
          </h4>

          {/* Status */}
          <div
            className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm"
            style={{ backgroundColor: status.background }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: status.color }}
            ></span>
            <span>{status.type}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-3 text-[10px] sm:text-xs md:text-sm">
          {/* ID + Priority */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span>{id}</span>
            <span style={{ color: priority.color }}>{priority.level}</span>
          </div>

          {/* Customer + Date */}
          <div className="flex items-center gap-2 text-gray-500">
            <span>{customer}</span>

            <span className="flex items-center gap-1">
              <img
                src={calender}
                alt="calendar"
                className="w-3 h-3 md:w-4 md:h-4"
              />
              {createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCustomerCard;

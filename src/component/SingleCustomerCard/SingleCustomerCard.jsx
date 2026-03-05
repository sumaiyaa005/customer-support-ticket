import React from "react";
import calender from "../../assets/calender.png";

const SingleCustomerCard = ({ customerTicket, handleAddToProgress }) => {
  const { id, title, description, customer, priority, status, createdAt } = customerTicket;

  const getPriorityColor = (priority) => {
    if (priority === "HIGH-PRIORITY") return "red";
    if (priority === "MEDIUM-PRIORITY") return "#FBBF24";
    if (priority === "LOW-PRIORITY") return "green";
    return "gray";
  };

  const getStatusColor = (status) => {
    if (status === "Open") return "#22C55E";
    if (status === "In-Progress") return "#FBBF24";
    if (status === "Completed") return "#3B82F6";
    return "gray";
  };

  return (
    <div
      className="card bg-base-100 shadow-md rounded-xl cursor-pointer hover:shadow-xl"
      onClick={() => handleAddToProgress(customerTicket)}
    >
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-sm md:text-base">{title}</h4>
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm"
            style={{
              backgroundColor: `${getStatusColor(status)}20`,
              color: getStatusColor(status),
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: getStatusColor(status) }}
            ></span>
            {status}
          </div>
        </div>
        <p className="text-xs md:text-sm text-gray-500 mb-4">{description}</p>
        <div className="flex justify-between flex-wrap gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-3">
            <span>{id}</span>
            <span
              style={{ color: getPriorityColor(priority) }}
              className="font-medium"
            >
              {priority}
            </span>
          </div>
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

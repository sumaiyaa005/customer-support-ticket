import React from "react";

const TaskStatus = ({ inProgress, handleComplete }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task Status</h1>
      <div className="grid gap-4">
        {inProgress.map((ticket) => (
          <div key={ticket.id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h4 className="font-bold">{ticket.title}</h4>
              <button
                onClick={() => handleComplete(ticket)}
                className="btn btn-success mt-2"
              >
                Complete
              </button>
            </div>
          </div>
        ))}
        {inProgress.length === 0 && (
          <p className="text-gray-500">No tasks in progress.</p>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;

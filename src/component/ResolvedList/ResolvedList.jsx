import React from "react";

const ResolvedList = ({ resolved }) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Resolved List</h1>
      <div className="grid gap-4">
        {resolved.map((ticket) => (
          <div key={ticket.id} className="card bg-indigo-100 shadow-md">
            <div className="card-body">
              <h4 className="">{ticket.title}</h4>
            </div>
          </div>
        ))}
        {resolved.length === 0 && (
          <p className="text-gray-500">No resolved tasks.</p>
        )}
      </div>
    </div>
  );
};
export default ResolvedList;

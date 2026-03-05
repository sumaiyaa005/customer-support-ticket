import React, { use } from "react";
import SingleCustomerCard from "../SingleCustomerCard/SingleCustomerCard";

const CustomerCard = ({
  customerTicketPromise,
  handleAddToProgress,
  customerTickets,
  setCustomerTickets,
}) => {
  const customerTicketsData = use(customerTicketPromise);

  if (customerTickets.length === 0 && customerTicketsData.length > 0) {
    setCustomerTickets(customerTicketsData);
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>
      {customerTickets.length === 0 ? (
        <p>No tickets available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customerTickets.map((ticket) => (
            <SingleCustomerCard
              key={ticket.id}
              customerTicket={ticket}
              handleAddToProgress={handleAddToProgress}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CustomerCard;

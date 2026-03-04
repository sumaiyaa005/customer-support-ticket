import React, { use } from "react";
import SingleCustomerCard from "../SingleCustomerCard/SingleCustomerCard";

const CustomerCard = ({ customerTicketPromise }) => {
  const customerTickets = use(customerTicketPromise);
  //   console.log(customerTicket);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customerTickets.map((customerTicket) => (
          <SingleCustomerCard
            key={customerTicket.id}
            customerTicket={customerTicket}
          ></SingleCustomerCard>
        ))}
      </div>
    </>
  );
};

export default CustomerCard;

import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CountProgressResolveCard from "./component/CountProgressResolveCard/CountProgressResolveCard";
import CustomerCard from "./component/CustomersCard/CustomerCard";
import { Suspense, useState } from "react";
import Footer from "./component/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import TaskStatus from "./component/TaskStatus/TaskStatus";
import ResolvedList from "./component/ResolvedList/ResolvedList";

const fetchCustomerTicket = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const customerTicketPromise = fetchCustomerTicket();

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [customerTickets, setCustomerTickets] = useState(() => {
    return [];
  });

  const handleAddToProgress = (ticket) => {
    setInProgress((prev) => {
      if (prev.some((t) => t.id === ticket.id)) return prev;
      return [...prev, ticket];
    });

    toast.success("Ticket Added To In-Progress");
  };

  const handleComplete = (ticket) => {
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [...prev, ticket]);
    setCustomerTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success("Task completed and moved to Resolved!");
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />
      <div className="bg-[#F5F5F5] flex-grow">
        <div className="px-6 md:px-12 lg:px-20 pt-10">
          <CountProgressResolveCard
            inProgressCount={inProgress.length}
            resolvedCount={resolved.length}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16">
            <div className="lg:col-span-9">
              <Suspense
                fallback={
                  <div className="loading loading-spinner loading-xl" />
                }
              >
                <CustomerCard
                  customerTicketPromise={customerTicketPromise}
                  handleAddToProgress={handleAddToProgress}
                  customerTickets={customerTickets}
                  setCustomerTickets={setCustomerTickets}
                />
              </Suspense>
            </div>
            <div className="lg:col-span-3">
              <TaskStatus
                inProgress={inProgress}
                handleComplete={handleComplete}
              />
              <ResolvedList resolved={resolved} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;

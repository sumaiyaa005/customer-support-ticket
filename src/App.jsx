import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CountProgressResolveCard from "./component/CountProgressResolveCard/CountProgressResolveCard";
import CustomerCard from "./component/CustomersCard/CustomerCard";
import { Suspense } from "react";
import Footer from "./component/Footer/Footer";

const fetchCustomerTicket = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
const customerTicketPromise = fetchCustomerTicket();

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* Background Section */}
      <div className="bg-[#F5F5F5] ">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* content start */}
          <CountProgressResolveCard />
          {/* customer card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-16">
            {/* Left: Customer Tickets */}
            <div className="lg:col-span-9">
              <Suspense
                fallback={
                  <span className="loading loading-spinner loading-xl"></span>
                }
              >
                <CustomerCard
                  customerTicketPromise={customerTicketPromise}
                ></CustomerCard>
              </Suspense>
            </div>
            {/* Right: Task Status */}
            <div className="lg:col-span-3">
              <h1 className="text-2xl font-bold mb-4">Task Status</h1>
              <div className="grid grid-cols-1 gap-4">
                {/* Complete Ticket Example 1 */}
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h4 className="font-bold">
                      Payment Failed - Card Declined
                    </h4>
                    <div className="bg-green-600 text-white p-2 rounded mt-2">
                      Complete
                    </div>
                  </div>
                </div>

                {/* Resolved Task */}
                <div className="card  ">
                  <div className="card-body">
                    <h2 className="card-title">Resolved Task</h2>
                    <p>No resolved tasks yet.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Task Status end */}
          </div>
          {/* customer card end */}

          {/* ///////// */}
        </div>
        {/* content end */}
        {/* footer start */}
        <Footer />

        {/* footer end */}
      </div>
    </div>
  );
}

export default App;

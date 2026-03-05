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

function App() {
  const customerTicketPromise = fetchCustomerTicket();

  return (
    <div>
      <Navbar />

      {/* Background */}
      <div className="bg-[#F5F5F5] min-h-screen">
        <div className="px-6 md:px-12 lg:px-20 pt-10">
          {/* Top Cards */}
          <CountProgressResolveCard />

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16">
            {/* Left */}
            <div className="lg:col-span-9">
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-40">
                    <span className="loading loading-spinner loading-xl"></span>
                  </div>
                }
              >
                <CustomerCard customerTicketPromise={customerTicketPromise} />
              </Suspense>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3 ">
              <h1 className="text-2xl font-bold mb-4">Task Status</h1>

              <div className="grid gap-4">
                <div className="card bg-white shadow-md">
                  <div className="card-body">
                    <h4 className="font-bold">
                      Payment Failed - Card Declined
                    </h4>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm mt-2 inline-block">
                      Complete
                    </div>
                  </div>
                </div>

                <div className="card bg-white shadow-md">
                  <div className="card-body">
                    <h2 className="card-title">Resolved Task</h2>
                    <p>No resolved tasks yet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

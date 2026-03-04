import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import shape1 from "./assets/shape_1.png";
import shape2 from "./assets/shape_2.png";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* Background Section */}
      <div className="bg-[#F5F5F5] py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* IN PROGRESS CARD */}
            <div
              className="relative min-h-[180px] md:h-[220px]
              bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
              rounded-xl shadow-lg px-6 md:px-10 py-8
              text-white flex flex-col justify-center text-center
              overflow-hidden"
            >
              {/* Left Shape */}
              <img
                src={shape1}
                alt=""
                className="absolute left-0 top-0 h-full w-auto object-contain opacity-50"
              />

              {/* Right Shape */}
              <img
                src={shape2}
                alt=""
                className="absolute right-0 top-0 h-full w-auto object-contain opacity-50"
              />

              <div className="relative z-10">
                <h3 className="text-sm md:text-base opacity-90">In-Progress</h3>
                <h1 className="text-3xl md:text-4xl font-bold mt-3">0</h1>
              </div>
            </div>

            {/* RESOLVED CARD */}
            <div
              className="relative min-h-[180px] md:h-[220px]
              bg-gradient-to-r from-[#54CF68] to-[#00827A]
              rounded-xl shadow-lg px-6 md:px-10 py-8
              text-white flex flex-col justify-center text-center
              overflow-hidden"
            >
              <img
                src={shape1}
                alt=""
                className="absolute left-0 top-0 h-full w-auto object-contain opacity-50"
              />

              <img
                src={shape2}
                alt=""
                className="absolute right-0 top-0 h-full w-auto object-contain opacity-50"
              />

              <div className="relative z-10">
                <h3 className="text-sm md:text-base opacity-90">Resolved</h3>
                <h1 className="text-3xl md:text-4xl font-bold mt-3">0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

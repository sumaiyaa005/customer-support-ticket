import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CountProgressResolveCard from "./component/CountProgressResolveCard/CountProgressResolveCard";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* Background Section */}
      <div className="bg-[#F5F5F5] py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* content start */}
          <CountProgressResolveCard />
          {/* content end */}
        </div>
      </div>
    </div>
  );
}

export default App;

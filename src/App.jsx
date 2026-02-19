import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div className="pt-10 px-[10%] min-h-screen lg:min-h-screen w-[100%] lg:w-screen font-thin bg-gray-800 text-white">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;

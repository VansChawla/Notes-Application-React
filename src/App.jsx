import React from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  return (
    <div className="border-1 min-h-screen lg:flex bg-black text-white">

        <Create />
        <Read />

    </div>
  );
};

export default App;

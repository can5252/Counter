import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Count from "./Components/Count";
import Counters from "./Components/Counters";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Count />
      <Counters />
    </div>
  );
}

export default App;

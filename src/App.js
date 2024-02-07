import React from "react";
import { Link } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ApiSection from "./components/ApiSection";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;

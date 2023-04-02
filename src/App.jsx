import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import PriceList from "./component/PriceList/PriceList";
import Dashboard from "./component/Dashboard/Dashboard";
import PhoneBar from "./component/PhoneBar/PhoneBar";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App;

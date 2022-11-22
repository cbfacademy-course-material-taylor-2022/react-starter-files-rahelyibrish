import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom/client";
//import data from './models/headphones.json';

import GadgetList from "./components/GadgetList";
import ClickCounter from "./components/ClickCounter";
import "./style.css";
const mainStyle = { fontFamily: "Arial" };

const App = () => {
  const headphones = [
    { title: "Headphones 1", price: 19.99, id: 123 },
    { title: "Headphones 2", price: 49.99, id: 1234 },
    { title: "Headphones 3", price: 100.0, id: 12345 },
    { title: "Headphones 4", price: 150.0, id: 123456 },
    { title: "Headphones 5", price: 200.0, id: 1234567 },
  ];
  const [headphonesList] = useState(headphones);
  console.log(useState(headphones));

  return (
    <section style={mainStyle}>
      <h1>Electronics Store</h1>
      <GadgetList items={headphonesList} />
      <ClickCounter />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

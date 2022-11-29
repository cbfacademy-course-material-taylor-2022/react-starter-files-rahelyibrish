import "./App.css";
import React from "react";
import Car from "./components/Car";
import Bicycle from "./components/Bicycle";
import Truck from "./components/Truck";
import Bus from "./components/Bus";
import Skateboard from "./components/Skateboard";
import Wheel from "./components/Wheel";

export default function App() {
  const showWheels = (numWheels) => {
    let wheels = [];
    for (let i = 0; i < numWheels; i++) {
      wheels.push(<Wheel key={i} />);
    }
    return wheels;
  };

  return (
    <div className="App">
      <Car numberOfWheels="4" showWheels={showWheels} />
      <Bicycle numberOfWheels="2" showWheels={showWheels} />
      <Truck numberOfWheels="8" showWheels={showWheels} />
      <Bus numberOfWheels="6" showWheels={showWheels} />
      <Skateboard numberOfWheels="4" showWheels={showWheels} />
    </div>
  );
}

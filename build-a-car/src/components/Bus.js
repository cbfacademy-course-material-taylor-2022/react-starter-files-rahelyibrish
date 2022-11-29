import React from "react";
export default function Bus(props) {
  return (
    <>
      <h2>Hola, I am a Bus! I have {props.numberOfWheels} wheels.</h2>;
      {props.showWheels(props.numberOfWheels)}
    </>
  );
}

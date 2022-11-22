import React from "react";
import "../style.css";

const GadgetList = (props) => {
  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
        <div key={item.id}>
          <div className="title">{item.title}</div>
          <div className="price">{item.price}</div>
        </div>
      ))}
    </main>
  );
};

export default GadgetList;

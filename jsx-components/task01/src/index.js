import React from "react";
import ReactDOM from "react-dom/client";

const name = "Rahel";

function Profile(name) {
  if (name.length > 0) {
    return (
      <main id="content" role="main" className="base">
        <h1>{name}'s React Page</h1>
        <p>Example of react JSX in action</p>
      </main>
    );
  } else {
    return (
      <main id="content" role="main" className="base">
        <h1>Just a React Page</h1>
        <p>Example of react JSX in action</p>
      </main>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Profile(name));

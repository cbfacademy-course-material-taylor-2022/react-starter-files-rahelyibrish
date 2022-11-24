import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Profile";

function App() {
  return (
    //Replace the string below with the JSX Profile component
    <Profile name="Eva" bio="likes travelling." />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

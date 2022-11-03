"use strict";

function ClickableButton() {
  const [clicked, setClick] = React.useState(false);

  if (clicked) {
    return "You have arrived at the right place!";
  }

  return React.createElement(
    "button",
    {
      className: "main-button",
      onClick: () => setClick(true),
    },
    "WELCOME!"
  );

  if (clicked) {
    return React.createElement("");
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(ClickableButton));

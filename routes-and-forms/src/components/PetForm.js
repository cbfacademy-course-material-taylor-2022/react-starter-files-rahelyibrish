import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [colors, setColors] = useState("");
  const [, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <React.Fragment>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Pet's Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
          <br />
          <label>
            Colors:{" "}
            <input
              type="text"
              value={colors}
              onChange={(e) => {
                setColors(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        <input type="submit" value="Submit" id="submit-button" />
      </form>
      <div id="results">
        <h3>Results</h3>
        Name: {name}
        <br />
        Age: {age}
        <br />
        Colors: {colors}
      </div>
    </React.Fragment>
  );
};

export default PetForm;

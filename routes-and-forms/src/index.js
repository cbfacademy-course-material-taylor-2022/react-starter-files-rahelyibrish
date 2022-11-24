import { React, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PetForm from "./components/PetForm";

export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li>
          <Link to="/"> All Pets </Link>
        </li>
        <li>
          <Link to="/kittens"> Kittens </Link>
        </li>
        <li>
          <Link to="/puppies"> Puppies </Link>
        </li>
        <li>
          <Link to="/ducklings"> Ducklings </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="kittens" element={<Kittens />} />
        <Route path="puppies" element={<Puppies />} />
        <Route path="ducklings" element={<Ducklings />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const animals = ["Giraffe", "Monkey", "Elephant", "Lion"];
  const [giraffe] = animals; // {animals}'s

  const [animal, setAnimal] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setAnimal("Lama");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <button type="submit">Click Me!</button>
      <h1>All Pets</h1>
      <section>This is the page for all your {animal} needs</section>
      <img src="imgs/kitten.jpg" alt="Kitten" />
      <img src="imgs/puppy.jpg" alt="Puppy" />
      <img src="imgs/duckling.jpg" alt="Duckling" />
      <PetForm />
    </form>
  );
}

function Kittens() {
  return (
    <>
      <h1>Kittens</h1>
      <section>This is the cats page</section>
      <img src="imgs/kitten.jpg" alt="Kitten" />
    </>
  );
}

function Puppies() {
  return (
    <>
      <h1>Puppies</h1>
      <section>This is the puppies page</section>
      <img src="imgs/puppy.jpg" alt="Puppies" />
    </>
  );
}

function Ducklings() {
  return (
    <>
      <h1>Ducklings</h1>
      <section>This is the ducklings page</section>
      <img src="imgs/duckling.jpg" alt="Duckling" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

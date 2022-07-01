import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grandad from "./components/Grandad";
import { Container } from "@mui/material";

function App() {
  // const lastName = 'Smith';
  const [lastName, setLastName] = useState("Smith");
  const [fistName, setFirstName] = useState("Smith");

  return (
    <>
      <Container>
        <Grandad lastName={lastName} food="chips" setName={setLastName} />
      </Container>
    </>
  );
}

export default App;

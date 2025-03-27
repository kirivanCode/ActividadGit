import React from "react";
import ElonBloc from "./components/ElonBloc";
import StarshipCard from "./components/StarshipCard";
import StarlinkCard from "./components/StarlinkCard";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#007bff", marginTop: "20px" }}>Bloc de Elon Musk</h1>
      <ElonBloc />
   
      <StarshipCard />
      <StarlinkCard />
    </div>
  );
}

export default App;

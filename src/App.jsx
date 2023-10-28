// import { useState } from 'react'

import "./App.css";
import { InspirationalHomepage } from "./components/InspirationalHomepage/InspirationalHomepage";
import "../src/Background-CodeCademy-Homepage.jpg";

function App() {
  return (
    <div className="container">
      <i className="fas fa-chevron-left arrow-left" ></i>
      <i className="fas fa-chevron-right arrow-right" ></i>
      <InspirationalHomepage />
    </div>
  );
}

export default App;

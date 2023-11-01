import { useState, useEffect } from 'react';
import "./App.css";
import { InspirationalHomepage } from "./components/InspirationalHomepage/InspirationalHomepage";
import image1 from './Background-CodeCademy-Homepage.jpg';
import image2 from './Background-CodeCademy-Homepage2.jpg';

function App() {
  const [backgroundImage, setBackgroundImage] = useState(image1);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, [backgroundImage]);

  const cycleImages = () => {
    setBackgroundImage(backgroundImage === image1 ? image2 : image1);
  }

  return (
    <div className="background">
      <i className="fas fa-chevron-left arrow-left" onClick={cycleImages}></i>
      <i className="fas fa-chevron-right arrow-right" onClick={cycleImages}></i>
      <InspirationalHomepage />
    </div>
  );
}

export default App;

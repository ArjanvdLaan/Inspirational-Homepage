import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { InspirationalHomepage } from "./components/InspirationalHomepage/InspirationalHomepage";

const App = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const cachedImages = localStorage.getItem("images");
      if (cachedImages) {
        setImageUrls(JSON.parse(cachedImages));
      } else {
        const responses = await Promise.all(
          Array(5)
            .fill()
            .map(() =>
              axios.get("https://api.unsplash.com/photos/random?query=dark,nature&w=1920", {
                headers: {
                  Authorization: `Client-ID ${
                    import.meta.env.VITE_IMAGES_API_KEY
                  }`,
                },
              })
            )
        );

        const urls = responses.map((response) => response.data.urls.full);
        setImageUrls(urls);

        // Cache the images
        localStorage.setItem("images", JSON.stringify(urls));
      }
    } catch (error) {
      if (error.response) {
        // De aanvraag werd gemaakt en de server reageerde met een statuscode
        // die buiten het bereik van 2xx valt
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Het verzoek werd gemaakt maar er kwam geen reactie
        console.log(error.request);
      } else {
        // Iets ging mis bij het maken van het verzoek
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  // function clearImages() {
  //   localStorage.removeItem("images");
    
    
  // }
  // clearImages();

  const cycleImages = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex(
        (oldIndex) => (oldIndex - 1 + imageUrls.length) % imageUrls.length
      );
    } else if (direction === "right") {
      setCurrentImageIndex((oldIndex) => (oldIndex + 1) % imageUrls.length);
    }
  };

  return (
    <>
      <div className="App">
        <div className="background">
          {imageUrls.length > 0 && (
            <img src={imageUrls[currentImageIndex]} loading="lazy" alt="background image" />
          )}
        </div>
        <div className="inspirational-homepage">
          <InspirationalHomepage />
        </div>
      </div>
      <i
        className="fas fa-chevron-left arrow-left"
        onClick={() => cycleImages("left")}
      ></i>
      <i
        className="fas fa-chevron-right arrow-right"
        onClick={() => cycleImages("right")}
      ></i>
    </>
  );
};

export default App;

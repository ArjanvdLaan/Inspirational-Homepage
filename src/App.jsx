import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { InspirationalHomepage } from "./components/InspirationalHomepage/InspirationalHomepage";

const App = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // every time component mounts, fetch images
  useEffect(() => {
    fetchImages();
  }, []);


  // preload images to show them faster
  useEffect(() => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, [imageUrls]);

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
              axios.get("https://api.unsplash.com/photos/random?query=nature&w=30&h=30&blur=10", {
                headers: {
                  Authorization: `Client-ID ${
                    import.meta.env.VITE_IMAGES_API_KEY
                  }`,
                },
              })
            )
        );
  
        const lowQualityUrls = responses.map((response) => response.data.urls.full);
        setImageUrls(lowQualityUrls);
  
        const highQualityResponses = await Promise.all(
          Array(5)
            .fill()
            .map(() =>
              axios.get("https://api.unsplash.com/photos/random?query=nature&w=1920&h=1080", {
                headers: {
                  Authorization: `Client-ID ${
                    import.meta.env.VITE_IMAGES_API_KEY
                  }`,
                },
              })
            )
        );
  
        const highQualityUrls = highQualityResponses.map((response) => response.data.urls.full);
        setImageUrls(highQualityUrls);
  
        // Cache the images
        localStorage.setItem("images", JSON.stringify(highQualityUrls));
      }
    } catch (error) {
      if (error.response) {
        // checking different error responses
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Request made, no response received
        console.log(error.request);
      } else {
        // Something happened in setting up the request
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };
  // clear images from local storage
  // function clearImages() {
  //   localStorage.removeItem("images");
  // }
  // clearImages();

  // cycle through images
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

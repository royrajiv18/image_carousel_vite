import { useState } from "react";
import "./App.css";

function App() {
  const [imageId, setImageId] = useState(0);
  const handlePrevClick = () => {
    if (imageId == 0) {
      setImageId(imageSet.length - 1);
    } else {
      setImageId(imageId - 1);
    }
  };
  const handleNextClick = () => {
    if (imageId == imageSet.length - 1) {
      setImageId(0);
    } else {
      setImageId(imageId + 1);
    }
  };
  const imageSet = [
    "https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-preview.jpg",
    "https://wallhalla.com/thumbs/42",
    "https://wallpapers.com/images/hd/random-background-1920-x-1200-33i6p2yl62j0oet3.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1000/657/147/random-hd-wallpaper-preview.jpg",
    "https://wallpapersmug.com/large/56941d/random-spikes-abstract-texture.jpg",
  ];
  return (
    <>
      <div className="carousel-container">
        <button onClick={handlePrevClick}>Prev</button>
        <img className="carousel-image" alt="image" src={imageSet[imageId]} />
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { imageSet } from "./constants";

function App() {
  const [imageId, setImageId] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [imageId]);

  const handlePrevClick = () => {
    if (imageId == 0) {
      setImageId(imageSet.length - 1);
    } else {
      setImageId(imageId - 1);
    }
  };
  const handleNextClick = () => {
    setImageId((imageId + 1) % imageSet.length);
  };

  return (
    <>
      <div className="carousel-container">
        <button onClick={handlePrevClick}>Prev</button>
        {imageSet.map((item, i) => (
          <img
            key={item}
            className={
              "carousel-image" +
              " " +
              (imageId === i ? "block-display" : "none-display")
            }
            alt="image"
            src={item}
          />
        ))}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
}

export default App;

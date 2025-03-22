import { useState, useEffect } from "react";
import image1 from "@Assets/projectsData/astroflap/astroflap-2.png";
import image2 from "@Assets/projectsData/foxrunner/foxrunner-2.png";
import { Container } from "./styles";

const images = [image1, image2];

const CoverPhoto = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
    return(
        <Container bgimage={images[currentIndex]}/>
    )
}

export default CoverPhoto;
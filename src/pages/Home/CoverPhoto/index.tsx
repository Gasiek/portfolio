import { useState, useEffect } from "react";
import image1 from "@Assets/projectsData/alien-defense/alien-defense.png";
import image2 from "@Assets/projectsData/once-upon-a-conquest/once-upon-a-conquest-5.png";
import image3 from "@Assets/projectsData/astroflap/astroflap-2.png";
import image4 from "@Assets/projectsData/vr-juggling-simulator/vr-juggling-simulator-1.png";
import { Container } from "./styles";

const images = [image1, image2, image3, image4];

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
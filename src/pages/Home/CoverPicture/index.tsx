import coverPicture from '@Assets/images/cover-picture.jpg';
import { useEffect, useState } from 'react';
import { Container } from './styles';

const images = [coverPicture];

const CoverPicture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return <Container bgimage={images[currentIndex]} />;
};

export default CoverPicture;

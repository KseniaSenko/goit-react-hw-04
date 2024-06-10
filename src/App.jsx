import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { getImages } from "./image-api";
import ImageGallery from "./ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImages() {
      const fetchedImages = await getImages("dog");
      setImages(fetchedImages);

      // console.log(fetchedImages);
    }
    fetchImages();
  }, []);
  console.log(images);

  return (
    <>
      <SearchBar />
      <ImageGallery items={images} />
    </>
  );
}

export default App;

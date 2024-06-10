import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

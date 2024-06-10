const ImageCard = ({ item }) => {
  return (
    <a href={item.urls.full}>
      <img src={item.urls.full} alt={item.alt_description} width={360} />
    </a>
  );
};

export default ImageCard;

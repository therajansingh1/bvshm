import { listOfImage } from "../utils/imgArray";
const Gallery = () => {
  console.log(listOfImage);
  return (
    <div className="photos-container">
      <div className="photos">
        {listOfImage.map((item) => {
          console.log(item);
          return (
            <img className="image" key={item.id} src={item.URL} alt="gallery" />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

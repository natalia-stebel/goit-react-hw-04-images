
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem"


export const ImageGallery = ({ images, onOpenModal}) => {
  return (
    <ul >
      {images.map(image => (
        <ImageGalleryItem openModal={onOpenModal} key={image.id} image={image.webformatURL} />
      ))}
    </ul>
  );
};


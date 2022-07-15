
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem"


export const ImageGallery = ({ items, onOpenModal}) => {
  return (
    <ul >
      {items.map(item => (
        <ImageGalleryItem openModal={onOpenModal} key={item.id} image={item.webformatURL} />
      ))}
    </ul>
  );
};


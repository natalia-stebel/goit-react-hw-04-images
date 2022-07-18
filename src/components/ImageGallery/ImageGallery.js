
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"
import PropTypes from 'prop-types';

export const ImageGallery =({images, onClick}) => {
    return (
        <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem 
        image={image} 
        key={image.id} 
        alt={image.tag} 
        className={css.photocard}
        src={image.webformatURL}
        onClickLargeImg={onClick}
        largeImageURL={image.largeImageURL}/>
      ))}
    </ul>
    )
}
    
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};


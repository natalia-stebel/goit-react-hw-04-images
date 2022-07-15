
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, image, onOpenModal }) => {
  
    return (
      <li key={id}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          data-img={image.largeImageURL}
          onClick={onOpenModal}
        />
      </li>
    );
 
};

  ImageGalleryItem.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    ),
   
  }


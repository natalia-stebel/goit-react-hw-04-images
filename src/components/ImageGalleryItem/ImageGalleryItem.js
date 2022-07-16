
import PropTypes from 'prop-types';

export const ImageGalleryItem =({image, id}) =>{
    
  
    return (
      <li key={id}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          data-img={image.largeImageURL}
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


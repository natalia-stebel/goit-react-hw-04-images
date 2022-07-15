
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ items, onOpenModal }) => {
  return items.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li key={id}>
        <img
          src={webformatURL}
          alt={tags}
          data-img={largeImageURL}
          onClick={onOpenModal}
        />
      </li>
    );
  });
};

  ImageGalleryItem.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    ),
    onOpenModal: PropTypes.func.isRequired,
  }


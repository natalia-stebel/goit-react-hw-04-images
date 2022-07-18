
import PropTypes from 'prop-types';
import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem =({id,
  src,
  largeImageURL,
  tags,
  onClickLargeImg,}) =>{
    
    const handleClickImage = event =>
    onClickLargeImg(event.target.dataset.source);
  
    return (
      <li className={css.ImageGalleryItem} key={id}>
        <img
          src={src}
          alt={tags}
          data-source={largeImageURL}
          onClick={handleClickImage}
          className={css.ImageGalleryItemimage}
        />
      </li>
    );
    
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number,
  tags: PropTypes.string,
  onClickLargeImg: PropTypes.func.isRequired,
};
   
  
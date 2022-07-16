
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem"


export const ImageGallery =({images}) => {
    return (
        <ul>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} alt={image.tag}/>
      ))}
    </ul>
    )
}
    


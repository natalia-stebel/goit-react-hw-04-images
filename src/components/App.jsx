import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';
import Searchbar from './Searchbar/Searchbar';
import * as API from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { Spinner } from './Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const [originalImageURL, setOriginalImageURL] = useState('');
  const [hits, setHits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery || !page) {
      return;
    }
    getImages();
  }, [searchQuery, page]);


  const searchQuerySubmit = q => {
    setSearchQuery(q);
    setPage(1);
    setImages([]);
    setIsLoading(true);
    setError(null);
    setHits([]);
  };

  const getImages = () => {
    const option = { searchQuery, page}
    setIsLoading(true);

    API.fetchImage(option)
      .then(data => {
        if (data.hits.length === 0) {
          return toast.error('There is no image with this name', {
            position: 'top-center'
          });
        }

        if (page === 1) {
          setHits(hits);
          setImages(images)
          }
        else {
          (({ hits }) => setImages([...images, ...hits]))
            setIsLoading(false);
      ;}
        
      
      .catch(error => setError(error))
      .finally(() => 
        setIsLoading(false);
        );
      
  };

  const handleClickImage = largeImage => {
    setOpenModal(largeImage);
  };

  const openModal = largeImage => {
    setOpenModal(true);
    setOriginalImageURL(largeImage);
  };

  const closeModal = () => {
    setOpenModal(false), setOriginalImageURL('');
  };

  const loadMoreClick = () => {
    setPage(page + 1 );
    return;
  };

  const buttonIsShow = images.length > 0 && !isLoading;

  return (
    <div>
      <GlobalStyle />

      <Searchbar onSubmit={searchQuerySubmit} />
      <ImageGallery images={images} onClick={handleClickImage} />

      {openModal && (
        <Modal largeImage={originalImageURL} closeModal={closeModal}></Modal>
      )}
      {isLoading && <Spinner />}
      {buttonIsShow && <Button onClick={loadMoreClick} />}
      <ToastContainer autoClose={2000} />
   </div>
  );
};

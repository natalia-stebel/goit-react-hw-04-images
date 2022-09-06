import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';
import Searchbar from './Searchbar/Searchbar';
import { fetchImage } from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { Spinner } from './Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [originalImageURL, setOriginalImageURL] = useState('');
  const [hits, setHits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const getImage = async () => {
      try {
        setIsLoading(true);

        const images = await fetchImage(searchQuery, page);
        if (page === 1) {
          setHits(hits);
          setImages(images);
        } else {
          setImages([...images, ...hits]);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        toast.error('Ooops..try again', {
          position: 'top-center',
        });
      } finally {
        setIsLoading(false);
      }
    };

    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, page]);

  const searchQuerySubmit = data => {
    setSearchQuery(data);
    setPage(1);
    setImages([]);
    setIsLoading(true);
    setError(null);
    // setHits([]);
  };

  const handleClickImage = largeImage => {
    setOpenModal(largeImage);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = url => {
    setOriginalImageURL(url);
    toggleModal();
  };

  const loadMoreClick = () => {
    setPage(page + 1);
    return;
  };

  const buttonIsShow = images.length > 0 && !isLoading;

  return (
    <div>
      <GlobalStyle />

      <Searchbar onSubmit={searchQuerySubmit} />
      {error && <p>Try again</p>}

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

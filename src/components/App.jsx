import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import {SearchBar} from './Searchbar/Searchbar';
import * as API from "./services/api"
import {ImageGallery} from "./ImageGallery/ImageGallery"
import  Modal  from './Modal/Modal';
import Button from "./Button/Button"
import {Spinner} from "./Loader/Loader"

export class App extends Component {

  state={
    images: [],
    isLoading: false,
    page:1,
    searchQuery: '',
    totalHits: 0,
    originalImageURL: null,
    openModal: false,
  
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }


  searchQuerySubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  getImages =() =>{

  const {searchQuery,page} = this.state;
 
  this.setState({ isLoading: true });


  API.fetchImage(searchQuery, page)
  .then(data => {

    if (data.length === 0) {
      return alert('There is no image with this name');
    }

    if (page === 1) {
      this.setState({
        totalHits: data.totalHits,
        images: data.hits,
        
      });
    } else {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        page: prevState.page + 1,
        isLoading: false,
      }));

      window.scrollBy({
        top: document.body.clientHeight,
        behavior: 'smooth',
      });
    }
    
  })
  .catch(error => this.setState({ error }))
  .finally(() => this.setState({ isLoading: false }));

  }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };
  
  handleClickImage = largeImage => {
    this.openModal(largeImage);
  };

  openModal = largeImage =>
    this.setState({ openModal: true, originalImageURL: largeImage });

  closeModal = () => this.setState({ openModal: false, originalImageURL: '' });

 loadMoreClick = () => {
    this.setState( prevState => ({
      page: prevState.page + 1,
    }))
  }


  render() {

    const{images, openModal, originalImageURL, isLoading}= this.state
    const buttonIsShow = images.length > 0 && !isLoading;

    return (
      <>
        <GlobalStyle />
      
      <SearchBar onSubmit={this.searchQuerySubmit}/>
      <ImageGallery images={images} onClick={this.handleClickImage} />
      
      {openModal && (
          <Modal
            largeImage={originalImageURL}
            closeModal={this.closeModal}
          ></Modal>
        )}
        {isLoading && <Spinner />}
        { buttonIsShow && <Button onClick={this.loadMoreClick} />}
        
    </>)
  }
  
};


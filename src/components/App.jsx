import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import {SearchBar} from './Searchbar/Searchbar';
import * as API from "./services/api"
import {ImageGallery} from "./ImageGallery/ImageGallery"
import  Modal  from './Modal/Modal';


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
    if (page === 1) {
      this.setState({
        totalHits: data.totalHits,
        images: data.hits,
        
      });
    } else {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  
  handleClickImage = largeImage => {
    this.openModal(largeImage);
  };

  openModal = largeImage =>
    this.setState({ openModal: true, originalImageURL: largeImage });

  closeModal = () => this.setState({ openModal: false, originalImageURL: '' });




  render() {

    const{images, openModal, originalImageURL}= this.state

    return (
      <>
        <GlobalStyle />
      {this.state.isLoading && <div>LOADING</div>}
      <SearchBar onSubmit={this.searchQuerySubmit}/>
      <ImageGallery images={images} onClick={this.handleClickImage} />
      
      {openModal && (
          <Modal
            largeImage={originalImageURL}
            closeModal={this.closeModal}
          ></Modal>
        )}
        
    </>)
  }
  
};


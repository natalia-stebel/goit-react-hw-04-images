import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { fetchImage } from './services/api';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {

  state = {

    page: 1,
    showModal: false,
    images: [],
    totalHits: 0,
    searchQuery: '',
    isLoading: false,
  
  };

  searchImages() {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    fetchImage(searchQuery, page)
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
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }  
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenModal = e => {
    this.setState({
      largeImage: e.target.dataset.img,
    });
    this.toggleModal();
  };
  
  onSubmit = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    return (
      <>
      <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery items={this.state.images} onClick={this.toggleModal} />
        
    </>)
  }
  
};


import React, { Component } from 'react';

import {SearchBar} from './Searchbar/Searchbar';
import * as API from "./services/api"
import {ImageGallery} from "./ImageGallery/ImageGallery"

export class App extends Component {

  state={
    images: [],
    isLoading: false,
    page:1,
    query:"",
    totalHits: 0,

  }

  onChangeQuery = query => {
    this.setState({ query: query });
  };

  getImages =() =>{

  const {query,page} = this.state;

  this.setState({ isLoading: true });

  API.fetchImage(query, page)
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
  

//    fetchImage = async (values) =>{
//     try{
//     this.setState({isLoading: true})
//     const item = await API.fetchImage(values);
//     this.setState(state =>({images: [...state.images, item],
//     isLoading: false,
//   }));
// } catch (error) {
//   console.log(error);
// }
    
//   }

  

  render() {

    const{images}= this.state

    return (
      <>
      {this.state.isLoading && <div>LOADING</div>}
      <SearchBar onSubmit={this.getImages}/>
      <ImageGallery images={images} toggleModal={this.toggleModal}/>
        
        
    </>)
  }
  
};


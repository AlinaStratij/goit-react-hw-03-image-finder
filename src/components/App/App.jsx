import React from 'react';

import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
// import Modal from 'components/Modal/Modal';
import { AppWrapper } from 'components/App/App.styled';

export class App extends React.Component {
  state = {
    showModal: false,
  };

  render() {
    return (
      <AppWrapper>
        <SearchBar></SearchBar>
        <ImageGallery></ImageGallery>
        <Button></Button>
        <Loader></Loader>
        {/* <Modal></Modal> */}
      </AppWrapper>
    );
  }
}

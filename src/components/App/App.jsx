import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

export const App = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <ImageGallery></ImageGallery>
      <Button></Button>
      <Loader></Loader>
      <Modal></Modal>
    </div>
  );
};

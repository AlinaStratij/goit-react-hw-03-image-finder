import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ openModal }) {
  return (
    <>
      <ul className="gallery">
        <button type="button" onClick={openModal}>
          Open mlodal
        </button>
        <ImageGalleryItem></ImageGalleryItem>
      </ul>
    </>
  );
}

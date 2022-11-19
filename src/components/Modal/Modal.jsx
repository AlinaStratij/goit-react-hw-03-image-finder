import { ModalOverlay, ModalWrapper } from 'components/Modal/Modal.styled';

export default function Modal({ image }) {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <img src={image} alt="" />
      </ModalWrapper>
    </ModalOverlay>
  );
}

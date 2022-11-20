import React from 'react';
import {
  ModalOverlay,
  ModalWrapper,
  ModalBtn,
} from 'components/Modal/Modal.styled';

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener(`keydown`, e => {
      console.log(e.code);
      if (e.code === `Escape`) {
        this.props.onModalClose();
      }
    });
  }
  render() {
    return (
      <ModalOverlay>
        <ModalWrapper>
          <img src="" alt="" />
          <ModalBtn type="button"></ModalBtn>
        </ModalWrapper>
      </ModalOverlay>
    );
  }
}

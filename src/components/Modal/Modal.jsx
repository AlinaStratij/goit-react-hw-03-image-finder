import React from 'react';
import { ModalOverlay, ModalWrapper } from 'components/Modal/Modal.styled';

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener(`keydown`, this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === `Escape`) {
      this.props.onModalClose();
    }
  };
  handleBackdropClick = e => {
    console.log(`click backdrop`);
    if (e.currentTarget === e.target) {
      this.props.onModalClose();
    }
  };

  render() {
    return (
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalWrapper>
          <img src="" alt="" />
        </ModalWrapper>
      </ModalOverlay>
    );
  }
}

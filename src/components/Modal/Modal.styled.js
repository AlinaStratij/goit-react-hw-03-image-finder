import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWrapper = styled.div`
  width: 700px;
  height: 500px;
  background-color: #eef2f2;
`;
export const ModalBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: #ff00d7;
`;

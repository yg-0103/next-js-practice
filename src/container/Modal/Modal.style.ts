import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  padding: 30px;
  max-height: 700px;
  overflow: auto;
  background-color: #fff;
`;

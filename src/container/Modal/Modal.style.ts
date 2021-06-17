import Button from 'components/Button';
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
  position: relative;
  padding: 30px;
  max-height: 700px;
  overflow: auto;
  background-color: #fff;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const MoreButton = styled(Button)`
  margin-top: 30px;
  width: 100%;
  height: 40px;
`;

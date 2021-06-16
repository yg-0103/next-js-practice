import styled, { css } from 'styled-components';

export const Button = styled.button<{ active: boolean }>`
  border: none;
  border-radius: 5px;
  min-width: 50px;
  min-height: 30px;
  &:hover {
    background-color: #cff8cf;
  }

  a {
    padding: 5px 15px;
    display: block;
    width: 100%;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #cff8cf;
    `}
`;

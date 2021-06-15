import React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button<ButtonProps>``;

export default Button;

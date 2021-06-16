import React from 'react';
import * as S from './Button.style';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <S.Button onClick={onClick}>{children}</S.Button>;
}

export default Button;

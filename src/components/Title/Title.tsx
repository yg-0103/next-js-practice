import React from 'react';
import * as S from './Title.style';

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <S.Title>{children}</S.Title>;
}

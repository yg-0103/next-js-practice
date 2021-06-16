import React from 'react';
import * as S from './Title.style';

interface TitleProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export default function Title({ children, as }: TitleProps) {
  return <S.Title as={as}>{children}</S.Title>;
}

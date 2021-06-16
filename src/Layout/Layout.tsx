import React from 'react';
import * as S from './Layout.style';
import Title from 'components/Title';
import Navigation from 'components/Navigation';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.LayoutContainer>
      <Title>👩🏻‍💻 나만의 유튜브 강의실 👨🏻‍💻</Title>
      <Navigation />
      {children}
    </S.LayoutContainer>
  );
}

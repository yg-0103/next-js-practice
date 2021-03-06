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
      <Title>π©π»βπ» λλ§μ μ νλΈ κ°μμ€ π¨π»βπ»</Title>
      <Navigation />
      {children}
    </S.LayoutContainer>
  );
}

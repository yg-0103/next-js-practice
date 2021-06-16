import React from 'react';
import * as S from './Button.style';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function Button({ children, href, onClick }: ButtonProps) {
  const router = useRouter();

  return (
    <S.Button onClick={onClick} active={href === router.pathname}>
      {href ? <Link href={`${href}`}>{children}</Link> : children}
    </S.Button>
  );
}

export default Button;

import React from 'react';
import * as S from './Button.style';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  href?: string;
  onClick?: () => void;
}

function Button({ children, href, onClick, value, className }: ButtonProps) {
  const router = useRouter();

  return (
    <S.Button
      className={className}
      value={value}
      onClick={onClick}
      active={href === router.pathname}
    >
      {href ? <Link href={`${href}`}>{children}</Link> : children}
    </S.Button>
  );
}

export default Button;

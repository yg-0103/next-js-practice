import * as S from './Navigation.style';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from 'container/Modal';
export default function Navigation() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <S.Navigation>
      <S.NavigationItem>
        <Button href="/">👁️ 볼 영상</Button>
      </S.NavigationItem>
      <S.NavigationItem>
        <Button href="/watched">✅ 본 영상</Button>
      </S.NavigationItem>
      <S.NavigationItem>
        <Button href="/like">👍🏻 좋아요 한 영상</Button>
      </S.NavigationItem>
      <S.NavigationItem>
        <Button onClick={handleOpen}>🔍</Button>
      </S.NavigationItem>
      {open &&
        createPortal(
          <Modal onClose={handleClose} />,
          document.getElementById('modal') as HTMLElement
        )}
    </S.Navigation>
  );
}

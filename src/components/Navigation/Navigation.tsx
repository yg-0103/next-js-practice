import * as S from './Navigation.style';
import Button from 'components/Button';

export default function Navigation() {
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
        <Button>🔍</Button>
      </S.NavigationItem>
    </S.Navigation>
  );
}

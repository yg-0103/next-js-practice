import * as S from './Navigation.style';
import Button from 'components/Button';

export default function Navigation() {
  return (
    <S.Navigation>
      <S.NavigationItem>
        <Button>👁️ 볼 영상</Button>
      </S.NavigationItem>
      <S.NavigationItem>
        <Button>✅ 본 영상</Button>
      </S.NavigationItem>
      <S.NavigationItem>
        <Button>👍🏻 좋아요 한 영상</Button>
      </S.NavigationItem>
      <S.NavigationItem>
        <Button>🔍</Button>
      </S.NavigationItem>
    </S.Navigation>
  );
}

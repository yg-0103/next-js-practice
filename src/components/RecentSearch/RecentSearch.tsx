import * as S from './RecentSearch.style';
import Button from 'components/Button';

export default function RecentSearch() {
  return (
    <S.RecentSearchContainer>
      <span>최근 검색어:</span>
      <S.SearchWordList>
        <S.SearchWordItem>
          <Button>javascript</Button>
        </S.SearchWordItem>
        <S.SearchWordItem>
          <Button>react</Button>
        </S.SearchWordItem>{' '}
        <S.SearchWordItem>
          <Button>nextjs</Button>
        </S.SearchWordItem>
      </S.SearchWordList>
    </S.RecentSearchContainer>
  );
}

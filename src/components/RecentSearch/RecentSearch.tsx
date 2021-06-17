import * as S from './RecentSearch.style';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { getYoutube } from 'modules/youtube/slice';

interface RecentSearchProps {
  recentSearchWord: string[];
  onClick: (keyword: string) => void;
}

export default function RecentSearch({
  recentSearchWord,
  onClick,
}: RecentSearchProps) {
  const dispatch = useDispatch();

  return (
    <S.RecentSearchContainer>
      <span>최근 검색어:</span>
      <S.SearchWordList>
        {recentSearchWord &&
          recentSearchWord.map(keyword => (
            <S.SearchWordItem key={keyword}>
              <Button
                value={keyword}
                onClick={() => {
                  dispatch(getYoutube(keyword));
                  onClick(keyword);
                }}
              >
                {keyword}
              </Button>
            </S.SearchWordItem>
          ))}
      </S.SearchWordList>
    </S.RecentSearchContainer>
  );
}

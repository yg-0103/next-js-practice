import * as S from './Modal.style';
import Title from 'components/Title';
import SearchForm from 'container/SearchForm';
import RecentSearch from 'components/RecentSearch';
import YoutubeList from 'container/YoutubeList';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearYoutubeData,
  getYoutube,
  loadMoreYoutube,
} from 'modules/youtube/slice';
import { RootState } from 'modules';

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [keyword, setKeyword] = useState('');
  const { data: youtubeData } = useSelector(
    (state: RootState) => state.youtube
  );
  const [recentSearchWord, setRecentSearchWord] = useLocalStorage<string[]>(
    'keywords',
    []
  );
  const dispatch = useDispatch();

  const keywordRef = useRef('');

  const handleChangeKeyword = useCallback(
    (keyword: string) => {
      setKeyword(keyword);
      keywordRef.current = keyword;
    },
    [keyword]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(getYoutube(keyword));
      setRecentSearchWord(prevState =>
        [...new Set([keyword, ...prevState])].slice(0, 5)
      );
      setKeyword('');
    },
    [keyword]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'initial';
      dispatch(clearYoutubeData());
    };
  }, []);

  return (
    <S.Overlay
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return;
        onClose();
      }}
    >
      <S.ModalContainer>
        <Title>🔎 유튜브 검색</Title>
        <SearchForm
          keyword={keyword}
          onSubmit={handleSubmit}
          onChange={e => handleChangeKeyword(e.target.value)}
        />
        <RecentSearch
          recentSearchWord={recentSearchWord}
          onClick={handleChangeKeyword}
        />
        {youtubeData && (
          <>
            <YoutubeList videoList={youtubeData.items} />
            <S.CloseButton onClick={onClose}>x</S.CloseButton>
            <S.MoreButton
              onClick={() =>
                dispatch(
                  loadMoreYoutube({
                    keyword: keywordRef.current,
                    nextPageToken: youtubeData.nextPageToken || '',
                  })
                )
              }
            >
              더 보기
            </S.MoreButton>
          </>
        )}
      </S.ModalContainer>
    </S.Overlay>
  );
}

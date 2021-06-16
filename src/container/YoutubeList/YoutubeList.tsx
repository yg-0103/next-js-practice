import * as S from './YoutubeList.style';
import YoutubeItem from 'components/YoutubeItem';
import { RootState } from 'modules';
import { useSelector } from 'react-redux';

export default function YoutubeList() {
  const { data } = useSelector((state: RootState) => state.youtube);

  return (
    <S.YoutubeListContainer>
      {data ? (
        data.items.map(({ id, etag, snippet }) => (
          <YoutubeItem
            key={etag}
            title={snippet.title}
            channelTitle={snippet.channelTitle}
            publishedAt={snippet.publishedAt}
            videoId={id.videoId}
          />
        ))
      ) : (
        <div>검색결과가 없습니다.</div>
      )}
    </S.YoutubeListContainer>
  );
}

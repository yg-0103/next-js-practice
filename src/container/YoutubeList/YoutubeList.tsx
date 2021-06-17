import * as S from './YoutubeList.style';
import YoutubeItem from 'components/YoutubeItem';
import { Item } from 'types/youtube';
import { SaveVideoData } from 'types/saveVideo';

interface VideoListProps {
  videoList: Item[] | SaveVideoData[];
  save?: boolean;
}

export default function YoutubeList({ videoList, save }: VideoListProps) {
  return (
    <S.YoutubeListContainer>
      {videoList ? (
        videoList.map(({ id, snippet }) => (
          <YoutubeItem key={id.videoId} id={id} snippet={snippet} save={save} />
        ))
      ) : (
        <div>검색결과가 없습니다.</div>
      )}
    </S.YoutubeListContainer>
  );
}

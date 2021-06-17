import * as S from './YoutubeItem.style';
import Title from 'components/Title';
import { timeFormat } from 'utils/timeFormat';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { addVideo } from 'modules/saveVideo/slice';
import { ID, Snippet } from 'types/youtube';

interface YoutubeItemProps {
  id: ID;
  snippet: Snippet;
  save?: boolean;
}

export default function YoutubeItem({
  id,
  snippet,
  save = false,
}: YoutubeItemProps) {
  const dispatch = useDispatch();

  return (
    <S.YoutubeItemContainer>
      {/* <Youtube videoId={videoId} opts={opts} /> */}
      <iframe
        key={snippet.title}
        src={`https://www.youtube.com/embed/${id.videoId}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
        style={{ border: 'none' }}
        width="100%"
        height="200px"
      ></iframe>
      <Title as="h2">{snippet.title}</Title>
      <span>{snippet.channelTitle}</span>
      <span>{timeFormat(`${snippet.publishedAt}`)}</span>
      {!save && (
        <Button
          onClick={() =>
            dispatch(
              addVideo({
                id,
                snippet,
              })
            )
          }
        >
          저장
        </Button>
      )}
    </S.YoutubeItemContainer>
  );
}

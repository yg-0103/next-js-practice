import Youtube, { Options } from 'react-youtube';
import * as S from './YoutubeItem.style';
import Title from 'components/Title';
import { timeFormat } from 'utils/timeFormat';

interface YoutubeItemProps {
  videoId: string;
  title: string;
  publishedAt: Date;
  channelTitle: string;
}

export default function YoutubeItem({
  videoId,
  title,
  channelTitle,
  publishedAt,
}: YoutubeItemProps) {
  const opts: Options = {
    width: '100%',
    height: '200px',
    playerVars: {
      autoplay: 0,
      origin: 'https://www.youtube.com',
    },
  };

  return (
    <S.YoutubeItemContainer>
      <Youtube videoId={videoId} opts={opts} />
      <Title as="h2">{title}</Title>
      <span>{channelTitle}</span>
      <span>{timeFormat(`${publishedAt}`)}</span>
    </S.YoutubeItemContainer>
  );
}

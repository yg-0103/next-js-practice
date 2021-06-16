import axios from 'axios';
import { YoutubeData } from 'types/youtube';

export async function getYoutube(keyword: string) {
  const { data: youtubeData } = await axios.get<YoutubeData>(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_KEY}&q=${keyword}&maxResults=10&type=video&videoEmbeddable=true`
  );

  return youtubeData;
}

import axios from 'axios';
import { YoutubeData } from 'types/youtube';

export async function getYoutube(keyword: string) {
  const { data: youtubeData } = await axios.get<YoutubeData>(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_KEY}&q=${keyword}&maxResults=9&type=video&videoEmbeddable=true`
  );

  return youtubeData;
}

export async function getLoadMore(keyword: string, nextPageToken: string) {
  const { data: youtubeData } = await axios.get<YoutubeData>(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_KEY}&q=${keyword}&maxResults=9&pageToken=${nextPageToken}&type=video&videoEmbeddable=true`
  );

  return youtubeData;
}

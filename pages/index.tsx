import YoutubeList from 'container/YoutubeList';
import { RootState } from 'modules';
import { useSelector } from 'react-redux';
export default function Home() {
  const saveVideo = useSelector((state: RootState) => state.saveVideo);
  return <YoutubeList videoList={saveVideo} save={true} />;
}

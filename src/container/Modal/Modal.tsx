import * as S from './Modal.style';
import Title from 'components/Title';
import SearchForm from 'container/SearchForm';
import RecentSearch from 'components/RecentSearch';
import YoutubeList from 'container/YoutubeList';

export default function Modal() {
  return (
    <S.Overlay>
      <S.ModalContainer>
        <Title>🔎 유튜브 검색</Title>
        <SearchForm />
        <RecentSearch />
        <YoutubeList />
      </S.ModalContainer>
    </S.Overlay>
  );
}

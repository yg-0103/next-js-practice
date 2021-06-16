import * as S from './Modal.style';
import Title from 'components/Title';
import SearchForm from 'container/SearchForm';
import RecentSearch from 'components/RecentSearch';

export default function Modal() {
  return (
    <S.Overlay>
      <S.ModalContainer>
        <Title>🔎 유튜브 검색</Title>
        <SearchForm />
        <RecentSearch />
      </S.ModalContainer>
    </S.Overlay>
  );
}

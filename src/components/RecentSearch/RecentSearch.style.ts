import styled from 'styled-components';

export const RecentSearchContainer = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchWordList = styled.ul`
  display: flex;
  align-items: center;
`;

export const SearchWordItem = styled.li`
  button {
    padding: 5px 15px;
    margin-left: 10px;
  }
`;

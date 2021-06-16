import styled from 'styled-components';

export const YoutubeItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  h2 {
    max-width: 320px;
    text-align: left;
    font-size: 1rem;
    margin-bottom: 5px;
  }

  span {
    color: gray;
    font-size: 0.85rem;
  }
`;

import styled from 'styled-components';
import { media } from '@shared/lib';

const BusinessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: flex-start;

  .card-container {
    align-items: center;
  }

  ${media.desktop} {
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    grid-template-rows: 150px 1fr 1fr;
    column-gap: 1em;

    .header {
      grid-area: 1 / 1 / 1 / 1;
      margin: 0;
    }
    .card-container {
      grid-area: 2 / 2 / 4 / 5;
      justify-self: center;
    }
    .filter-bar {
      opacity: 1;
      grid-area: 2 / 1 / 3 / 1;
      align-self: start;
      position: sticky;
      top: 0;
    }
  }
`;

export { BusinessContainer };

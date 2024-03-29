import styled from 'styled-components';
import { media } from '@shared/lib';

const ExplorePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 0%;
  margin-bottom: 1em;
  gap: 0.4rem;

  ${media.tablet} {
    margin-top: 10em;
    flex-direction: row;
    gap: 1.2rem;
  }

  ${media.desktop} {
    margin-top: 10em;
  }
`;

export { ExplorePageContainer };

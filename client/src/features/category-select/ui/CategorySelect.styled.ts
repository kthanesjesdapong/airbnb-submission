import styled from 'styled-components';
import { media } from '@shared/lib';
const CategorySelectContainer = styled.div`
  
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 0%;
  margin-bottom: 1em;
  gap: .4rem;

  ${media.tablet} {
    margin-top: 2em;
    flex-direction: row;
    gap: 1.2rem;
  }
`;

export { CategorySelectContainer };
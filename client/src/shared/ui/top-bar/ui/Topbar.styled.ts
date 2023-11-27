import styled from 'styled-components';
// import { HTMLAttributes } from 'react';
import { media } from '@shared/lib';


// type LinksContainerProps = {
//   role: string;
// };

const LinksContainer = styled.div`
  display: none;

  ${media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    letter-spacing: .2px;
  }
`;

const LinkWrapper = styled.div`
  margin: 0.4rem;
`;

export { LinksContainer, LinkWrapper };
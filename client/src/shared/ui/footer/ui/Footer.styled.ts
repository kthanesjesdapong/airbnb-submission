import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import { media } from '@shared/lib';

type FooterContainerProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const FooterContainer = styled.footer<FooterContainerProps>`
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  svg {
    margin: 0 .4rem;
  }

  ${media.desktop} {
    margin-top: 2em;
    align-items: end;
  }
  ${media.widescreen} {
    margin-top: 3em;
    align-items: end;
  }
  ${media.uhd} {
    margin-top: 3.8em;
    align-items: end;
  }

`;

export { FooterContainer };
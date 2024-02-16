import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import { media } from '@shared/lib';

type FooterContainerProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const FooterContainer = styled.footer<FooterContainerProps>`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 1em;
  margin-right: 0.5em;
  align-items: end;
  justify-content: flex-end;
  font-size: 2rem;

  svg {
    margin: 0 0.4rem;
  }

  ${media.desktop} {
    margin-bottom: 2em;
    margin-right: 2em;
    align-items: end;
  }
  ${media.widescreen} {
    margin-bottom: 2em;
    margin-right: 2em;
    align-items: end;
  }
  ${media.uhd} {
    margin-bottom: 2em;
    margin-right: 3em;
    align-items: end;
  }
`;

export { FooterContainer };

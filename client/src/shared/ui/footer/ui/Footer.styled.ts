import styled from 'styled-components';
import { HTMLAttributes } from 'react';

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
`;

export { FooterContainer };
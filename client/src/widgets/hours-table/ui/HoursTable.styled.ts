import styled from 'styled-components';
import { media } from '@shared/lib';
import { HTMLAttributes } from 'react';

type HoursTableContainerProps = {
  $margin: string;
  width: number;
} & HTMLAttributes<HTMLDivElement>;

const HoursTableContainer = styled.div<HoursTableContainerProps>`
  display: flex;
  justify-content: end;
  width: 360px;
  margin: ${(p) => p.$margin};

  table {
    border-collapse: collapse;
  }

  span {
    font: 700 1rem ${(props) => props.theme.fonts.content};
  }

  p {
    margin: 0 0.5em 0.8em;
    font: 700 1.15rem ${(props) => props.theme.fonts.content};
    text-align: start;
  }

  tr {
    margin-bottom: 0.5em;
  }

  th {
    display: flex;
    margin-right: 1em;
  }

  li {
    margin: 0;
  }

  &ul {
    list-style: none;
  }

  ${media.tablet} {
    width: ${(p) => p.width}px;
  }

  ${media.widescreen} {
    width: ${(p) => `calc(${p.width}px + 100px)`};
    p {
      font: 900 1.2rem ${(props) => props.theme.fonts.content};
    }
  }
`;

export { HoursTableContainer };

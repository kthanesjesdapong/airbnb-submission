import styled, { keyframes, css } from 'styled-components';
import { ULProps } from '..';
import { media } from '@shared/lib';

type SideULProps = {
  $top: number;
  $height?: number;
} & ULProps;

const slide = (start: number, end: number) => keyframes`

  from {
    top: ${start}em;
  }
  to {
    bottom: ${end}em;
  }
`;

const SideUnorderedList = styled.ul<SideULProps>`
display: block;
  position: absolute;
  transition: all 0.4s ease-in-out;
  opacity: ${props => props.$visible ? '1' : '0'};

  list-style: none;

  background-color: rgb(26,26,26);
  z-index: 199;
  top: 0em;
  right: 0em;

  width: ${props => props.$width ? `${props.$width}%` : ''};
  height: 5000px;
  
  box-shadow: '10px 10px 5px rgba(0,0,0,.05)';

  padding: 3px 2px;  

  ${props => props.$visible && css`
  animation: ${slide(props.$start, props.$end)} 0.4s ease-in-out;
  `}
  
  ${media.desktop} {
    display: none;
  }

  `;
export { SideUnorderedList };

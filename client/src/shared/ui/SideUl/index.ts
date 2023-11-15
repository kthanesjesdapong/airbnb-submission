import styled, { keyframes, css } from 'styled-components';
import { ULProps } from '..';

// interface SideULProps extends ULProps {
//   $top: number;
// }

type SideULProps = {
  $top: number;
} & ULProps;

const slide = (start: number, end: number) => keyframes`

  from {
    right: ${start}em;
  }
  to {
    right: ${end}em;
  }
`;



const SideUnorderedList = styled.ul<SideULProps>`
  position: absolute;
  transition: all 0.4s ease-in-out;
  opacity: ${props => props.$visible ? '1' : '0'};
  list-style: none;
  background-color: rgba(0, 0, 0, 0.45);
  top: ${props => `${props.$top}em`};
  right: ${props => `${props.$end}em`};
  width: ${props => props.$width ? `${props.$width}%` : ''};
  box-shadow: '10px 10px 5px rgba(0,0,0,.05)';
  padding: 3px 2px;  
  ${props => props.$visible && css`
  animation: ${slide(props.$start, props.$end)} 0.4s ease-in-out;
  `}
  
  `;
export { SideUnorderedList };

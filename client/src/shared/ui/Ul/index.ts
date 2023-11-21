import styled, { keyframes, css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { media } from '@shared/lib';

export type ULProps = {
  $visible: boolean;
  $start: number;
  $end: number;
  $marginRight?: number;
  $width?: number;
} & HTMLAttributes<HTMLUListElement>;


const drop = (start: number, end: number) => keyframes`
  from {
    top: ${start}em;
  }
  to {
    top: ${end}em;
  }
`;

const UnorderedList = styled.ul<ULProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: all 0.4s ease-in-out;
  opacity: ${props => props.$visible ? '1' : '0'};
  list-style: none;
  top: ${props => `${props.$end}em`};
  ${props => props.$visible && css`
    animation: ${drop(props.$start, props.$end)} 0.4s ease-in-out;
    `}
    ${media.widescreen} {
      top: ${props => `calc(${props.$end}em + .4em)`};
      ${props => props.$visible && css`
    animation: ${drop(props.$start, props.$end + .4)} 0.4s ease-in-out;
    `}
    }


  `;


export { UnorderedList };
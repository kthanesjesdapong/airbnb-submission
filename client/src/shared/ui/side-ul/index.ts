import styled, { css } from 'styled-components';
import { ULProps } from '..';
import { media } from '@shared/lib';

type SideULProps = {
  $top: number;
  $height?: number;
  $expand?: string | undefined;
  className?: string;
} & ULProps;


const SideUnorderedList = styled.ul<SideULProps>`
  ${p => p.$expand ? css`
  `: css`
  z-index: -1;
  `}
  
  position: absolute;
  top: ${props => props.$expand ? '0' : '-100em'};
  left: ${props => props.$expand ? '0' : '-100em'};
  
  opacity: ${props => props.$visible ? '1' : '0'};
  transition: opacity 0.3s ease-in-out;

  list-style: none;
  background-color: rgb(26,26,26);

  width: ${props => props.$width ? `${props.$width}%` : ''};
  height: 100%;
  box-shadow: '10px 10px 5px rgba(0,0,0,.05)';
  padding: 3px 2px;  
  
  ${media.desktop} {
    display: none;
  }

  `;
export { SideUnorderedList };

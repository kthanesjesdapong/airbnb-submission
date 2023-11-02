import styled, { keyframes, css } from 'styled-components';
import { HTMLAttributes } from 'react';


interface PreviewWrapperProps extends HTMLAttributes<HTMLDivElement> {
  $visible: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;
const DropDownWrapper = styled.div<PreviewWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;  
  
    padding: 0 10px;
  

  svg {
    background: transparent;
    width: 1.2rem;
    transform: ${props => props.$visible ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.4s ease-in-out;
    ${props => props.$visible && css`
    animation: ${rotate} 0.4s ease-in-out;
    `}
  }
`;

export { DropDownWrapper };

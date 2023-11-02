import styled from 'styled-components';
import { media } from '@shared/lib';
import { HTMLAttributes } from 'react';

interface StyledBarContainerProps extends HTMLAttributes<HTMLDivElement> {
  role?: string;
}

const StyledSideBarContainer = styled.div<StyledBarContainerProps>`
  display:flex;
  transition: all 0.4s ease-in-out;
  flex-direction: column;
  align-items: flex-end;
  opacity: 1;
   ${media.tablet} {
    display:none;
    opacity: 0;
    } 
  `;

const StyledSideBarWrapper = styled.div`
  display:flex;
  transition: all 0.4s ease-in-out;
  justify-content: center;
  align-items: center;
  svg {
    width: 27px;
    height: 27px;
  }
  ${media.tablet} {
    display:none;
    opacity: 0;
    }
`;
export { StyledSideBarContainer, StyledSideBarWrapper };
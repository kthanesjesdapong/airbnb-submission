import styled from 'styled-components';
import { media } from '@shared/lib';
import { HTMLAttributes } from 'react';

type SidebarContainerProps = {
  role?: string;
} & HTMLAttributes<HTMLDivElement>;

const SidebarContainer = styled.div<SidebarContainerProps>`
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

const SidebarWrapper = styled.div`
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
export { SidebarContainer, SidebarWrapper };
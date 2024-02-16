import styled, { css } from 'styled-components';
import { media } from '@shared/lib';
import { HTMLAttributes } from 'react';
import { UserActionText } from '@shared/ui/top-bar/ui/Topbar.styled';

type SidebarContainerProps = {
  role?: string;
  $expand?: string | undefined;
} & HTMLAttributes<HTMLDivElement>;

const SidebarContainer = styled.div<SidebarContainerProps>`
  height: 100%;
  display: flex;
  transition: all 0.4s ease-in-out;
  flex-direction: column;
  align-items: flex-end;
  opacity: 1;

  ${(p) =>
    p.$expand
      ? css`
          z-index: 199;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        `
      : css`
          z-index: 0;
        `}

  ${media.tablet} {
    display: none;
    opacity: 0;
  }
`;

const SidebarWrapper = styled.div`
  display: flex;
  transition: all 0.4s ease-in-out;
  justify-content: center;
  align-items: center;

  span {
    font-family: ${(p) => p.theme.fonts.content};
    padding-left: 0.25em;
    padding-top: 0.25em;
  }

  svg {
    width: 27px;
    height: 27px;
  }
  ${media.tablet} {
    display: none;
    opacity: 0;
  }
`;

const CancelButton = styled.p`
  color: white;
  font-size: 2em;
  margin-left: 1em;
  margin-top: 1em;
  font-family: ${(p) => p.theme.fonts.content};
  margin-bottom: 0;
`;

const LinkText = styled(UserActionText)`
  cursor: pointer;
  font-size: clamp(1.2em, 1.5em, 2vw);
  font-family: ${(p) => p.theme.fonts.content};
  text-decoration: none;
  transition: 0.3s ease-in-out;
  margin: 0;
  padding: 0;

  .hide {
    display: none;
  }

  &:visited {
    color: inherit;
  }
  &:active,
  &:hover {
    color: ${(props) => props.theme.colors.textHoverHighlight};
  }
`;

export { SidebarContainer, SidebarWrapper, CancelButton, LinkText };

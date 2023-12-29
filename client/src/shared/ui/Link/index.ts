import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HTMLAttributes } from 'react';

export type LinkProps = HTMLAttributes<HTMLLinkElement> & {
  content: string;
  href: string;
  fontSize?: number;
  className?: string;
};

const LinkElement = styled(Link) <LinkProps>`
  text-decoration: none;
  transition: 0.3s ease-in-out;
  

  .hide {
    display: none;
  }
  

  ${props => props.fontSize ? props.fontSize + 'em' : ''};
  &:visited {
    color: inherit;
  }
  &:active,
  &:hover {
    color: ${props => props.theme.colors.textHoverHighlight};
  }
`;

export { LinkElement };
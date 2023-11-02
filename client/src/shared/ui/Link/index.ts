import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HTMLAttributes } from 'react';

type LinkProps = HTMLAttributes<HTMLLinkElement> & {
  content: string;
  href: string;
  fontSize?: number;
};

const LinkElement = styled(Link) <LinkProps>`
  text-decoration: none;
  transition: 0.3s ease-in-out;
  ${props => props.fontSize ? props.fontSize + 'em' : ''};
  &:visited {
    color: inherit;
  }
  &:active,
  &:hover {
    color: ${props => props.theme.colors.oliveMainBg};
  }
`;

export { LinkElement };
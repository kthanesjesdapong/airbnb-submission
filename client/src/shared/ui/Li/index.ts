import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { media } from '@shared/lib';
// import { type LinkProps } from '..';
import { Link } from 'react-router-dom';


type ListItemProps = {
  fontSize: number;
  color: string;
} & HTMLAttributes<HTMLLIElement>;

const ListItem = styled.li<ListItemProps>`
  cursor: pointer;
  transition: color 0.4s ease-in-out;
  font-size: ${props => `${props.fontSize}em`};
  color: ${props => props.color ? props.color : props.theme.colors.categorySub};
  margin:.25em 0;
  padding: .2em .5em;

  text-align: start;
  &:hover, 
  &:active, 
  &:visited {
    color: blue;
  }

  ${media.tablet} {
    margin: .2em 0;
    padding: 0;
  }

`;


export type LinkProps = HTMLAttributes<HTMLLinkElement> & {
  content: string;
  href: string;
};

const ListItemLink = styled(Link) <LinkProps>`
  cursor: pointer;
  transition: color 0.4s ease-in-out;
  font-size: 1.25em;
  color: ${props => props.color ? props.color : props.theme.colors.categorySub} !important;
  color: red;
  margin:.25em 0;
  padding: .2em .5em;
  text-align: start;

  &:active, 
  &:hover {
    color: blue !important;

  }

  ${media.tablet} {
    margin: 0rem 0;
    padding: 0;
  }
  ${media.widescreen} {
    font-size: 1.45em;
  }

`;


export { ListItem, ListItemLink };
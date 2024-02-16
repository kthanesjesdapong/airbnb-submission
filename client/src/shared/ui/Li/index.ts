import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { media } from '@shared/lib';
import { Link } from 'react-router-dom';


type ListItemProps = {
  fontSize: number;
  color: string;
  fontFamily?: string;
  className?: string;
} & HTMLAttributes<HTMLLIElement>;

const ListItem = styled.li<ListItemProps>`
  cursor: pointer;
  transition: color 0.4s ease-in-out;
  font-size: ${props => `${props.fontSize}em`};
  color: ${props => props.color ? props.color : props.theme.colors.categorySub};
  margin:.25em 0;
  padding: .2em .5em;
  
  

  .hide{
    display: none;
  }

  a {
    font-family: ${p => p.fontFamily ? p.theme.fonts.content : p.theme.fonts.primary};
  }

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


export type ListItemLinkProps = HTMLAttributes<HTMLLinkElement> & {
  content: string;
  href: string;

};

const ListItemLink = styled(Link) <ListItemLinkProps>`
  cursor: pointer;
  transition: color height 0.4s ease-in-out;
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
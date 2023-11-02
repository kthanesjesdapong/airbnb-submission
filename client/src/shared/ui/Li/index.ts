import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { media } from '@shared/lib';

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  fontSize: number;
  color: string;
}

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


export { ListItem };
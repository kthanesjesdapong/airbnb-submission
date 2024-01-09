import styled, { css } from 'styled-components';
import { media } from '@shared/lib';




const LinksContainer = styled.div`
  display: none;
  
  ${media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    letter-spacing: .2px;
  }
  `;

type LinkWrapperProps = {
  role?: string;
  onClick?: () => void;
};

const LinkWrapper = styled.div<LinkWrapperProps>`

  margin: 0.4rem;

  ${p => p.role === 'login' ?
    css`
    margin-right: 1.5px;
    border: 1px solid grey;
    padding: 0 5px;
      &:hover, &:active {
        transition: all 0.4s ease-in-out;
        border: 1px solid black
      }
    ` :
    css``}

    ${p => p.role === 'signup' ?
    css`
    margin-left: 1.5px;
    border: 1px solid black;
    background-color: black;
    padding: 0 5px;
    color: white;
      &:hover, &:active{
      transition: all 0.4s ease-in-out;
      border: 1px solid grey;
      opacity: .5;
      }
    `:
    css``}

`;


const UserActionText = styled.p`
  cursor: pointer;
  font-size: clamp(1.2em,1.5em,2vw);
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
    color: ${props => props.theme.colors.textHoverHighlight};
  }
`;


export { LinksContainer, LinkWrapper, UserActionText };
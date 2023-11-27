import styled from 'styled-components';
import { Card } from '@shared/ui';
import { HTMLAttributes } from 'react';
import { media } from '@shared/lib';

type StyledCardProps = {
  $maxwidth: number;
  $url: string;
} & HTMLAttributes<HTMLDivElement>;

const StyledCard = styled(Card) <StyledCardProps>`
  position: relative;
  overflow: hidden;
  transition: width 0.4s ease-out;
  width: ${props => props.$maxwidth - 50}px;
  height: 165px;
  & a {
    text-align: end;
  }

  &:hover .card-container a {
    transform: rotate(0);
  }
  
  &:hover .card-container p  {
    opacity: 1;
    transform: translateY(0);
    transition: transform 0,4s, opacity 0.4s linear 0.3s;
  }

  &:hover::before {
    transform: scale(1.15);
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    width: 100%; 
    height: 100%; 
    background-size: cover;
    background-position: center;
    transform: scale(1);
    transition: transform 0.4s ease-in;
    background-image: url(${props => props.$url});
  }

  & .card-container {
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    font: 900 1.2rem helvetica,sans-serif;
    color: white;
  }

  ${media.tablet} {
    height: 250px;
    width: ${props => props.$maxwidth}px;
  }
`;

export { StyledCard };
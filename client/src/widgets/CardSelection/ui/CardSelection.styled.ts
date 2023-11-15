import styled from 'styled-components';
import { Card } from '@shared/ui';
import { HTMLAttributes } from 'react';

type StyledCardProps = {
  $maxwidth: number;
  $url: string;
} & HTMLAttributes<HTMLDivElement>;


const StyledCard = styled(Card) <StyledCardProps>`
  position: relative;
  overflow: hidden;
  transition: width 0.4s ease-out;
  
  &:hover {
    width: ${props => props.$maxwidth}px;
  }
  .card-container {
    transform: rotate(0);
  }

  &:hover .card-container a {
    transform: rotate(0);
  }
  
  &:hover .card-container p  {
    opacity: 1;
    transform: translateY(0);
    transition: transform 1s, opacity 0.4s linear 0.3s;
  }

  &:hover::before {
    transform: scale(1.3);
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
    bottom: 15%;
    transform: translateX(-50%);
    text-align: center;
    font: 900 1rem helvetica,sans-serif;
    color: white;
    & p {
      position: relative;
      width: var(--width);
      font-size: 0.75rem;
      font-weight: 100;
      line-height: 1.6;
      color: rgba(255,255,255,0.75);
      margin-top: 0.5rem;
      padding: 0 1.2rem;
      transform: translateY(2rem);
      opacity: 0;
    }
  }

`;

export { StyledCard };
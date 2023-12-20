import styled from "styled-components";
import { Card } from '@shared/ui';
import { HTMLAttributes } from "react";
import { media } from "@shared/lib";


type BusinessDetailCardProps = {
  $url: string;
} & HTMLAttributes<HTMLDivElement>;

const BusinessDetailCard = styled(Card) <BusinessDetailCardProps>`
  position: relative;
  overflow: hidden;
  width: 360px;
  height: 220px;

  .active {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    width: 100%; 
    height: 100%; 
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.$url});
  }
  border-radius: 1px;
  .content-container {
    position: absolute;
    left: 2%;
    bottom: 5%;
    text-shadow: 1px 1px .5px #0a0a0abf;
    color: white;
      .category-price-container, 
      .hours-container {
      display: flex;
      flex-direction: row;
    }
    .price {
      margin-left:.25em;
      color: rgba(88,180,255,1);
      font-weight: bolder;
    }
    p {
      margin: 0 1px;
      font: 700 1rem ${props => props.theme.fonts.secondary};

    }
    span {
      margin: 0 0.25em;
    }
    .open,
    .closed {
      font-weight: bolder;
      font-size: .9em;
    }
    
    .open {
      color: rgb(4, 197, 133); 
    }

    .closed {
      color: rgba(255,139,135,1);
    }
    .hours {
      margin-left: .2em;
      font-size: .9em;
    }
  }

  
  ${media.tablet} {
    width: ${props => props.$width}px;
    height: ${props => props.$height}px;
  }
  ${media.widescreen} {
    width: ${props => props.$width + 100}px;
    height: ${props => props.$height + 50}px;
    .content-container {
    position: absolute;
    left: 2%;
    bottom: 5%;
    
    color: white;
      .category-price-container, 
      .hours-container {
      display: flex;
      flex-direction: row;
    }
    .price {
      margin-left:.25em;
      color: rgba(88,180,255,1);
      font-weight: bolder;
    }
    
    p {
      margin: 0 1px;
      font: 700 1.25rem ${props => props.theme.fonts.secondary};
    }
    span {
      margin: 0 0.25em;
    }
    .open,
    .closed {
      font-weight: bolder;
      font-size: 1.15em;
    }
    
    .open {
      color: rgb(4, 197, 133); 
    }

    .closed {
      color: rgba(255,139,135,1);
    }
    .hours {
      margin-left: .2em;
      font-size: 1.15em;
    }
  }

  }

  
`;

export { BusinessDetailCard };
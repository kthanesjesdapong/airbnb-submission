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
      color: ${props => props.theme.colors.priceBlue};
      font-weight: bolder;
    }
    p {
      margin: 0 1px;
      font: 700 1.2rem ${props => props.theme.fonts.secondary};

    }
    img {
      margin: 0 2px;
    /* box-shadow: 1px 1px .5px #0a0a0abf; */

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
      color: ${p => p.theme.colors.openGreen}; 
    }

    .closed {
      color: ${p => p.theme.colors.closedRed};
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
    .open,
    .closed {
      font-size: 1.15em;
    }
    .hours {
      font-size: 1.15em;
    }
    }
  }
`;

export { BusinessDetailCard };
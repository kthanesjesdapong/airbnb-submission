import styled from "styled-components";
import { Card } from '@shared/ui';
// import { media } from '@shared/lib';
import { HTMLAttributes } from "react";

type BusinessDetailCardProps = {
  $url: string;
} & HTMLAttributes<HTMLDivElement>;

const BusinessDetailCard = styled(Card) <BusinessDetailCardProps>`
  position: relative;
  overflow: hidden;
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
    left: 12%;
    bottom: 0%;
    transform: translateX(-50%);
    font: 900 1.2rem helvetica,sans-serif;
    color: white;
      .category-price-container, 
      .hours-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    p {
      margin: 0 1px;
    }
  }

  
`;

export { BusinessDetailCard };
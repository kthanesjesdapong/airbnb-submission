import styled from 'styled-components';
import { Card } from '@shared/ui';
import { HTMLAttributes } from 'react';
import { media } from '@shared/lib';

type ExploreCardsContainerProps = {
  className: string;
  $width: number;
} & HTMLAttributes<HTMLDivElement>;

//Cards that are actually rendered onto here.
const ExploreCardsContainer = styled.div<ExploreCardsContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 .5em;
    justify-self: center;
  }

  ${media.widescreen} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 .5em;
    justify-self: center;
  }
  
`;

type ExploreCardWrapperProps = {
  $width: number;
};

const ExploreCardWrapper = styled.div<ExploreCardWrapperProps>`
  width: ${props => props.$width}px;
  margin: 0 1em 1em 1em;
  p{
    margin: 2px;
    font-size: 1.18rem;
  }
`;

type ExploreCardProps = {
  $url: string;
} & HTMLAttributes<HTMLDivElement>;

const ExploreCard = styled(Card) <ExploreCardProps>`
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
  border-bottom: 1px solid ${props => props.theme.colors.categorySub};
  border-radius: 5px;
`;

export { ExploreCardsContainer, ExploreCardWrapper, ExploreCard };
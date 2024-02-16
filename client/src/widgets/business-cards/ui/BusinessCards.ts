import styled from 'styled-components';
import { Card } from '@shared/ui';
import { HTMLAttributes } from 'react';
import { media } from '@shared/lib';

type BusinessCardsContainerProps = {
  className: string;
  $width: number;
} & HTMLAttributes<HTMLDivElement>;

//Cards that are actually rendered onto here.
const BusinessCardsContainer = styled.div<BusinessCardsContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 0.5em;
    justify-self: center;
  }

  ${media.widescreen} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 0.5em;
    justify-self: center;
  }
`;

type BusinessCardWrapperProps = {
  $width: number;
};

const BusinessCardWrapper = styled.div<BusinessCardWrapperProps>`
  width: ${(props) => props.$width}px;

  margin: 0 1em 1em 1em;
  p {
    font-family: ${(props) => props.theme.fonts.content};
    margin: 3px;
    font-size: 0.95rem;
  }
  .name {
    margin: 5px 3px;
    font-weight: bold;
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  img {
    margin: 2px;
  }
`;

type BusinessCardProps = {
  $url: string;
} & HTMLAttributes<HTMLDivElement>;

const BusinessCard = styled(Card)<BusinessCardProps>`
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
    background-image: url(${(props) => props.$url});
  }
  border-radius: 1px;
`;

export { BusinessCardsContainer, BusinessCardWrapper, BusinessCard };

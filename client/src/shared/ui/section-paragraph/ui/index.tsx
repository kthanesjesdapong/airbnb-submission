import styled from 'styled-components';
import { media } from '@shared/lib';
import { HTMLAttributes } from 'react';


// interface SectionParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
//     $fontSize?: string;
//     $margin?: string[];
//     $activeColor?: string;
//     $cursor?: string;
// }

type SectionParagraphProps = {
    $fontSize?: string;
    $margin?: string[];
    $activeColor?: string;
    $cursor?: string;
} & HTMLAttributes<HTMLParagraphElement>;

const SectionParagraph = styled.p<SectionParagraphProps>`
  transition: all 0.4s ease-in-out;
  font-size: ${props => props.$fontSize};
  cursor: ${props => props.$cursor ? props.$cursor : 'none'};
  margin: ${props => props.$margin![0] && props.$margin![1] && props.$margin![2] && props.$margin![3] ? `${props.$margin![0]}px ${props.$margin![1]}px ${props.$margin![2]}px ${props.$margin![3]}px` : 0};

  &:after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    top:0;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:active,
  &::after,
  &.active{
      color: ${props => props.$activeColor ? props.$activeColor : 'none'};
      opacity: 1;
  }

  &:hover,
  &.active {
  transform: translate3d(0, -10%, 0);
  color: white;
  }

  ${media.tablet} {
      margin: 0;
      &:active,
      &::after,
      &.active{
        color: ${props => props.$activeColor ? props.$activeColor : 'none'};
        opacity: 1;
      }

      &:hover,
      &.active {
        transform: translate3d(10%, 0, 0);
      }
  }
`;


export { SectionParagraph };
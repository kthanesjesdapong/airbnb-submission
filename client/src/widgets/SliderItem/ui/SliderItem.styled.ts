import styled from "styled-components";
import { HTMLAttributes } from "react";




type SliderItemWrapperProps = {
  height: string;
  width: string;
  $url: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const SliderItemWrapper = styled.div<SliderItemWrapperProps>`
  display: flex;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${props => props.$url});
  background-size: cover;
  transform: translate(0%, 0%) rotate(0deg);
  filter: grayscale(0);
  z-index: 1;
  opacity: 1;
  transform: translate(0%, 0%) rotate(0deg);
  filter: grayscale(0);
  z-index: 1;
  opacity: 1;
  transition: all 500ms cubic-bezier(.42, .84, 0, 1.06);
  
  &.prev {
    transform: translateX(-100%) rotate(0deg);
    filter: grayscale(1);
    z-index: 0;
    opacity: 0.2;
  }
  &.next {
    transform: translateX(100%);
    filter: grayscale(1);
    z-index: 0;
    opacity: 0.2;
  }

  .text-overlay {
    position: absolute;
    font-size: 30px;
    color: ${props => props.theme.colors.textMain};
    bottom: 5%;
    left: 0;
    right: 0;
    text-align: center;    
  }
  

`;


const AnchorTag = styled.a`
  display: flex;
  transform: translate(0%, 0%) rotate(0deg);
  filter: grayscale(0);
  z-index: 1;
  opacity: 1;
  transform: translate(0%, 0%) rotate(0deg);
  filter: grayscale(0);
  z-index: 1;
  opacity: 1;
  transition: all 500ms cubic-bezier(.42, .84, 0, 1.06);
  font-size: 2rem;
  &.prev {
    transform: translateX(-100%) rotate(0deg);
    filter: grayscale(1);
    z-index: 0;
    opacity: 0;
  }
  &.next {
    transform: translateX(100%);
    filter: grayscale(1);
    z-index: 0;
    opacity: 0;
  }
`;

export { SliderItemWrapper, AnchorTag };
import { HTMLAttributes } from "react";
import styled from "styled-components";



type ProgressBarContainerProps = {
  $width: string;
} & HTMLAttributes<HTMLUListElement>;

const ProgressBarContainer = styled.ul<ProgressBarContainerProps>`
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  width: ${props => props.$width};
`;

type ProgressBarProps = {
  $sliderLength: number;
  $width: string;
} & HTMLAttributes<HTMLLIElement>;

const ProgressBar = styled.li<ProgressBarProps>`
   display:flex;
    -webkit-box-align: center;
    align-items: center;
    background: transparent;
    border: 0px solid;
    cursor: pointer;
    display: inline-flex;
    height: 3rem;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px;
    width: ${props => `calc(${props.$width}/ ${props.$sliderLength})`};
`;


const ProgressBarItems = styled.span`
    cursor: inherit;
    display: block;
    height: 2px;
    width: 100%;
    background-color: grey;
    transform: translateX(100%/3);
    &.active {
      background-color: #000000;
    }
`;

export { ProgressBarContainer, ProgressBar, ProgressBarItems };
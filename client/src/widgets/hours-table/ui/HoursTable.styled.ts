import styled from "styled-components";
import { media } from "@shared/lib";
import { HTMLAttributes } from "react";


type HoursTableContainerProps = {
  $margin: string;
  width: number;
  // fontSize: string;
} & HTMLAttributes<HTMLDivElement>;


const HoursTableContainer = styled.div<HoursTableContainerProps>`
  width: 360px;
  margin: ${p => p.$margin};

  &ul {
    list-style: none;
    &li{
      &p{
        text-align: start;
      }
    }
  }
  
  ${media.tablet} {
    width: ${p => p.width}px;
  }
  ${media.widescreen} {
    width: ${p => p.width + 100}px
  }

`;

export { HoursTableContainer };
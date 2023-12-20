import styled from "styled-components";
// import { media } from "@shared/lib";
import { HTMLAttributes } from "react";


type HoursTableContainerProps = {
  margin: string;
  width: string;
  // fontSize: string;
} & HTMLAttributes<HTMLDivElement>;


const HoursTableContainer = styled.div<HoursTableContainerProps>`
  width: ${p => p.width};
  margin: ${p => p.margin};

  &ul {
    list-style: none;
  }

`;

export { HoursTableContainer };
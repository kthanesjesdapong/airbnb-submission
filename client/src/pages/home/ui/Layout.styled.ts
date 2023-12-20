import styled from "styled-components";
import { media } from "@shared/lib";


const HomeLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop} {
    margin: 5em 0;
  }
`;

const FirstRowContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  
  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 3em;
  }
`;

const SecondRowContainer = styled.div`
  display:flex;
  justify-content: center;
`;

export { HomeLayoutContainer, FirstRowContainer, SecondRowContainer };
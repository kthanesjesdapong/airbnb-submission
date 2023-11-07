import styled from "styled-components";
import { media } from "@shared/lib";


const HomeLayoutContainer = styled.div`

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */

`;

const FirstRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  }
`;

const SecondRowContainer = styled.div`
  display:flex;
  justify-content: center;
`;

export { HomeLayoutContainer, FirstRowContainer, SecondRowContainer };
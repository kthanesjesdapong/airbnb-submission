import styled from "styled-components";
import { media } from "@shared/lib";


const SingleBusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet} {
    /* flex-direction: row; */
    justify-content: center;
  }
`;

export { SingleBusinessContainer };
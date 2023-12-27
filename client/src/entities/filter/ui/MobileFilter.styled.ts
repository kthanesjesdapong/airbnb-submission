import styled, { keyframes, css } from "styled-components";
import { media } from "@shared/lib";


type MobileFilterContainerProps = {
  show: boolean;
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`;

const MobileFilterContainer = styled.form<MobileFilterContainerProps>`

  display:${props => props.show ? 'flex' : 'none'};
  flex-direction: row;
  align-items: start;
  justify-content: center;
  margin: 0 0 1em 0;
  transform: transform 0.5s ease-in-out;
  ${props => props.show && css`
  animation: ${fadeIn} 0.5s ease-in-out;
  `}
  
  input {
        width: 20%;
      }
    
      .filter-wrapper {
        margin-left: 5em;
        width: 50%;
        h3 {
          font-weight: 500;
          font-family: ${p => p.theme.fonts.content};
        } 
      }

      .input-container {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: start;

      input {
        width: 20%;
      }
  
      label {
        margin: 0 0 0 0;
        margin-left: .5em;
        font-family: ${p => p.theme.fonts.content};
      }
    }

  ${media.desktop}{
    display: none;
  }
`;

export { MobileFilterContainer };
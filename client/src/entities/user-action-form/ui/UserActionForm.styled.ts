import styled, { css } from "styled-components";
import { Button } from "@shared/ui";

type StyledUserActionFormProps = {
  $active?: string;
};

const StyledUserActionForm = styled.form<StyledUserActionFormProps>`
  position: absolute;
  
  top: ${p => p.$active ? '200px' : '-100em'};
  right: ${p => p.$active ? '0' : '-100em'};
  left: ${p => p.$active ? '0' : '-100em'};
  opacity: ${p => p.$active ? '1' : '0'};
  transition: opacity 0.3s ease-in-out;
  
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 360px;
  background-color: #fff;
	border: 1px solid black;
  padding: 1rem;
  z-index: ${p => p.$active ? '200' : '-2'};

`;

const StyledInput = styled.input`
  font-family: ${p => p.theme.fonts.content};
  padding: .5em;
	color: black;
	background-color: #fff;
	border: 1px solid black;
	margin-bottom: 1.3em;
    
    &:invalid {
        color: ${p => p.theme.colors.closedRed};
    }

`;

const StyledLabel = styled.label`
  color: black;
  font-family: ${p => p.theme.fonts.content};
  font-weight: semi-bold;
	text-transform: uppercase;
	font-size:.75em;
	opacity: .8;
`;

type StyledButtonProps = {
  role?: string;
};

const StyledButton = styled(Button) <StyledButtonProps>`
 max-width: 80px;
 
 padding: .25em .45em;
 align-self: center; 
 margin-top: 0;
 margin-right: 0;

  ${p => p.role === 'signup' ? css`
    margin-right: 5px;
    border: 1px solid grey;
    background-color: white;
    color: black;
    &:hover, &:active {
      transition: all 0.4s ease-in-out;
      border: 1px solid black;
    }
  ` : css``}

  ${p => p.role === 'login' || p.role === 'confirm' ? css`
  border: 1px solid black;
  background-color: black;
  color: white;
  &:hover, &:active {
    transition: all 0.4s ease-in-out;
    border: 1px solid grey;
    opacity: .5;
  }
  ` : css``}
`;


export { StyledUserActionForm, StyledInput, StyledLabel, StyledButton };
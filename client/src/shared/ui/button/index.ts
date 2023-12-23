import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.lighterOlive};
  border: 1px solid transparent;
  color: ${props => props.theme.colors.textMain};
  font-family: ${props => props.theme.fonts.content};
  font-size: 0.85em;
  /* font-weight: bold; */
  padding: 0.25em 1em;
  cursor: pointer;
  margin: 2px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
`;

export { Button };
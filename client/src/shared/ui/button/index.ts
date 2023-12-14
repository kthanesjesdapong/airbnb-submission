import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.lighterOlive};
  border: 1px solid transparent;
  color: ${props => props.theme.colors.textMain};
  padding: 0.25em 1em;
  cursor: pointer;
  margin: 2px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.3);
`;

export { Button };
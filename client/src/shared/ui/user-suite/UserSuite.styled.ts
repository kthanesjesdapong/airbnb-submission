import styled from 'styled-components';

const UserSuiteContainer = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: center;
`;

const UserText = styled.span`
  font-size: clamp(1.2em, 1.5em, 2vw);
  text-decoration: none;
  transition: 0.3s ease-in-out;
  margin: 0 0 0 0.5rem;
  padding: 0;

  &:active,
  &:hover {
    color: ${(props) => props.theme.colors.textHoverHighlight};
  }
`;

export { UserSuiteContainer, UserText };

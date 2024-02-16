import styled from 'styled-components';

type StyledModalProps = {
  $active?: string;
};

const StyledModal = styled.div<StyledModalProps>`
  position: absolute;
  z-index: ${(props) => (props.$active ? '200' : '1')};
  top: ${(props) => (props.$active ? '0' : '-100em')};
  left: ${(props) => (props.$active ? '0' : '-100em')};
  height: ${(p) => (p.$active ? '100%' : '0%')};
  width: 100%;
  background-color: rgb(26, 26, 26);
  opacity: 0.85;
`;

export { StyledModal };

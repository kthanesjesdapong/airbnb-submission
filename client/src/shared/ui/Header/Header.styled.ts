import styled from 'styled-components';
import { HTMLAttributes } from 'react';

type HeaderContainerProps = {
  $visible?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const HeaderContainer = styled.div<HeaderContainerProps>`
  transition: 0.4s ease-in-out;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export { HeaderContainer };

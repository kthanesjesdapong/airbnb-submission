import styled from 'styled-components';
import { HTMLAttributes } from 'react';

type CardProps = {
  $width: number;
  $height: number;
} & HTMLAttributes<HTMLDivElement>;

const Card = styled.div<CardProps>`
 width: ${props => props.$width}px;
 height: ${props => props.$height}px;
 box-shadow: 0 3px 15px rgba(0,0,0,0.3);
`;

export { Card };
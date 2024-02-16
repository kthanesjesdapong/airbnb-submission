import styled from 'styled-components';
import { media } from '@shared/lib';

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.colors.categorySub};
  align-items: flex-start;
  justify-content: center;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export { SliderContainer };

import styled from 'styled-components';
import { media } from '@shared/lib';

const HeroSectionContainer = styled.div.attrs(({
  className: ''
}))`
    display:flex;
    flex-direction: column;
    max-width: 350px;
    font-weight: normal;
    white-space: balance;
    
    h2 {
    font-size: clamp(2em, 2.5em, 3.5em);
    align-self: center;
    text-align: center;
    margin-bottom: .5rem;
    }
    p {
    color: ${props => props.theme.colors.textSub};
    text-align: center;
    }
    /* ${media.desktop} {
      p {
        text-align: center;
      } */
      /* align-self: flex-start; */
    /* } */
`;

export { HeroSectionContainer }


import styled from 'styled-components';

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
    }
    p {
    align-self: flex-start;
    color: ${props => props.theme.colors.textSub}
    }
`;

export { HeroSectionContainer }


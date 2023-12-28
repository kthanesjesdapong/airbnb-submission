import styled from 'styled-components';
import { media } from '@shared/lib';

import { Button } from '@shared/ui';

const FilterBarContainer = styled.form`

  display: flex;
  flex-direction: column;
  height: 100%;
    .filter-wrapper {
      margin: 0 0 1em 0 ;
        .filter-title-wrapper {
          display: flex;
          justify-content: space-evenly;
          align-items: start;
          h4 {
            font-weight: 500;
            font-family: ${p => p.theme.fonts.content};
            letter-spacing: 0.10em;
          } 
        }
      }

    .input-container {
      display: flex;
      margin: .5em 0 .5em 2em ;
      input {
        width: 20%;
      }

      label {
        align-items: end;
        text-align: center;
        margin: 0 0 0 0;
        margin-left: .5em;
        font-family: ${p => p.theme.fonts.content};
      }
    }
    .input-container.input--field{
      input {
        margin-left: 1em;
      }
    }



  ${media.desktop} {
    .filter-wrapper {
        margin: 1em .5em; 
        .filter-title-wrapper {
          justify-content: start;
        }
      }
      .input-container {
      margin: .5em ;
      justify-content: start;
    }
    .input-container.input--field{
      input {
        margin-left: 0em;
      }
    }


  }

`;


const FilterButton = styled(Button)`
 max-width: 72.27px;
 align-self: center; 
 margin-top: 0;
 margin-bottom: 1em;
 background-color: black;
 color: white;

  ${media.desktop} {
    display: none;
  }
`;

export { FilterBarContainer, FilterButton };
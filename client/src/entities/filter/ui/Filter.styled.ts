import styled from 'styled-components';

const FilterBarContainer = styled.form`


  height: 100%;

  .filter-wrapper {
    margin: 1em .5em;
    h3 {
      font-weight: 500;
      font-family: ${p => p.theme.fonts.content};
      letter-spacing: 0.10em;
    } 
  }


  .input-container {
    margin: .5em ;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

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

`;

export { FilterBarContainer };
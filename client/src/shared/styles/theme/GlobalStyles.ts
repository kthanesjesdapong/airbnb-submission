import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { fonts } from './fonts';
import { media } from '@shared/lib';

export const GlobalStyle = createGlobalStyle`
    ${normalize()};
    ${fonts}

    * { 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${theme.fonts.primary};
    }
    html,body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
        background:${props => props.theme.colors.oliveMainBg};
        color: ${props => props.theme.colors.textMain};
        padding: 0em 1em;
        /* overflow: hidden; */

    /* overflow: hidden; */
    }

    h1,h2,h3,h4,h5,h6,p{
        font-weight: normal;
        margin-bottom: 1em;
    }



    body {
        min-height: 100%;
    }

    .text-center {
        text-align: center;
    }
    
    .container {
        padding: 0 1em;
    }

    header,section {
        padding: 4rem 0;
    }





    a 
    {  
        font-size: clamp(1.2em,1.5em,2vw);
        text-decoration: none;
        transition: 0.3s ease-in-out;
        &:visited{
            color: inherit;
        }
        &:active, 
        &:hover {
        color: #55554b;
        }
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    .flex-row-center {
        display: flex;
        justify-content: center;

    }

    .flex-column-center {
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    ${media.tablet} {

    }

    ${media.desktop} {
        html,body {
            padding: 0  2.5rem;
            background-color: black;
        }
    }

    ${media.uhd} {
        html,body {
            padding: 0  4em;
            background-color: black;
        }
    }

`;



/*
 
 
Implement when media util func is created
${media.tablet} {
html, body {
padding: 1em 2em;
}
}
${media.desktop} {
html,body {
    padding: 1em 4em;
}        
}       */
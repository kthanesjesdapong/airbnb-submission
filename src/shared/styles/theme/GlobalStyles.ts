import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { fonts } from './fonts';
// import { media } from '@utils/index';

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
        /* overflow: hidden; */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
        padding: 0em 1em;
        background:${props => props.theme.colors.oliveMainBg};
        color: ${props => props.theme.colors.textMain}

    /* overflow: hidden; */
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: normal;
    }

    body{
        min-height: 100%;
    }

    a{  
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
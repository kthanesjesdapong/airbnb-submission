import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


export const fadeOut = keyframes`
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
`;

/*
import styled, { keyframes } from 'styled-components';

// Import the keyframes
import { fadeIn, fadeOut } from './path-to-keyframes';  // Adjust the path based on your project structure

// Create a styled component and use the keyframes in the animation property
const AnimatedComponent = styled.div`
  // Other styles for your component

  /* Example of using fadeIn keyframes for an entrance animation */
//animation: ${ fadeIn; } 1s ease -in -out; // Adjust the duration and easing as needed

/* Example of using fadeOut keyframes for an exit animation */
// animation: ${fadeOut} 1s ease-in-out; // Uncomment if you want to use fadeOut

//Other styles for your component 
/*
 `;

*/
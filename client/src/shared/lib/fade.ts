import { keyframes, css } from 'styled-components';


export const createKeyFrames = ({ startProperty, endProperty }: { startProperty: string, endProperty?: string; }) => ({ startValue, endValue }: { startValue: any, endValue: any; }) => keyframes`
  0% {
    ${startProperty}: ${startValue}
  }
  100% {
    ${endProperty ?? startProperty}: ${endValue}
  }
`;

export const createCssInterpolation = (animationKeyFrames: ReturnType<typeof keyframes>, duration: number) =>
  css`
  animation: ${animationKeyFrames} ${duration}s ease-in-out
`;



/*

//How to Modularize the call

const createRotateValues = () => {
  const rotateProperties = createKeyFrames({
    startProperty: 'transform',
    endProperty: 'transform'
  });

  const startRotateValue = 'rotate(0deg)';
  const endRotateValue = 'rotate(180deg)';

  return {
    rotateValues: rotateProperties({
      startValue: startRotateValue,
      endValue: endRotateValue,
    }),
    startRotateValue,
    endRotateValue,
  };
};


//How to Call it within a styling of a styled-component
styled.div`
${createCssInterpolation(rotateValues, 0.4)};
`

import { keyframes } from 'your-css-in-js-library'; // Import the keyframes function from your CSS-in-JS library

const slideAnimation = createAnimation({
  startDirection: 'left',
  endDirection: 'right',
});

const slideKeyframes = slideAnimation({
  startValue: '0%',
  endValue: '100%',
});

const slideIn = keyframes`${slideKeyframes}`; ||

within
styled.div`
  ${createCssInterpolation(slideKeyframes)}
`

*/
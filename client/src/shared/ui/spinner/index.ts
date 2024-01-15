import styled, { css } from "styled-components";
import { createKeyFrames } from "@shared/lib";

const createSpinValues = () => {
  const spinProperpties = createKeyFrames({
    startProperty: 'transform'
  });

  const startSpinValue = 'rotate(0deg)';
  const endSpinValue = 'rotate(360deg)';

  return {
    spinValues: spinProperpties({
      startValue: startSpinValue,
      endValue: endSpinValue
    }),
    startSpinValue,
    endSpinValue
  };
};

const { spinValues, startSpinValue, endSpinValue } = createSpinValues();


type SpinnerProps = {
  height?: string;
  width?: string;
};

const Spinner = styled.div<SpinnerProps>`
  border: 4px solid rgba(0,0,0,0.3);
  border-top: 4px solid #000;
  border-radius: 50%;
  width: ${p => p.width};
  height: ${p => p.height};
  margin: auto;
  ${css`
  animation: ${spinValues} 1s linear infinite`};
`;

export { Spinner };
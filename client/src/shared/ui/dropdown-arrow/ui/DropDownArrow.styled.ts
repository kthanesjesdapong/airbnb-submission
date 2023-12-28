import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { createKeyFrames, createCssInterpolation } from '@shared/lib';

type DropDownArrowProps = {
  width: string;
  display: string;
  active: string | undefined;
} & HTMLAttributes<HTMLOrSVGElement>;



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

const { rotateValues, startRotateValue, endRotateValue } = createRotateValues();

const DropDownArrow = styled(ChevronDownIcon) <DropDownArrowProps>`
  display: ${p => p.display};
  width: ${p => p.width};
  background: transparent;
  transition: transform 0.4s ease-in-out;
  transform: ${p => p.active ? endRotateValue : startRotateValue};
  ${p => p.active && css`${createCssInterpolation(rotateValues, 0.4)}`}
`;

export { DropDownArrow };;
import { SliderContainer } from './SliderSelector.styled';
import { useAppDispatch, useActiveClass } from '@shared/lib/hooks';
import { selectFeature } from '@shared/store/feature';
import { MouseEventHandler } from 'react';
import { SectionParagraph } from '@shared/ui';

import { sliderSelectorConfigs } from '..';

//Turn this into a tuple
type SliderSelectorProps = {
  options: string[];
  configs: typeof sliderSelectorConfigs;
};

//REFACTOR AND SEPARATE COMPONENTS
export const SliderSelector = ({ options, configs }: SliderSelectorProps) => {
  const dispatch = useAppDispatch();
  const { fontSize, margin, cursor, activeColor } = configs;
  const { handleActiveClass } = useActiveClass();
  const handleClick: MouseEventHandler<HTMLParagraphElement> = (event) => {
    const textContent = event.currentTarget.textContent;
    textContent ? dispatch(selectFeature(textContent)) : 'Events';
    handleActiveClass(event);
  };

  return (
    <SliderContainer>
      {options.map((option) => (
        <SectionParagraph
          key={`key ${option}`}
          $fontSize={fontSize}
          $margin={margin}
          $cursor={cursor}
          $activeColor={activeColor}
          onClick={handleClick}
        >
          {option}
        </SectionParagraph>
      ))}
    </SliderContainer>
  );
};

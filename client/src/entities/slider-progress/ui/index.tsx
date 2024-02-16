import {
  ProgressBarContainer,
  ProgressBar,
  ProgressBarItems,
} from './SliderProgress.styled';
import { Feature } from '@shared/constants';

type SliderProgressBarProps = {
  $width: string;
  currentIndex: number;
  sliderItems: Feature;
};

export const SliderProgressBar = ({
  $width,
  currentIndex,
  sliderItems,
}: SliderProgressBarProps) => {
  return (
    <ProgressBarContainer className="progress-bar-container" $width={$width}>
      {sliderItems.map((_, i) => (
        <ProgressBar
          $width={$width}
          $sliderLength={sliderItems.length}
          key={'key' + 'dot ' + i}
          className="progress-bar"
        >
          <ProgressBarItems
            data-index="0"
            className={i === currentIndex ? 'p-bar-span active' : 'p-bar-span'}
          ></ProgressBarItems>
        </ProgressBar>
      ))}
    </ProgressBarContainer>
  );
};

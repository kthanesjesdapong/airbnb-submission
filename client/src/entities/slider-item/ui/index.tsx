import { SliderItemWrapper } from './SliderItem.styled';
import { Feature } from '@shared/constants';

type SliderItemProps = {
  imgHeight: string;
  imgWidth: string;
  sliderItems: Feature;
  currentIndex: number;
};

export const SliderItem = ({
  imgHeight,
  imgWidth,
  sliderItems,
  currentIndex,
}: SliderItemProps) => {
  return (
    <>
      {sliderItems &&
        sliderItems.map((_, i) => (
          <SliderItemWrapper
            key={'key' + _.name + i}
            height={imgHeight}
            width={imgWidth}
            $url={`${_.url}`}
            className={
              i === currentIndex
                ? 'pic pic-' + i
                : i < currentIndex
                  ? 'pic pic-' + i + ' prev'
                  : 'pic pic-' + i + ' next'
            }
          ></SliderItemWrapper>
        ))}
    </>
  );
};

import { Header } from "@shared/ui";
import { SliderContainer } from "./Slider.styled";
import { SliderItem } from "@entities/slider-item";
import { SliderProgressBar } from "@entities/slider-progress";
import { useAppSelector, useNavigatePages } from "@shared/lib/hooks";
import { featuredCollections } from "@shared/constants";
import { imageContainerConfigs } from "..";
import { AnchorTag } from "@entities/slider-item/ui/SliderItem.styled";
import { useEffect } from "react";



//CALL USE REF MEMO OR USECALLBACK
export const Slider = () => {
    //Unsafe return of an `any` typed value.eslint@typescript-eslint/no-unsafe-return

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    const { selected: selectedCategory, prevSelected } = useAppSelector((state) => state.feature);

    const activeCategory = featuredCollections.find((featured) => featured.category === selectedCategory);

    const { currentIndex: currentItemIndex, setCurrentIndex: setCurrentItemIndex, navigateNext: navigateNextItem, navigatePrev: navigatePrevItem } = useNavigatePages(activeCategory!.featured.length);

    useEffect(() => {
        if (prevSelected !== selectedCategory) {
            setCurrentItemIndex(0);
        }
    }, [selectedCategory, prevSelected, setCurrentItemIndex]);

    return (
        <SliderContainer >
            <Header
                active={activeCategory?.category}
                content={`${selectedCategory}`} />
            <div className="container">
                <div className="pic-container">
                    {activeCategory && activeCategory.featured.length ? (
                        <SliderItem
                            imgHeight={imageContainerConfigs.height}
                            imgWidth={imageContainerConfigs.width}
                            sliderItems={activeCategory.featured}
                            currentIndex={currentItemIndex}

                        />
                    ) : <></>
                    }
                </div>
            </div>
            <div className="pic-container">
                {activeCategory && activeCategory.featured.length ?
                    activeCategory.featured.map((_, i) => (
                        <AnchorTag
                            key={'a' + 'key ' + i}
                            className={
                                i === currentItemIndex
                                    ? 'pic pic-' + i
                                    : i < currentItemIndex
                                        ? 'pic pic-' + i + ' prev'
                                        : 'pic pic-' + i + ' next'
                            }
                        >{_.name}</AnchorTag>
                    )) : <></>
                }
            </div>
            {activeCategory && activeCategory.featured.length ? (
                <SliderProgressBar
                    $width='21.875rem'
                    sliderItems={activeCategory.featured}
                    currentIndex={currentItemIndex}
                />
            ) : <></>
            }
            <div className='slider-btns'>
                <div className="btn-left"
                    onClick={navigatePrevItem}>
                    {'<'}
                </div>
                <div className="btn-right"
                    onClick={navigateNextItem}>
                    {'>'}
                </div>
            </div>

        </SliderContainer>
    );

};

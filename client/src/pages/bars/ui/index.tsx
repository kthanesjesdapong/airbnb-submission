import { lazy, } from 'react';
import { BusinessLayout, businessLayoutConfigs } from "@widgets/business-layout";
import { allBarsQuery } from "..";
import { CurrentBusinessContextProvider } from "@entities/business";

import { FilterBar } from '@entities/filter';
import { useFilterByPrice, useFilterByRating } from '@entities/filter/lib';
import { useWindowDimensions } from '@shared/lib/hooks';


const BusinessCards = lazy(() => import('@widgets/business-cards/index.js').then(module => ({ default: module.BusinessCards })));

export const BarsPage = () => {


    const { width: currentWidth } = useWindowDimensions();

    const { rating, handleRatingChange } = useFilterByRating();
    const { prices, handlePriceChange } = useFilterByPrice();

    return (
        <>
            <CurrentBusinessContextProvider cursorId={0} query={allBarsQuery} modelType="bar">
                <h1 style={{ textAlign: currentWidth >= 1024 ? 'start' : 'center', marginBottom: '0' }}>{'B A R S'}</h1>
                <BusinessLayout
                    child1={
                        <FilterBar
                            checkBoxCallBack={handlePriceChange}
                            inputFieldCallBack={handleRatingChange}
                        />
                    }
                    child2={
                        <BusinessCards
                            $width={businessLayoutConfigs.$width}
                            $height={businessLayoutConfigs.$height}
                            className="someClass"
                            model='b'
                            pricesFilterArray={prices}
                            ratingFilter={rating}
                        />
                    }
                />
            </CurrentBusinessContextProvider>
        </>
    );
};
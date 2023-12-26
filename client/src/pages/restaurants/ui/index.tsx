import { lazy } from "react";
import { allRestaurantsQuery } from "..";

import { BusinessLayout, businessLayoutConfigs } from "@widgets/business-layout";

import { FilterBar } from "@entities/filter";

import { CurrentBusinessContextProvider } from "@entities/business";
import { useFilterByPrice, useFilterByRating } from "@entities/filter/lib";


const BusinessCards = lazy(() => import('@widgets/business-cards/index.js').then(module => ({ default: module.BusinessCards })));

export const RestaurantsPage = () => {

    const { prices, handlePriceChange } = useFilterByPrice();
    const { rating, handleRatingChange } = useFilterByRating();

    return (
        <>
            <CurrentBusinessContextProvider cursorId={0} query={allRestaurantsQuery} modelType="restaurant">
                <h1 style={{ textAlign: 'center', marginBottom: '0' }}>{'R E S T A U R A N T S'}</h1>
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
                            model="r"
                            pricesFilterArray={prices}
                            ratingFilter={rating}


                        />
                    }
                />
            </CurrentBusinessContextProvider>
        </>
    );
};
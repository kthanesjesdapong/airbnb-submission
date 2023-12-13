import { BusinessLayout, businessLayoutConfigs } from "@entities/business-layout";
import { ExploreCards } from "@entities/explore-cards";

import { allRestaurantsQuery } from "..";
import { CurrentBusinessContextProvider } from "@entities/business";


export const RestaurantsPage = () => {
    return (
        <>
            <CurrentBusinessContextProvider cursorId={0} query={allRestaurantsQuery} modelType="restaurant">
                <h2>{'B A R S'}</h2>
                <BusinessLayout
                    child1={
                        <p> THIS IS FILTER BAR</p>
                    }
                    child2={
                        <ExploreCards
                            $width={businessLayoutConfigs.$width}
                            $height={businessLayoutConfigs.$height}
                            className="someClass"
                        />

                    }
                />
            </CurrentBusinessContextProvider>
        </>
    );
};
import { Venue } from "@entities/venue";
import { ExploreCards } from "@entities/explore-cards";

import { allRestaurantsQuery } from "@shared/api";
import { CurrentBusinessContextProvider } from "@entities/business";

const restaurantsPageConfig = {
    $width: 300,
    $height: 150
};




export const RestaurantsPage = () => {

    return (
        <>
            <CurrentBusinessContextProvider cursorId={0} query={allRestaurantsQuery} modelType="restaurant">
                <h2>{'B A R S'}</h2>
                <Venue
                    child1={
                        <p> THIS IS FILTER BAR</p>
                    }
                    child2={
                        <ExploreCards
                            $width={restaurantsPageConfig.$width}
                            $height={restaurantsPageConfig.$height}
                            className="someClass"
                        />

                    }
                />
            </CurrentBusinessContextProvider>
        </>
    );
};
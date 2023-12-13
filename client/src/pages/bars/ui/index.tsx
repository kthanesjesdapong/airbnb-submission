import { BusinessLayout, businessLayoutConfigs } from "@entities/business-layout";
import { ExploreCards } from "@entities/explore-cards";

import { allBarsQuery } from "..";
import { CurrentBusinessContextProvider } from "@entities/business";


export const BarsPage = () => {

    return (
        <>
            <CurrentBusinessContextProvider cursorId={0} query={allBarsQuery} modelType="bar">
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
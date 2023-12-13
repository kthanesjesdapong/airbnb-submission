import { BusinessLayout, businessLayoutConfigs } from "@widgets/business-layout";
import { BusinessCards } from "@entities/business-cards";

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
                        <BusinessCards
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
import { Venue } from "@entities/venue";
import { ExploreCards } from "@entities/explore-cards";
import { dummyData } from "@shared/constants";

import { useState } from 'react';

import { allBarsQuery } from "@shared/api";
import { CurrentBusinessContextProvider } from "@entities/business";



const barsPageConfig = {
    $width: 300,
    $height: 150
};

export const BarsPage = () => {

    const [cursorId, setCursorId] = useState(0);
    return (
        <>
            <CurrentBusinessContextProvider cursorId={cursorId} query={allBarsQuery} modelType="bar">
                <h2>{'B A R S'}</h2>
                <Venue
                    child1={
                        <p> THIS IS FILTER BAR</p>
                    }
                    child2={
                        <ExploreCards
                            $width={barsPageConfig.$width}
                            $height={barsPageConfig.$height}
                            data={dummyData}
                            className="someClass" />
                    }
                />
            </CurrentBusinessContextProvider>
        </>
    );
};
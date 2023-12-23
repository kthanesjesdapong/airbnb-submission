import { lazy } from 'react';
import { BusinessLayout, businessLayoutConfigs } from "@widgets/business-layout";
import { allBarsQuery } from "..";
import { CurrentBusinessContextProvider } from "@entities/business";

import { FilterBar } from '@entities/filter';

const BusinessCards = lazy(() => import('@widgets/business-cards/index.js').then(module => ({ default: module.BusinessCards })));

export const BarsPage = () => {

    return (
        <>
            <CurrentBusinessContextProvider cursorId={0} query={allBarsQuery} modelType="bar">
                <h2>{'B A R S'}</h2>
                <BusinessLayout
                    child1={
                        <FilterBar />
                    }
                    child2={
                        <BusinessCards
                            $width={businessLayoutConfigs.$width}
                            $height={businessLayoutConfigs.$height}
                            className="someClass"
                            model='b'
                        />
                    }
                />
            </CurrentBusinessContextProvider>
        </>
    );
};
import { Venue } from "@widgets/venue";
import { ExploreCards } from "@features/explore-cards";
import { dummyData } from "@shared/constants";

const barsPageConfig = {
    $width: 300,
    $height: 150
};

export const BarsPage = () => {

    return (
        <>
            <h2>{'B A R S'}</h2>
            <Venue header={'x amount of listings'}
                child1={<p> THIS IS FILTER BAR</p>}
                child2={<ExploreCards
                    $width={barsPageConfig.$width}
                    $height={barsPageConfig.$height}
                    data={dummyData}
                    className="someClass" />}
            />
        </>
    );
};
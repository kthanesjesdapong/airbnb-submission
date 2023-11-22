import { Venue } from "@features/venue";
import { ExploreCards } from "@widgets/ExploreCards";
import { dummyData } from "@shared/constants";
//import filter here is as well



const barsPageConfig = {
    $width: 320,
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
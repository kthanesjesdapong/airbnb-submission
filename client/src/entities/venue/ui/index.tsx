import { VenueLayout } from "./Venue.styled";
import { ReactNode } from "react";
import { useCurrentBusinessContext } from "@entities/business";

type VenueProps = {
    child1: ReactNode,
    child2: ReactNode;
};

export const Venue = ({ child1, child2, }: VenueProps) => {
    const data = useCurrentBusinessContext();
    const listingHeader = `${data.data.totalCount} Listings`;

    return (
        <VenueLayout>
            <h2 className='header'>{listingHeader}</h2>
            <div className="filter-bar">
                {child1}
            </div>
            <div className="card-container">
                {child2}
            </div>

        </VenueLayout>
    );
};
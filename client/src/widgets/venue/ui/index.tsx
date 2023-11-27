import { VenueLayout } from "./Venue.styled";
import { ReactNode } from "react";

type VenueProps = {
    header: string;
    child1: ReactNode,
    child2: ReactNode;
};

export const Venue = ({ header, child1, child2, }: VenueProps) => {

    return (
        <VenueLayout>
            <h2 className='header'>{header}</h2>
            <div className="filter-bar">
                {child1}
            </div>
            <div className="card-container">
                {child2}
            </div>

        </VenueLayout>
    );
};
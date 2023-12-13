import { BusinessContainer } from "./BusinessLayout.styled";
import { ReactNode } from "react";
import { useCurrentBusinessContext } from "@entities/business";

type BusinessLayoutProps = {
    child1: ReactNode,
    child2: ReactNode;
};

export const BusinessLayout = ({ child1, child2, }: BusinessLayoutProps) => {
    const data = useCurrentBusinessContext();
    const listingHeader = `${data.data.totalCount} Listings`;

    return (
        <BusinessContainer>
            <h2 className='header'>{listingHeader}</h2>
            <div className="filter-bar">
                {child1}
            </div>
            <div className="card-container">
                {child2}
            </div>

        </BusinessContainer>
    );
};
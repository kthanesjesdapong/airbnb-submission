import { ExploreCardsContainer, ExploreCardWrapper, ExploreCard } from "./ExploreCards.styled";
import { useState, useMemo } from "react";
import { Pagination } from "@features/pagination";
import { useCurrentBusinessContext } from "@entities/business";
import type { FormattedBusiness } from "@entities/business";

type PageSizeT = number;
const PageSize: PageSizeT = 6;


type ExploreCardsProp = {
    className: string;
    $width: number;
    $height: number;
};

export const ExploreCards = ({ className, $width, $height, }: ExploreCardsProp) => {

    const [currentPage, setCurrentPage] = useState(1);
    const businessData = useCurrentBusinessContext();
    const { business, totalCount } = businessData.data;
    console.log(business);

    const currentData = useMemo<FormattedBusiness[]>(() => {
        const startPageIndex = (currentPage - 1) * PageSize;
        const endPageIndex = startPageIndex + PageSize;
        return business.slice(startPageIndex, endPageIndex);
    }, [currentPage, business]);


    return (
        <>
            <ExploreCardsContainer
                className={className}
                $width={$width}
            >
                {currentData && currentData.map((d, i) => (
                    <ExploreCardWrapper
                        $width={$width}
                        key={d.name + 'key' + i}>
                        <ExploreCard
                            $url={`${d.photos[0] ?? 'https://media-cdn.tripadvisor.com/media/photo-s/04/bd/37/54/velveteen-rabbit.jpg'}`}
                            $width={$width}
                            $height={$height}>
                        </ExploreCard>
                        <p>{d.name.toUpperCase()}</p>
                        <p>{d.location}</p>
                        <p>{d.rating}</p>
                        <p>{d.price}</p>
                    </ExploreCardWrapper>

                ))}
            </ExploreCardsContainer>
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
};
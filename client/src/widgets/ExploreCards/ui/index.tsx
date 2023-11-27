import { ExploreCardsContainer, ExploreCardWrapper, ExploreCard } from "./ExploreCards.styled";
import { exploreData } from "..";
import { useState, useMemo } from "react";
import { Pagination } from "@shared/ui";

type PageSizeT = number;
const PageSize: PageSizeT = 6;


type ExploreCardsProp = {
    className: string;
    data: exploreData[];
    $width: number;
    $height: number;
};

export const ExploreCards = ({ className, data, $width, $height }: ExploreCardsProp) => {

    const [currentPage, setCurrentPage] = useState(1);

    const currentData = useMemo<exploreData[]>(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);


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
                            $url={'https://media-cdn.tripadvisor.com/media/photo-s/04/bd/37/54/velveteen-rabbit.jpg'}
                            $width={$width}
                            $height={$height}>
                        </ExploreCard>
                        <p>{d.name.toUpperCase()}</p>
                        <p>{d.address}</p>
                        <p>{d.price}</p>
                        <p>{d.rating}</p>
                    </ExploreCardWrapper>

                ))}
            </ExploreCardsContainer>
            <Pagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
};
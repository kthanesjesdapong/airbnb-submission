import { BusinessCardsContainer, BusinessCardWrapper, BusinessCard } from "./BusinessCards";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@features/pagination";
import { useCurrentBusinessContext } from "@entities/business";
import type { FormattedBusiness } from "@entities/business";
import { Button } from "@shared/ui";

type PageSizeT = number;
const PageSize: PageSizeT = 6;


type BusinessCardsProp = {
    className: string;
    $width: number;
    $height: number;
    model: string;
};

export const BusinessCards = ({ className, $width, $height, model }: BusinessCardsProp) => {

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const businessData = useCurrentBusinessContext();
    const { business, totalCount } = businessData.data;

    const currentData = useMemo<FormattedBusiness[]>(() => {
        const startPageIndex = (currentPage - 1) * PageSize;
        const endPageIndex = startPageIndex + PageSize;
        return business.slice(startPageIndex, endPageIndex);
    }, [currentPage, business]);

    return (
        <>
            <BusinessCardsContainer
                className={className}
                $width={$width}
            >
                {currentData && currentData.map((d, i) => (
                    <BusinessCardWrapper
                        $width={$width}
                        key={d.name + 'key' + i}>
                        <BusinessCard
                            $url={`${d.photos[0] ?? 'https://media-cdn.tripadvisor.com/media/photo-s/04/bd/37/54/velveteen-rabbit.jpg'}`}
                            $width={$width}
                            $height={$height}>
                        </BusinessCard>
                        <p className={'name'}>{d.name}</p>
                        <p>{d.location}</p>
                        <p>{d.rating}</p>
                        <p>{d.price}</p>
                        <div className="button-wrapper">
                            <Button className="show-more"
                                onClick={() => navigate(`${model}/${d.id}`)}
                            >{'Show More'}
                            </Button>
                        </div>
                    </BusinessCardWrapper>
                ))}
            </BusinessCardsContainer>
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
};
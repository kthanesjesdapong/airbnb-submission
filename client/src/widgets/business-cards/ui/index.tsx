import {
  BusinessCardsContainer,
  BusinessCardWrapper,
  BusinessCard,
} from './BusinessCards';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@features/pagination';
import { useCurrentBusinessContext } from '@entities/business';
import type { FormattedBusiness } from '@entities/business';
import { Button } from '@shared/ui';
import { ratingsMap, PNGComponent } from '@entities/rating';

import { useGetPriceFilteredArray } from '..';

type PageSizeT = number;
const PageSize: PageSizeT = 6;

type BusinessCardsProp = {
  className: string;
  $width: number;
  $height: number;
  model: string;
  pricesFilterArray: string[];
  ratingFilter: number;
};

export const BusinessCards = ({
  className,
  $width,
  $height,
  model,
  pricesFilterArray,
  ratingFilter,
}: BusinessCardsProp) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const businessData = useCurrentBusinessContext();
  const { business, totalCount } = businessData.data;

  const { filteredBusiness, filteredBusinessCount } = useGetPriceFilteredArray(
    business,
    pricesFilterArray,
    ratingFilter
  );

  const currentData = useMemo<FormattedBusiness[]>(() => {
    const startPageIndex = (currentPage - 1) * PageSize;
    const endPageIndex = startPageIndex + PageSize;

    if (pricesFilterArray.length === 0 && ratingFilter === 0) {
      return business.slice(startPageIndex, endPageIndex);
    } else {
      return filteredBusiness.slice(startPageIndex, endPageIndex);
    }
  }, [currentPage, business, filteredBusiness, ratingFilter]);

  return (
    <>
      <BusinessCardsContainer className={className} $width={$width}>
        {currentData &&
          currentData.map((d, i) => (
            <BusinessCardWrapper $width={$width} key={d.name + 'key' + i}>
              <BusinessCard
                $url={`${d.photos[0] ?? 'https://media-cdn.tripadvisor.com/media/photo-s/04/bd/37/54/velveteen-rabbit.jpg'}`}
                $width={$width}
                $height={$height}
              ></BusinessCard>
              <p className={'name'}>{d.name}</p>
              <p>{d.location}</p>
              <PNGComponent
                src={ratingsMap[d.rating]}
                alt={String(d.rating)}
                width={'72'}
              />
              <p className="price">{d.price}</p>
              <div className="button-wrapper">
                <Button
                  className="show-more"
                  onClick={() => navigate(`${model}/${d.id}`)}
                >
                  {'Show More'}
                </Button>
              </div>
            </BusinessCardWrapper>
          ))}
      </BusinessCardsContainer>
      <Pagination
        currentPage={currentPage}
        totalCount={
          filteredBusiness.length === 0 ? totalCount : filteredBusinessCount
        }
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

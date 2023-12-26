
import { useParams } from "react-router-dom";
import { singleBarQuery, singleRestaurantQuery } from "../query";
import { useFetchSingleBusiness } from "@entities/business";
import { BusinessDetail } from "@widgets/business-detail";
import { SingleBusinessContainer } from './SingleBusiness.styled';
import { HoursTable } from "@widgets/hours-table";
import { getCurrentDateAndTime } from "@entities/hours";

export const SingleBusiness = () => {
    const params = useParams();
    const { barId, restaurantId, model } = params;

    const query = model === 'r' ? singleRestaurantQuery : singleBarQuery;
    const id = model === 'r' ? Number(restaurantId) : Number(barId);


    const { data: businessData, isLoading } = useFetchSingleBusiness(id, query, model!);

    if (isLoading) {
        return <span>is Loading....</span>;
    }



    const currentDateAndTime = getCurrentDateAndTime();
    const { currentDay, currentTime } = currentDateAndTime;

    return (
        <SingleBusinessContainer>
            <BusinessDetail
                imgUrl={`${businessData!.data.photos[0] ?? 'https://media-cdn.tripadvisor.com/media/photo-s/04/bd/37/54/velveteen-rabbit.jpg'}`}
                name={businessData!.data.name}
                rating={businessData!.data.rating}
                category={businessData!.data.category[0]}
                price={businessData!.data.price}
                hours={businessData!.data.hours}
                address={businessData!.data.location}
                currentDay={currentDay}
                currentTime={currentTime}
            />
            <HoursTable
                hours={businessData!.data.hours}
                currentDay={currentDay}
                currentTime={currentTime}
                width={500}
                margin={'0.5em 0 2em'}
            />
        </SingleBusinessContainer>
    );
};
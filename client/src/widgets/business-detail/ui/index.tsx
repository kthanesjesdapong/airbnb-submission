import { businessDetailConfigs } from "../businessDetail.configs";
import { BusinessDetailCard } from "./BusinessDetail.styled";
import { checkIfOpen, StoreHours } from "@entities/hours";


type BusinessDetailProps = {
    imgUrl: string;
    name: string;
    rating: number;
    category: string;
    price: string;
    hours: (string | number)[][];
    address: string;
    currentDay: number;
    currentTime: string;

};

export const BusinessDetail = ({ imgUrl, name, rating, category, hours, price, address, currentDay, currentTime }: BusinessDetailProps) => {


    const storeIsOpen = checkIfOpen(hours, currentDay, currentTime);
    price = price === 'Not Available' ? 'Prices Not Available' : price;

    return (
        <BusinessDetailCard
            $url={imgUrl}
            $width={businessDetailConfigs.width}
            $height={businessDetailConfigs.height} >
            <div className="content-container">
                <p className="name">{name}</p>
                <p>{rating}</p>
                <div className="category-price-container">
                    <p>{category}</p>
                    <span> - </span>
                    <p className={'price'}>{price}</p>
                </div>
                <div className="hours-container">
                    <StoreHours
                        status={Array.isArray(storeIsOpen) ? 'Open' : storeIsOpen}
                        hours={Array.isArray(storeIsOpen) ? storeIsOpen : []}
                    />
                </div>
                <p>{address}</p>
            </div>
        </BusinessDetailCard>
    );
};

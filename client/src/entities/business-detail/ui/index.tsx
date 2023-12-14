import { BusinessDetailCard } from "./BusinessDetail.styled";

type BusinessDetailProps = {
    imgUrl: string;
    name: string;
    rating: number;
    price: string;
    category: string;
    hours: string;
    address: string;
};



export const BusinessDetail = ({ imgUrl, name, rating, price, category, hours, address }: BusinessDetailProps) => {
    return (
        <BusinessDetailCard
            $url={imgUrl}
            $width={500}
            $height={300} >
            <div className="content-container">
                <p className="name">{name}</p>
                <p>{rating}</p>
                <div className="category-price-container">
                    <p>{category}</p>
                    <p>{price}</p>
                </div>
                <div className="hours-container">
                    <p>{'OPEN'}</p>
                    <p>{hours}</p>
                </div>
                <p>{address}</p>
            </div>
        </BusinessDetailCard>
    );
};

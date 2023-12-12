import { useQueryClient } from "react-query";
import { FormattedBusinessList } from "@entities/business";
import { allRestaurantsQuery } from "@shared/api";
import { useEffect, useState } from "react";
import { fetchBusinessList } from "@entities/business";




export const RestaurantsPage = () => {

    const [cursorId, setCursorId] = useState(0);
    const [loading, setLoading] = useState(true);



    const [restaurants, setRestaurants] = useState<FormattedBusinessList[] | undefined>([]);

    //has to reload or save within vscode to get fetching to save
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchBusinesses = async () => {
            try {

                const restaurantsResponse = await fetchBusinessList(0, allRestaurantsQuery, 'restaurant');

                setRestaurants(restaurantsResponse);

                setCursorId(restaurantsResponse![restaurantsResponse!.length - 1].id);
                setLoading(false);
                return restaurantsResponse;
            } catch (e: unknown) {
                console.error(e);
            }
        };
        fetchBusinesses();

        return () => {
            controller.abort();
        };
    }, [cursorId]);

    if (loading) {
        return <><p>STILL LOADING</p></>;
    }

    return (
        <>
            {restaurants!.map((restaurantNode) => (
                <div key={restaurantNode.id + ' ' + restaurantNode.name}>
                    <p>
                        {restaurantNode.id}
                    </p>
                    <p>
                        {restaurantNode.name}
                    </p>
                    <p>
                        {restaurantNode.display_phone}
                    </p>
                </div>
            ))}
        </>
    );
};
import { Routes, Route } from "react-router-dom";
import { HomePage } from "@pages/home";
import { ExplorePage } from "@pages/explore";
import { EventsPage } from "@pages/events";
import { RestaurantsPage } from "@pages/restaurants";
import { BarsPage } from "@pages/bars";
import { SingleBusiness } from "@pages/single-business";
import { AboutPage } from "@pages/about";
import { ContactPage } from "@pages/contact";


export const NoMatch = () => <div>No match</div>;

export const AppRouterComponent = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<HomePage />} />
                <Route path='explore' element={<ExplorePage />} />
                <Route path='explore/events' element={<EventsPage />} />
                <Route path='explore/restaurants' element={<RestaurantsPage />} />
                <Route path='explore/restaurants/:model/:restaurantId' element={<SingleBusiness />} action={({ params }) => { return params; }} />
                <Route path='explore/bars' element={<BarsPage />} />
                <Route path='explore/bars/:model/:barId' element={<SingleBusiness />} action={({ params }) => { return params; }} />
                <Route path='about' element={<AboutPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
};
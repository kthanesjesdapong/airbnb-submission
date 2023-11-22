import { Routes, Route } from "react-router-dom";
import { HomePage } from "@pages/home";
import { ExplorePage } from "@pages/explore";
import { EventsPage } from "@pages/events";
import { RestaurantsPage } from "@pages/restaurants";
import { BarsPage } from "@pages/bars";
import { AboutPage } from "@pages/about";
import { ContactPage } from "@pages/contact";

export const NoMatch = () => <div>No match</div>;

export const BrowserRouterComponent = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<HomePage />} />
                <Route path='explore' element={<ExplorePage />} />
                <Route path='explore/events' element={<EventsPage />} />
                <Route path='explore/restaurants' element={<RestaurantsPage />} />
                <Route path='explore/bars' element={<BarsPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
};
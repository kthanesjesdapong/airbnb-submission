import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@app/App";
import { HomePage } from "@pages/home";
import { ExplorePage } from "@pages/explore";
import { EventsPage } from "@pages/events";
import { RestaurantsPage } from "@pages/restaurants";
import { BarsPage } from "@pages/bars";
import { AboutPage } from "@pages/about";
import { ContactPage } from "@pages/contact";

export const BrowserRouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route>
                        <Route path='/' element={<HomePage />} />
                        <Route path='explore' element={<ExplorePage />}>
                            <Route path='events' element={<EventsPage />} />
                            <Route path='restaurants' element={<RestaurantsPage />} />
                            <Route path='bars' element={<BarsPage />} />
                        </Route>
                        <Route path='about' element={<AboutPage />} />
                        <Route path='contact' element={<ContactPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
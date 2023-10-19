import App from "@app/App";
import { HomePage } from "@pages/home";
import { ExplorePage } from "@pages/explore";
import { EventsPage } from "@pages/events";
import { RestaurantsPage } from "@pages/restaurants";
import { BarsPage } from "@pages/bars";
import { AboutPage } from "@pages/about";
import { ContactPage } from "@pages/contact";
import { RouteObject } from "react-router-dom";




export const routes: RouteObject[] = ([
    {
        element: <App />,
        path: '',
        children: [
            {
                path: '/',
                element: <HomePage />,

            },
            {
                path: '/explore',
                element: <ExplorePage />,
            },
            {
                path: '/events',
                element: <EventsPage />
            },
            {
                path: '/restaurants',
                element: <RestaurantsPage />
            },
            {
                path: '/bars',
                element: <BarsPage />
            },
            {
                path: '/about',
                element: <AboutPage />,

            },
            {
                path: '/contact',
                element: <ContactPage />,

            }
        ]
    }
]);
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SingleBusiness } from "@pages/single-business";
import { ContactPage } from "@pages/contact";

const HomePage = lazy(() => import('@pages/home/index.js').then(module => ({ default: module.HomePage })));

const ExplorePage = lazy(() => import('@pages/explore/index.js').then(module => ({ default: module.ExplorePage })));

const EventsPage = lazy(() => import('@pages/events/index.js').then(module => ({ default: module.EventsPage })));

const RestaurantsPage = lazy(() => import('@pages/restaurants/index.js').then(module => ({ default: module.RestaurantsPage })));

const BarsPage = lazy(() => import('@pages/bars/index.js').then(module => ({ default: module.BarsPage })));



export const NoMatch = () => <div>No match</div>;

export const AppRouterComponent = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={
                    <Suspense fallback={<div>... Loading</div>}>
                        <HomePage />
                    </Suspense>
                } />
                <Route path='explore' element={
                    <Suspense fallback={<div>... Loading</div>}>
                        <ExplorePage />
                    </Suspense>
                } />
                <Route path='explore/events' element=
                    {
                        <Suspense>
                            <EventsPage />
                        </Suspense>
                    } />
                <Route path='explore/restaurants' element={
                    <Suspense>
                        <RestaurantsPage />
                    </Suspense>
                } />
                <Route path='explore/restaurants/:model/:restaurantId' element={<SingleBusiness />} action={({ params }) => { return params; }} />

                <Route path='explore/bars' element={
                    <Suspense>
                        <BarsPage />
                    </Suspense>
                } />

                <Route path='explore/bars/:model/:barId' element={<SingleBusiness />} action={({ params }) => { return params; }} />
                <Route path='contact' element={<ContactPage />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
};
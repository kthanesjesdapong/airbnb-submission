import { Outlet } from "react-router-dom";
import { CategorySelect } from "@features/category-select";

export const ExplorePage = () => {
    return (
        <div>
            <CategorySelect
            />
            <Outlet />
        </div>
    );
};
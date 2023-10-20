import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { routerOpts } from "./routerOptions";

type Router = ReturnType<typeof createBrowserRouter>;
export const router: Router = createBrowserRouter(routes, routerOpts);
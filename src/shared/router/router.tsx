/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { routerOpts } from "./routerOptions";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
type Router = ReturnType<typeof createBrowserRouter>;
export const router: Router = createBrowserRouter(routes, routerOpts);
import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: '/Donation',
                element:<Donation></Donation>
            },
            {
                path: '/Statistics',
                element:<Statistics></Statistics>
            }
        ],
    },
]);

export default myRouter;


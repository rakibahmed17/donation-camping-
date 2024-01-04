import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import Error from "../Error/Error";
import Card2 from "../Card2/Card2";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('/cards.json')
            },
            {
                path: '/Donation',
                element:<Donation></Donation>
            },
            {
                path: '/Statistics',
                element:<Statistics></Statistics>
            },
            {
                path: '/cards/:id',
                element:<Card2></Card2>
            }
        ],
    },
]);

export default myRouter;


import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "../components/Error";



const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Body />,
        children: [
            {
                path:'/',
                element: <Body />
            } ,
        ],
        errorElement : <Error />
    }
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

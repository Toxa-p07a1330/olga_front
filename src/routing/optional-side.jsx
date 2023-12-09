import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {ContentfulPage} from "../pages/contentful-page/contentful-page";
import {ErrorPage} from "../pages/error/error-page";

export const OptionalSide = () => {
    const router = createBrowserRouter([
        {
            path: "/service/*",
            element: <ContentfulPage/>,
            errorElement: <ErrorPage/>
        },
        {
            path: "/error",
            element: <ErrorPage/>,
        },
        {
            path: "*",
            element: <ErrorPage code={404}/>,
        },
    ]);

    return <div>
        <RouterProvider router={router}/>
    </div>
}


// <BrowserRouter>
//     <Routes>
//         <Route path="*/service" component={ContentfulPage}/>
//         <Route path="*/error" component={ErrorPage}/>
//
//         <Route
//             path={'*'}
//             component={() => {
//                 return <ErrorPage errCode={404}/>;
//             }}
//         />
//     </Routes>
// </BrowserRouter>
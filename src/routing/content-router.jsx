import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {ErrorPage} from "../pages/error/error-page";
import {Faq} from "../pages/faq/faq";
import {Main} from "../pages/main/main";
import {Info} from "../pages/info/info";
import {Profile} from "../pages/profile/profile";
import {Shop} from "../pages/shop/shop";
import {Cart} from "../pages/shopping_cart/cart";
import {SignInup} from "../pages/sign-inup/sign-inup";

export const ContentRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/faq",
            element: <Faq/>,
            errorElement: <ErrorPage/>
        },

        {
            path: "/main",
            element: <Main/>,
            errorElement: <ErrorPage/>
        },

        {
            path: "/info",
            element: <Info/>,
            errorElement: <ErrorPage/>
        },


        {
            path: "/profile",
            element: <Profile/>,
            errorElement: <ErrorPage/>
        },

        {
            path: "/shop",
            element: <Shop/>,
            errorElement: <ErrorPage/>
        },

        {
            path: "/cart",
            element: <Cart/>,
            errorElement: <ErrorPage/>
        },

        {
            path: "/sign-in-up",
            element: <SignInup/>,
            errorElement: <ErrorPage/>
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

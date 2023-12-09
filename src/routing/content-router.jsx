import {Route, Routes,} from "react-router-dom";
import {Faq} from "../pages/faq/faq";
import {Main} from "../pages/main/main";
import {Info} from "../pages/info/info";
import {Profile} from "../pages/profile/profile";
import {Shop} from "../pages/shop/shop";
import {Cart} from "../pages/shopping_cart/cart";
import {SignInup} from "../pages/sign-inup/sign-inup";
import {ErrorPage} from "../pages/error/error-page";

export const ContentRouter = () => {
    return <div>
        <Routes>
            <Route path={"/faq"} element={<Faq/>}/>
            <Route path={"/main"} element={<Main/>}/>

            <Route path={"/info"} element={<Info/>}/>
            <Route path={"/profile"} element={<Profile/>}/>

            <Route path={"/shop"} element={<Shop/>}/>
            <Route path={"/cart"} element={<Cart/>}/>

            <Route path={"/sign-in-up"} element={<SignInup/>}/>
            <Route path={"/*"} element={<ErrorPage code={404}/>}/>

        </Routes>
    </div>
}

import style from "./style.module.scss"
import {ContentRouter} from "../../routing/content-router";
import {SideMenu} from "../../components/side_navigation/side-menu";

export const ContentfulPage = () => {
    return <div className={style.wrapper}>
        <div className={style.content}>
            <ContentRouter/>
        </div>
        <SideMenu/>

    </div>
}
import bag from "../../static/bag.svg"
import brain from "../../static/brain.svg"
import info from "../../static/exclaim.svg"
import profile from "../../static/profile.svg"
import question from "../../static/question.svg"
import {SingleButton} from "./single-button";
import style from "./style.module.scss"
export const SideMenu = () => {

    const buttonsConfig = [
        {
            icon: brain,
            link: "main"
        },
        {
            icon: profile,
            link: "profile"
        },
        {
            icon: bag,
            link: "shop"
        },
        {
            icon: question,
            link: "faq"
        },
        {
            icon: info,
            link: "info"
        },


    ]
    return <div className={style.wrapper}>
        {buttonsConfig.map(v => <SingleButton link={v.link} image={v.icon}/>)}
    </div>
}
import {useState} from "react";
import backCard1 from "../../static/back-card1.svg"
import backCard2 from "../../static/back-card2.svg"
import backCard3 from "../../static/back-card3.svg"
import style from "./style.module.scss"
import {Column} from "./column";

export const Main = () => {
    const [config] = useState([
        {
            title: "Devices",
            background: backCard1,
            content: <div>
                1rst column content will be here
            </div>
        },
        {
            title: "Status",
            background: backCard2,
            content: <div>
                2nd column content will be here
            </div>
        },
        {
            title: "Diagram",
            background: backCard3,
            content: <div>
                3rd column content will be here
            </div>
        },

    ])
    return <div className={style.wrapper}>
        {
            config.map(v => <Column {...v}/>)
        }
    </div>
}
import {useState} from "react";
import style from "./style.module.scss"
import {Column} from "./column";
import profilePhoto from "../../static/mock_photo.svg"

export const Profile = () => {
    const [config] = useState([
        {
            content: <div>
                1rst column content will be here
            </div>,
            profilePhoto: profilePhoto
        },
        {
            content: <div>
                2nd column content will be here
            </div>
        },
        {
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
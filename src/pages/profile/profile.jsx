import {useState} from "react";
import style from "./style.module.scss"
import {Column} from "./column";
import profilePhoto from "../../static/mock_photo.svg"
//import fieldConverted from "../../logic/field-converter/field-converted";

const fieldConverted = (column) => {
    return <div>
        {column.map(v => {
            if (v.type === "text-input") {
                return <input type={"text"} onChange={v.handler} placeholder={v.placeholder} value={v.value}
                              className={v.extraStyle} id={v.key}/>
            }
        })}
    </div>
}

export const Profile = () => {
    const [inputFields, setInputFields] = useState([
        [
            {
                key: "login",
                placeholder: "Логин",
                handler: () => {
                    console.log("login changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "pass1",
                placeholder: "Пароль",
                handler: () => {
                    console.log("pass i")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "pass2",
                placeholder: "Пароль 2",
                handler: () => {
                    console.log("pass2 changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
        ],
    ])

    const [config] = useState([
        {
            content: <div className={style.formWrapper}>
                {fieldConverted(inputFields[0])}
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
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
        [
            {
                key: "name1",
                placeholder: "Фамилия",
                handler: () => {
                    console.log("name1 changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "name2",
                placeholder: "Имя",
                handler: () => {
                    console.log("name2 i")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "name3",
                placeholder: "Отчество",
                handler: () => {
                    console.log("name3 changed")
                },
                extraStyle: style.extra_margin_bottom,
                type: "text-input",
                value: undefined
            },
            {
                key: "birth",
                placeholder: "День рождения",
                handler: () => {
                    console.log("birth changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "gender",
                placeholder: "Пол",
                handler: () => {
                    console.log("gender i")
                },
                extraStyle: style.extra_margin_bottom,
                type: "text-input",
                value: undefined
            },
            {
                key: "email",
                placeholder: "Email",
                handler: () => {
                    console.log("email changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "phone",
                placeholder: "Номер телефона",
                handler: () => {
                    console.log("phone changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
        ],
        [
            {
                key: "state",
                placeholder: "Страна",
                handler: () => {
                    console.log("state changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "district",
                placeholder: "Район",
                handler: () => {
                    console.log("district i")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "city",
                placeholder: "Город",
                handler: () => {
                    console.log("city changed")
                },
                extraStyle: style.extra_margin_bottom,
                type: "text-input",
                value: undefined
            },
            {
                key: "town",
                placeholder: "Населенный пункт",
                handler: () => {
                    console.log("town changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "line",
                placeholder: "Улица",
                handler: () => {
                    console.log("line i")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
            {
                key: "home",
                placeholder: "Дом",
                handler: () => {
                    console.log("home changed")
                },
                extraStyle: style.extra_margin_bottom,
                type: "text-input",
                value: undefined
            },
            {
                key: "index",
                placeholder: "Индекс",
                handler: () => {
                    console.log("index changed")
                },
                extraStyle: "",
                type: "text-input",
                value: undefined
            },
        ],,
    ])

    const [config] = useState([
        {
            content: <div className={style.formWrapper}>
                {fieldConverted(inputFields[0])}
            </div>,
            profilePhoto: profilePhoto
        },
        {
            content: <div className={style.formWrapper}>
                {fieldConverted(inputFields[1])}
            </div>
        },
        {
            content: <div className={style.formWrapper}>
                {fieldConverted(inputFields[2])}
                <div className={style.save}>Сохранить</div>
            </div>
        },

    ])
    return <div className={style.wrapper}>
        {
            config.map(v => <Column {...v}/>)
        }
    </div>
}
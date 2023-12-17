import {useState} from "react";
import style from "./style.module.scss"
import classnames from "classnames"

export const SignInup = () => {
    const [isRegistration, setIsRegistration] = useState(false)
    const toggleRegMode = () => {
        setIsRegistration(!isRegistration)
    }
    if (true)
        return <div>
            <div className={style.form}>
                <div className={style.title}>
                    BigBroBrain
                </div>
                <div className={style.modeSelector}>

                    <div className={classnames(style.singleMode, !isRegistration ? style.activeMode : "")}
                         onClick={() => {
                             !isRegistration && toggleRegMode()
                         }}>
                        Вход
                    </div>
                    <div className={classnames(style.singleMode, isRegistration ? style.activeMode : "")}
                         onClick={() => {
                             isRegistration && toggleRegMode()
                         }}>
                        Регистрация
                    </div>
                </div>
                <div className={style.email}>
                    <input placeholder={isRegistration ? "Имя" : "Логин или email"}/>
                </div>

                <div className={style.email}>
                    <input placeholder={isRegistration ? "Email" : "Пароль"}/>
                </div>
                <div className={style.regButton}>
                    {isRegistration ? "Зарегистрировать" : "Войти"}
                </div>
                <div className={style.rulesWrapper}>
                    Правила
                </div>
                <div className={style.delimiter}>

                </div>
                <div className={style.googleAuth}>
                    Войти с помощью гугл
                </div>
            </div>
        </div>
    return <div>
        <div className={style.form}>
            <div></div>
        </div>
    </div>
}
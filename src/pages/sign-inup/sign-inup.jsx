import {useState} from "react";
import style from "./style.module.scss"
import classnames from "classnames"
import {MyGoogleLogin} from "./GoogleLogin";
import leftRegImg from "../../static/regPageLeft.svg"
import rightRegImg from "../../static/reg-page-right.svg"

export const SignInup = () => {
    const [isRegistration, setIsRegistration] = useState(false)
    const toggleRegMode = () => {
        setIsRegistration(!isRegistration)
    }
    return <div>
        <div className={style.leftImage}><img src={leftRegImg}/></div>

        <div className={style.form}>
            <div className={style.title}>
                BigBroBrain
            </div>
            <div className={style.innerForm}>
                <div className={style.modeSelector}>
                    <div className={classnames(style.singleMode, !isRegistration ? style.activeMode : "")}
                         onClick={() => {
                             isRegistration && toggleRegMode()
                         }}>
                        Вход
                    </div>
                    <div className={classnames(style.singleMode, isRegistration ? style.activeMode : "")}
                         onClick={() => {
                             !isRegistration && toggleRegMode()
                         }}>
                        Регистрация
                    </div>
                </div>
                <div className={style.singleInput}>
                    <input placeholder={isRegistration ? "Имя" : "Логин или email"}/>
                </div>

                <div className={style.singleInput}>
                    <input placeholder={isRegistration ? "Email" : "Пароль"}
                           type={isRegistration ? "text" : "password"}/>
                </div>
                <div className={style.regButton}>
                    {isRegistration ? "Зарегистрировать" : "Войти"}
                </div>
                <div className={style.rulesWrapper}>
                    Правила и конфиденциальность
                </div>
                <div className={style.delimiter}>
                    или
                </div>
                <div className={style.googleAuth}>
                    <MyGoogleLogin/>
                </div>
            </div>
        </div>
        <div className={style.rightImage}><img src={rightRegImg}/></div>

    </div>
}
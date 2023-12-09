import style from "./style.module.scss"
import backgroundImage from "../../static/404.svg"

export const ErrorPage = (props) => {
    console.log(props)
    if (props.code === 404) {
        return <div className={style.wrapper}>
            <img src={backgroundImage} alt={"404 bg"}/>
        </div>
    }
    return <div>
        I am error page. I am not 404 error, so my design will be implemented later
    </div>
}
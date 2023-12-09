import {Link} from "react-router-dom";
import style from "./style.module.scss"
export const SingleButton = ({link, image}) => {
    console.log(link)
    console.log(image)
    return <div className={style.button}>
        <Link to={link}>
            <img src={image}/>
        </Link>
    </div>
}
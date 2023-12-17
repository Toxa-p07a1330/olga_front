import style from "./style.module.scss"
import videoInfo from "../../static/videoinfo.svg"
import alertJDL from "../../logic/show-modal/show-modal";
import {YoutubeWrapper} from "../../components/youtube-wrapper/youtube-wrapper";

export const Info = () => {
    const viewVideoClickhandler = () => {
        alertJDL(<YoutubeWrapper link={"https://www.youtube.com/embed/N56EVgi7bJ4?si=8CIK7fXjwasH54Sb"}/>)
    }
    return <div className={style.wrapper}>
        <div className={style.column}>
            <div className={style.header}>
                Рады приветствовать вас
                на нашем сайте <b>BigBroBrain</b>
            </div>
            <div className={style.text}>
                <p> В мире, насыщенном интернет-шумом, мы приносим свой взгляд на связь и поддержку.</p>
                <p>В нашей компании нет места рекламе и бесконечному сбору данных.</p>
                <p>Мы создали уникальный продукт, который призван освободить от цифровой зависимости, предоставив</p>
                <p>возможность наслаждаться жизнью в офлайне, не теряя связи.</p>
                <p>Наша миссия — показать, что всегда найдется кто-то, кто готов выслушать и поддержать.</p>
                <p>Без излишних поисков и бесполезного листания – мы здесь, всегда рядом.</p>
                <div className={style.videoLink}>
                    <img src={videoInfo} onClick={viewVideoClickhandler}/>
                </div>
            </div>

        </div>
        <div className={style.column}>

        </div>
    </div>
}
import style from "./style.module.scss"
import crop from "../../static/crop.svg"
import upload from "../../static/upload.svg"
export const Column = ({profilePhoto, content}) => {
    const cropHandler = ()=>{

    }
    const uploadHandler = ()=>{

    }
    return <div className={style.columnWrapper}>
        {profilePhoto && <>
            <div className={style.profilePhoto}>
                <img src={profilePhoto}/>
                <div className={style.controlsWrapper}>
                    <div className={style.crop}><img src={crop} onClick={cropHandler}/> </div>
                    <div className={style.upload}><img src={upload} onClick={uploadHandler}/> </div>
                </div>
            </div>
        </>}
        <div className={style.body}>
            {content}
        </div>
    </div>
}
import style from "./style.module.scss"

export const Column = ({profilePhoto, content}) => {
    return <div className={style.columnWrapper}>
        {profilePhoto && <>
            <div className={style.profilePhoto}>
                <img src={profilePhoto}/>
            </div>
        </>}
        <div className={style.body}>
            {content}
        </div>
    </div>
}
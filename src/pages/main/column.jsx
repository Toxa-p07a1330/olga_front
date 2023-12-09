import style from "./style.module.scss"

export const Column = ({title, background, content}) => {
    return <div className={style.columnWrapper}>
        <div className={style.title}>
            {title}
        </div>
        <div className={style.body}>
            {content}
        </div>
    </div>
}
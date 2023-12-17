import style from "./style.module.scss"

export const SingleAnswerCard = ({question, clickCallback}) => {
    return <div onClick={clickCallback} className={style.singleQuestion}>
        <div>
            {question}
        </div>
    </div>
}
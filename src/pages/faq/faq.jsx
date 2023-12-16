import style from "./style.module.scss"
import {useState} from "react";

export const Faq = () => {
    const [searchValue, setSearchValue] = useState("")
    return <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.title}>Чем вам помочь?</div>
            <div className={style.search}>
                <div className={style.searchInput}>
                    <input value={searchValue} placeholder={"Поиск в справке"}
                           onChange={(e) => setSearchValue(e.target.value)}/>
                </div>
                <div className={style.searchButton}>Найти</div>
            </div>
        </div>
        <div className={style.questionList}>

        </div>
        <div className={style.answer}>

        </div>
    </div>
}
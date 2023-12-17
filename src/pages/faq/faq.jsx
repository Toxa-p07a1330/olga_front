import style from "./style.module.scss"
import {useCallback, useEffect, useState} from "react";
import alertJDL from "../../logic/show-modal/show-modal";
import {getFaq} from "../../logic/getFaq/getFAQ";
import {SingleAnswerCard} from "./SingleAnswerCard";

export const Faq = () => {

    const [searchValue, setSearchValue] = useState("");
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            const fetchedItems = await getFaq("");
            setItems(fetchedItems)
        })()
    }, [])

    const searchClickHandler = async () => {
        setLoading(true)
        const fetchedItems = await getFaq(searchValue);
        setItems(fetchedItems)
        setLoading(false)
    }

    const getResult = useCallback(() => {
        if (isLoading)
            return <>
                <div>Loading</div>
            </>
        if (!items.length) {
            return <div>
                Nothing was found
            </div>
        }
        return <>
            {items.map(v => <SingleAnswerCard question={v.question} clickCallback={() => {
                alertJDL(v.answer)
            }}/>)}
        </>
    }, [isLoading, items])


    return <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.title}>Чем вам помочь?</div>
            <div className={style.search}>
                <div className={style.searchInput}>
                    <input value={searchValue} placeholder={"Поиск в справке"}
                           onChange={(e) => setSearchValue(e.target.value)}/>
                </div>
                <div className={style.searchButton} onClick={searchClickHandler}>Найти</div>
            </div>
        </div>
        <div className={style.questionList}>
            {getResult()}
        </div>

        <div className={style.answer}>

        </div>
    </div>
}
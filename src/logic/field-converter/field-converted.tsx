 const fieldConverted = (column) => {
    return <div>
        {column.map(v => {
            if (v.type === "text-input") {
                return <input type={"text"} onChange={v.handler} placeholder={v.placeholder} value={v.value}
                              className={v.extraStyle} id={v.key}/>
            }
        })}
    </div>
}
export default fieldConverted
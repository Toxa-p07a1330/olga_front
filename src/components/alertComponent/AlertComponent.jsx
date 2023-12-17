import style from './style.module.scss';
import alertJDL from "../../logic/show-modal/show-modal";

const AlertComponent = props => {
    const closeHandler = () => {
        alertJDL(null, true);
    };
    return (
        <div className={style.wrapper}>
            <div className={style.content}>{props.children}</div>
            <div className={style.close} onClick={closeHandler}>
                X
            </div>
        </div>
    );
};
export default AlertComponent;

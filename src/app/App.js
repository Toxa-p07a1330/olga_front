import style from "./style.module.scss"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorCatcher from "../logic/error-catcher/error-catcher";
import {ErrorPage} from "../pages/error/error-page";
import {ContentfulPage} from "../pages/contentful-page/contentful-page";
import {OptionalSide} from "../routing/optional-side";
import ModalWrapper from "../components/modal-wrapper/ModalWrapper";

function App() {
    return (
        <div className={style.wrapper}>
            <ErrorCatcher>
                <ModalWrapper />
                <OptionalSide/>
            </ErrorCatcher></div>
    );
}

export default App;

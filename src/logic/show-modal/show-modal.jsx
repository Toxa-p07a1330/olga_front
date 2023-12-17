import AlertComponent from "../../components/alertComponent/AlertComponent";

const alertJDL = (e, hide) => {
    const event = new CustomEvent('customAlert', {
        detail: {payload: <AlertComponent>{e}</AlertComponent>, hide: hide}
    });
    document.dispatchEvent(event);
};
export default alertJDL
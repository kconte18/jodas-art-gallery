import ReactDOM from "react-dom";
import Card from "../Card/Card";
import styles from "./Modal.module.css";

function Backdrop(props: any) {
    return(
        <div className={styles.backdrop} onClick={props.onClose}/>
    )
}

function ModalOverlay(props: any) {
    return(
        <div className={styles.modal}>
            {props.children}
        </div>
    )
}

export default function Modal(props: any) {
    return(
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop-root')!)}
            {ReactDOM.createPortal(<ModalOverlay children={props.children}/>, document.getElementById('overlay-root')!)}
        </>
    )
}
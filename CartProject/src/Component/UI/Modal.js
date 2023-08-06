import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    );
}

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;
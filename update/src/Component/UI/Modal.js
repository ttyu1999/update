import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdeop = (props) => {
    const showClass = `${styles.backdrop} ${props.remove ? styles.remove__backdrop : ''}`;

    return <div className={showClass} onClick={props.onHide} />;
}

const ModalOverlay = (props) => {
    const showClass = `${styles.modal} ${props.onMoveIn} ${props.remove ? props.onMoveOut : ''}`;

    return (
        <div className={showClass}>
            {props.children}
        </div>
    );
}

const portalElement = document.getElementById('overlay');

const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<Backdeop onHide={props.onHide} remove={props.remove} />, portalElement)}
            {ReactDOM.createPortal(
            <ModalOverlay remove={props.remove} onMoveIn={props.onMoveIn} onMoveOut={props.onMoveOut}>
                {props.children}
            </ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;
import ReactDOM from "react-dom";

export const ModalPortal = ({ children }) => {
    const el = document.getElementById('modal');
    if(el) {
        return ReactDOM.createPortal(children, el);
    }
}
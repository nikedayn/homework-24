import './button.scss';

const Button = (props) => {
    return(
        <button onClick={props.createNote} ref={props.btnRef} className={props.btnClass}>{props.btnText}</button>
    )
};

export default Button ;
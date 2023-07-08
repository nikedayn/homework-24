import s from './form.module.scss';
import FormItem from './FormItem';

const Form = (props) => {
    let options = props.formElements.map((option, index)=> {
        return (<FormItem 
            {...option}
            titleRef={props.titleRef}
            textRef={props.textRef}
            themeRef={props.themeRef}
            />);
    })

    return(
        <form action="" className={s.form}>
            {options}
        </form>
    )
};

export default Form;
import s from "./main_words.module.scss";

const MainWords = (props) => {
    return(
        <article className={s.main_words}>
            <h1 className={s.main_slogan}>{props.mainSlogan}</h1>
            <p className={s.bottom_text}>{props.bottomText}</p>
            <button className={s.join_us}>{props.btnText}</button>
        </article>
    )
};

export default MainWords;
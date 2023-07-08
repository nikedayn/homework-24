import s from "./logo.module.scss";
import { Link } from "react-router-dom";

const Logo = (props) => {
    return(
        <Link to='/'>
            <div className={s.logo_and_name}>
                <img src={props.imgSrc} alt="logo"/>
                <p>{props.companyName}</p>
            </div>
        </Link>
    )
};

export default Logo;
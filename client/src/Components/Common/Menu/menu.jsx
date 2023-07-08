import MenuItem from './menuItem';
import "./menu.scss";

const Menu = (props) => {
    let links = props.links.map((link, index)=> {
        return <MenuItem key={`${props.type}${index}`} textForLink={link.text} toForLink={link.path} class={props.class}/>
    })
    return(
        <ul className={props.class}>
            {links}
        </ul>
    )
};

export default Menu;
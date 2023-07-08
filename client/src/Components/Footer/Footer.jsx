//import стилей
import s from './footer.module.scss';

//import компонентов
import Menu from '../Common/Menu/menu';

let links = [
    {
        path: "/",
        text: "About As"
    },
    {
        path: "/",
        text: "Contact"
    },
    {
        path: "/",
        text: "CR Info"
    },
    {
        path: "/",
        text: "Twitter"
    },
    {
        path: "/",
        text: "Facebook"
    }
]

//function componet
const Footer = (props) => {
    return(
        <footer>
            <div className='container'>
                <Menu type='footerNavigation' links={links} class={s.footer_menu}/>
            </div>
        </footer>
    )
};

export default Footer;
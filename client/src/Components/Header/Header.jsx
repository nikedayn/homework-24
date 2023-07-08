//import стилей
import './header.scss';

//import компонентов
import LogoContainer from './Logo/logo';
import logoImg from '../assets/img/Logo.png';
import Menu from '../Common/Menu/menu';

let links = [
    {
        path: "/discover",
        text: "Discover"
    },
    {
        path: "/join",
        text: "Join"
    },
    {
        path: "/sing-in",
        text: "Sign In"
    },
    {
        path: "/notes",
        text: "Notes"
    }
]

//function componet
const Header = (props) => {
    return(
        <header>
            <div className="container">
                <LogoContainer imgSrc={logoImg} companyName='Simo'/>
                <Menu links={links} type='navigation' class='navigation_menu'/>
            </div>
        </header>
    )
};

export default Header;
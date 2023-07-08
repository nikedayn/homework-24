//import стилей
import './main.scss';

import React from 'react';

//import компонентов
import MainWords from './main_words_and_btn/MainWords';
import mainPageBackground from '../assets/img/Background-image.png';

//function componet
const Main = (props) => {
    return(
        <main>
            <div className="container">
                <MainWords mainSlogan='Feel the music' bottomText='Stream over 10 million songs with one click' btnText='Join now'/>
                <img src={mainPageBackground} alt="main_page_background" className='main_page_background' />
            </div>
        </main>
    )
};

export default Main;
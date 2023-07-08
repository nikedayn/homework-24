//header
import Header from "./Components/Header/Header";

//страницы сайта
import MainPage from "./Components/MainPage/MainPage";

//footer
import Footer from "./Components/Footer/Footer";

//для новых страниц
import {BrowserRouter, Routes, Route} from "react-router-dom";

import NotesContainer from "./Components/NotesPage/NotesContainer";

const App = () => {
    return(
        <div className="wraper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/notes" element={<NotesContainer/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
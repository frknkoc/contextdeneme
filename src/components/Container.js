import Button from './Button';
import Header from './Header';
import { useContext } from "react";
import ThemeContext from '../context/ThemeContext';
import Profile from './Profile';

// import { useTheme } from "../context/Themecontext";
/* EĞER ÜSTTEKİ İFADEYİ KULLANIRSAN 1. SIRADAKİ İMPORTU KALDIRMALISIN */


function Container() {
    const { theme } = useContext(ThemeContext);

    // const {theme } = useTheme(); 
    // EĞER useTheme Kullanırsan Yukarıdaki Gibi Düzenlemelisin


    return (
        <div className={`app ${theme === "dark" ? theme : "light"}`}>
            <Header />

            <br /><hr /><br />

            <Button />

            <br /><hr /><br />
            <Profile />

        </div>
    )
}

export default Container

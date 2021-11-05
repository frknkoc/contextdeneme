import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

// import { useTheme } from "../context/Themecontext";
/* EĞER ÜSTTEKİ İFADEYİ KULLANIRSAN 1. SIRADAKİ İMPORTU KALDIRMALISIN */

function Button() {
    const { theme, setTheme } = useContext(ThemeContext);

    // const {theme, setTheme } = useTheme(); 
    // EĞER useTheme Kullanırsan Yukarıdaki Gibi Düzenlemelisin

    return (
        <div>
            Active theme : {theme} &nbsp;<br />

            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>CHANGE</button>
        </div>

    )
}

export default Button

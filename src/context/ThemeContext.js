import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const values = {
        theme,
        setTheme,
    }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

/*const useTheme = () => useContext(ThemeContext);*/

/*export { useTheme, ThemeProvider };*/

/* AÇIKLAMA METNİNDEKİ GİBİ YAPARSAN DAHA KESTİRME OLUR 
FAKAT ThemeProvider'ın BAŞINDAKİ EXPORT İFADESİNİ KALDIRMALISIN */

export default ThemeContext;
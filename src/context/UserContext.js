import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children}) => {

    const [user, setUser] = useState(null);

    const values ={ user, setUser};

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

/*const useUser = () => useContext(UserContext);*/

/*export { useUser, UserProvider };*/

/* AÇIKLAMA METNİNDEKİ GİBİ YAPARSAN DAHA KESTİRME OLUR 
FAKAT UserProvider'ın BAŞINDAKİ EXPORT İFADESİNİ KALDIRMALISIN */


export default UserContext;
import { useContext, useState } from "react";

import UserContext from "../context/UserContext"

// import { useUser } from "../context/Usercontext";
/* EĞER ÜSTTEKİ İFADEYİ KULLANIRSAN 1. SIRADAKİ useContext'i KALDIRMALISIN */



function Profile() {
    const { user, setUser } = useContext(UserContext);

        // const {user, setUser } = useUser(); 
    // EĞER useTheme Kullanırsan Yukarıdaki Gibi Düzenlemelisin

    
    
    const [loading, setLoading] = useState(false);


    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({ id: 1, username: "furkan", bio: "lorem ipsum" });
            setLoading(false)
        }, 1000);
    };

    const handleLogout =() => {
        setUser (null);
    };

    return (
        <div>
            {!user && (
                <button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>

            )}
            {JSON.stringify(user)}<br/><br/>

            {user && 
                <button onClick={handleLogout}>Logout</button>

            }

        </div>
    )
}

export default Profile

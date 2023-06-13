import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchdata = async () => {
            const res =await axios.get('/profile');
            const data =await res.data;
            setUser(data)
            setLoading(false)
            console.log(data);
        }

        if (!user) {
            fetchdata(); 
        }
    }, [])
    
    const contextInfo = {user, setUser, loading}
    return (
        <UserContext.Provider value={contextInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
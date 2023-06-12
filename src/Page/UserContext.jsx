import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const contextInfo = {user, setUser}
    return (
        <UserContext.Provider value={contextInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
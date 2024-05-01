import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(); // Tạo một Context mới

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false); // Trạng thái đăng nhập và hàm để cập nhật trạng thái

    const login = () => {
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ loggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);

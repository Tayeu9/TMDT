import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';
import LoginForm from './LoginForm';
import Register from './Register'
import '../css/Head.css'
function Head() {
    const { loggedIn } = useAuth();
    const { logout } = useAuth();
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };
    const handleCloseRegister = () => {
        setShowRegister(false);
    };
    useEffect(() => {
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const updateDateTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();

        const formattedTime = hours + ":" + minutes + ":" + seconds;
        const formattedDate = "Thứ " + (now.getDay() + 1) + " Ngày " + day + "/" + month + "/" + year;

        document.getElementById("time").innerHTML = formattedTime;
        document.getElementById("date").innerHTML = formattedDate;
    };
    const handleLogout = () => {
        logout(); // Gọi hàm logout khi người dùng nhấn vào nút "Đăng xuất"
    };
    return (
        <div className='dn-dk'>
            <div className="info">
                <p id="location"></p>
                <p id="time"></p>
                <p id="date"></p>
            </div>
            <div className="actions">
                {loggedIn ? (<></>) : (
                    <a onClick={() => setShowLoginForm(true)} className="btn">Đăng nhập</a>
                )}


                {loggedIn ? (
                    <a onClick={handleLogout} className="btn">Đăng xuất</a>
                ) : (
                    <a href="#" onClick={() => setShowRegister(true)} className="btn">Đăng ký</a>
                )}
                {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
                {showRegister && <Register onClose={handleCloseRegister} />}
            </div>
        </div>
    );
}

export default Head;

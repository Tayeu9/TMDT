import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import '../css/Head.css'

function LoginForm({ onClose }) {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '12345') {
            login();
            onClose();
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng!');
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-form">
                <span className="close-button" onClick={onClose}>X</span>
                <div className='tieude'>Số điện thoại </div>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className='tieude'>Mật khẩu</div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='aa'><a>Quên mật khẩu</a></div>
                <button onClick={handleLogin}>Đăng nhập</button>
            </div>
        </div>
    );
}

export default LoginForm;


import '../css/Head.css'

function Register({ onClose }) {




    return (
        <div className="login-form-container2">
            <div className="login-form">
                <span className="close-button" onClick={onClose}>X</span>
                <div className='tieude'>Họ và tên</div>
                <input
                    type="text"

                />
                <div className='tieude'>SDT</div>
                <input
                    type="text"
                />
                <div className='tieude'>Mật khẩu</div>
                <input
                    type="password"
                />
                <div className='tieude'>Nhập lại mật khẩu</div>
                <input
                    type="password"
                />

                <div className='aa'><a>Điều khoản sử dụng</a></div>
                <button>Đăng ky</button>
            </div>
        </div>
    );
}

export default Register;

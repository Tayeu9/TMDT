import React from 'react';
import './css/Lichsu.css'; // Import your CSS file
import Head from './Component/js/Head';
import Menu from './Component/js/Menu';
import Footer from './Component/js/Footer';
import Title from './Component/Component_Child/js/Title';
import anh1 from './images/image 11.png';
import Navbar from './Component/Component_Child/js/Navbar'
import ListLS from './Component/Component_Child/js/ListLS'
function Lichsu() {
    return (
        <div>
            <Head />
            <Menu />
            <Title key={1} de={"LICH SU"} />
            <div className="timkiem">
                <div className="search-box">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <button type="submit" id="find"></button>
                </div>
                <div className="timkiemnangcao">
                    <div className="tentk">
                        <p>Lọc</p>
                    </div>
                    <div className="combo-box">
                        <select>
                            <option value="option1">Thời gian</option>
                            <option value="option2">Điện thoại</option>
                            <option value="option3">Ti vi</option>
                            <option value="option4">Tủ lạnh</option>
                        </select>
                    </div>
                    <div className="tentk">
                        <p>Trạng thái</p>
                    </div>
                    <div className="combo-box">
                        <select>
                            <option value="option1">Hoàn tất</option>
                            <option value="option2">Thất bại</option>
                            <option value="option3">Đang diễn ra</option>
                            <option value="option4">Chờ thanh toán</option>
                        </select>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '150px' }}>
                <img src={anh1} alt="Cham than" width="15" height="15.2" />
                <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#BBB8B8' }}>Vui lòng làm mới trang để cập nhật thông tin mới</p>
            </div>

            <div >
                <ListLS> </ListLS>
                <Navbar></Navbar>
            </div>
            <Footer />
        </div>
    );
}

export default Lichsu;

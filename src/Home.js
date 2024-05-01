import React, { useState } from 'react';
import './Component/Component_Child/js/NavbarHome';
import Title from './Component/Component_Child/js/Title';
import NavbarHome from './Component/Component_Child/js/NavbarHome';
import Navbar from './Component/Component_Child/js/Navbar';
import List from './Component/js/List';
import Head from './Component/js/Head';
import Menu from './Component/js/Menu';
import Banner from './Component/js/Banner';
import Footer from './Component/js/Footer';
import anh from './images/image 4.png';
import './Home.css';

function Home() {
    const [loai, setLoai] = useState(1);
    const handleNavbarClick = (buttonId) => {
        setLoai(buttonId);
    };
    return (
        <div>
            <Head />
            <Banner />
            <Menu />
            <div className="quang-cao">
                <div id="chu-qc">
                    <p>ĐẤU GIÁ T SHOP</p>
                    <p>MUA VỚI NHIỀU LOẠI GIÁ</p>
                    <button id="btn-thu_ngay">THỬ NGAY</button>
                </div>
                <div id="anh-qc">
                    <img src={anh} alt="laptop" />
                </div>
            </div>
            <Title key={1} de={"CÁC PHIÊN ĐẤU GIÁ"} />
            <NavbarHome loai={loai} handleNavbarClick={handleNavbarClick} /> {/* Truyền hàm và giá trị loại xuống NavbarHome */}
            <List key={1} loai={loai} />
            <Navbar />
            <Footer />
        </div>
    );
}

export default Home;

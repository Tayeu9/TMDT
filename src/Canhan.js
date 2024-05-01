import './css/Canhan.css';
import Menu from './Component/js/Menu';
import Head from './Component/js/Head';
import Footer from './Component/js/Footer';
import Title from './Component/Component_Child/js/Title';
import anh1 from './images/image 13.png';
import anh2 from './images/image 15.png';
import anh3 from './images/image 14.png';
import anh4 from './images/image 16.png';
function Canhan() {
    return (
        <div>
            <Head />
            <Menu />
            <Title key={1} de={"TRANG CÁ NHÂN"} />
            <div className="ttcn">
                <div className="money">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '250px', height: '150px', margin: '0 auto' }}>
                        <div id="anh_ca_nhan"></div>
                        <div id="ca_nhan">
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Huỳnh Văn Tiến</p>
                            <p>ID: YDVFFB</p>
                            <p>Tiền: 21.000đ</p>
                        </div>
                    </div>
                    <div id="chonrut">
                        <button id="R">Nạp tiền</button>
                        <button id="Ruttien">Rút tiền</button>
                    </div>
                    <div style={{ display: 'flex', marginTop: 'auto', flexDirection: 'column' }}>
                        <div className="tk"><p>Tài khoản</p></div>
                        <div className="tk"><p>Theo dõi đơn hàng</p></div>
                        <div className="tk"><p>Công cụ cho người bán</p></div>
                    </div>
                </div>
                <div className="mangxahoi">
                    <div className="ngay_btncapnhap">
                        <p style={{ marginLeft: '50px', fontSize: '14px', fontWeight: 'bold' }}>2/4</p>
                        <a style={{ marginRight: '50px', color: '#A5D6F1' }} href="#">Cập nhập mật khẩu</a>
                    </div>
                    <div className="thongtinsdt">
                        <img src={anh1} alt="Phone" width="72px" height="72px" />
                        <p>0774515743</p>
                        <button>Thay đổi</button>
                    </div>
                    <div className="face">
                        <img src={anh2} alt="Facebook" width="72px" height="72px" />
                        <button>Liên kết ngay</button>
                    </div>
                    <div className="mail">
                        <img src={anh3} alt="Mail" width="72px" height="72px" />
                        <p>Tiensihohuynh123@gmail.com</p>
                        <button>Thay đổi</button>
                    </div>
                    <div className="google">
                        <img src={anh4} alt="G" width="72px" height="72px" />
                        <button>Liên kết ngay</button>
                    </div>
                </div>
            </div>
            <div className="mua_ban">
                <div style={{ width: '405px', height: '149px', backgroundColor: '#d9d9d9', display: 'flex', alignItems: 'center', marginTop: '100px', marginLeft: '-40px' }}></div>
                <div id="buy">
                    <p className="chu">Mua</p>
                    <div className="quantity"><p>0</p></div>
                </div>
                <div id="sell">
                    <p className="chu">Bán</p>
                    <div className="quantity"><p>100</p></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Canhan;

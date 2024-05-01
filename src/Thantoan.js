import './css/Thanhtoan.css'
import Head from './Component/js/Head';
import Menu from './Component/js/Menu';
import Footer from './Component/js/Footer';
import Title from './Component/Component_Child/js/Title'
import anh1 from './images/material-symbols_person.png'
import anh2 from './images/Group 7.png'
import anh3 from './images/ph_truck.png'
import anh4 from './images/mingcute_sale-line.png'
import anh6 from './images/ph_money-fill.png'
function Thanhtoan() {
    return (
        <div>
            <Head></Head>
            <Menu></Menu>
            <Title key={1} de={"TRANG THANH TOAN"}></Title>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div id="thongtincanhan">
                    <div id="ten_sdt">
                        <p>Địa chỉ nhận hàng</p>
                        <p>Huỳnh Văn Tiến</p>
                        <p>0921899124</p>
                    </div>
                    <div id="dia_chi">
                        <p style={{ fontSize: '20px', color: 'black', fontWeight: 'normal' }}>68 Võ Văn Tần, Quận Thanh Khê, Thành Phố Đà Nẵng</p>
                    </div>
                    <button type="button" id="mac_dinh">Mặc định</button>
                    <button type="button" id="thay_doi">Thay đổi</button>
                </div>

                <div id="product">
                    <p style={{ marginLeft: '50px', fontWeight: 'bold' }}>Sản phẩm</p>
                    <div id="ma">
                        <img src={anh1} alt="Person" width="40px" height="40px" />
                        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>ID: HFGGDFJ</p>
                        <button id="lienhe">Liên hệ người bán</button>
                    </div>
                    <div id="mieuta">
                        <div style={{ width: '350px', height: '270px', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' }}>
                            <img src={anh2} alt="Maytinh" width="350px" height="270px" />
                        </div>
                        <div id="mieuta_thongtin">
                            <p>Máy tính DELL XXX</p>
                            <p><strong>Loại:</strong> Laptop</p>
                            <p><strong>Màu: </strong> Màu trắng</p>
                            <p><strong>Giá: </strong> 18.000.000 VNĐ</p>
                            <button id="ct">Chi tiết</button>
                        </div>
                    </div>
                    <div class="giatien">
                        <div>
                            <img src={anh3} alt="Truck" width="35px" height="35px" />
                            <p>Vật liệu tiêu chuẩn</p>
                            <button class="nut_tam_giac"></button>
                        </div>
                        <p class="giatien_vnd">30,000 VNĐ</p>
                    </div>
                    <div class="giatien">
                        <div>
                            <img src={anh4} alt="Truck" width="35px" height="35px" />
                            <p>Chọn mã giảm giá</p>
                            <button class="nut_tam_giac"></button>
                        </div>
                        <p class="giatien_vnd">0 VNĐ</p>
                    </div>
                </div>

                <div id="checkout">
                    <img src={anh6} alt="Dollar" width="70px" height="60px" style={{ marginLeft: '80px' }} />
                    <div style={{ display: 'flex', marginRight: '100px' }}>
                        <p>Thanh toán khi nhận hàng</p>
                        <button id="setting">Cài đặt</button>
                    </div>
                    <div>
                        <p>Tổng thanh toán</p>
                        <p style={{ fontSize: '24px' }}>18,030,000 VNĐ</p>
                    </div>
                    <button id="mua">Mua hàng</button>
                </div>
            </div>

            <Footer></Footer>
        </div>


    )
}
export default Thanhtoan;
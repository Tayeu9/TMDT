import Head from './Component/js/Head';
import Menu from './Component/js/Menu';
import Title from './Component/Component_Child/js/Title'
import Footer from './Component/js/Footer';
import './css/Chitiet.css'
import { Link } from 'react-router-dom';
import anh from './images/image 4.png';
import Phongkhac from './Component/js/Phongkhac'

function Chitiet() {
    return (
        <div>
            <Head></Head>
            <Menu></Menu>
            <Title key={2} de={"TRANG CHI TIẾT"}></Title>
            <div className='underTitle'>
                <Link to={"/Phongdaugia"}>
                    <button id="tham-gia">Tham gia đấu giá</button>
                </Link>

            </div>
            <div class="chitiet">
                <div id="ten-hinh">
                    <div className='anh'>
                        <img src={anh} alt="Laptop" />
                    </div>
                </div>
                <div id="thong-tin">
                    <div class="ttct">
                        <table>
                            <tr>
                                <th>Mã SP:</th>
                                <th>AHD1LJG</th>
                            </tr>
                            <tr>
                                <th>Tên sản phẩm:</th>
                                <th>DELL XXX</th>
                            </tr>
                            <tr>
                                <th>Mã người mua</th>
                                <th>ADH1LJG</th>
                            </tr>
                            <tr>
                                <th>SDT</th>
                                <th>0921899124</th>
                            </tr>
                            <tr>
                                <th>Thời gian</th>
                                <th>12:00:00 ngày 21/05/2003</th>
                            </tr>
                            <tr>
                                <th>Giá SP tiêu chuẩn</th>
                                <th>18.000.000 VNĐ</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='ct1'>
                <div className='ct2'>
                    <div className='ct3'>
                        <p>Mô tả</p>
                    </div>
                    <p>Máy tính DELL XXX được ra mắt vào đầu năm 2024
                        với cấu hình cực cao,
                        sở hữu bộ nhớ 100T cùng 99 khe ram mỗi khe có thể gắn lên tới 64GB.
                        Đây là một lựa chọn tốt cho những sinh viên mới ra trường chưa có việc làm xem tiktok,
                        nghe nhạc mà không sợ bị giật lag. Ngoài ra nó còn hỗ trợ công nghệ 99G mới nhất của tương lai.
                        Giá cả phải chăng cũng là một ưu điểm không thể kể tới chỉ cần 1000 ngày không uống trà sữa là có thể sở hữu nó.
                        Hay mua ngay hôm nay !
                    </p>
                </div>
            </div>
            <div className='anhspp'>
                <img src={anh} alt="May-tinh" />
            </div>
            <Title key={2} de={"CÁC PHIÊN ĐẤU GIÁ KHÁC"}></Title>
            <Phongkhac></Phongkhac>
            <Footer></Footer>
        </div>
    )


}
export default Chitiet;


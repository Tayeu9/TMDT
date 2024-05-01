import './css/Trangsp.css'
import Head from './Component/js/Head';
import Menu from './Component/js/Menu';
import Footer from './Component/js/Footer';
import Title from './Component/Component_Child/js/Title';
import ListSanpham from './Component/js/ListSanpham'
import Navbar from './Component/Component_Child/js/Navbar'
function Trangsp() {
    return (
        <div>
            <Head></Head>
            <Menu></Menu>
            <Title key={1} de={"TRANG SAN PHAM"}></Title>
            <div class="timkiem">
                <div class="search-box">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <button type="submit" id="find"></button>
                </div>
                <div class="timkiemnangcao">
                    <div class="tentk">
                        <p>Loại</p>
                    </div>
                    <div class="combo-box">
                        <select>
                            <option value="option1">Laptop</option>
                            <option value="option2">Điện thoại</option>
                            <option value="option3">Ti vi</option>
                            <option value="option4">Tủ lạnh</option>
                        </select>
                    </div>

                    <div class="tentk">
                        <p>Hãng</p>
                    </div>
                    <div class="combo-box">
                        <select>
                            <option value="option1">Dell</option>
                            <option value="option2">Panasonic</option>
                            <option value="option3">Asus</option>
                            <option value="option4">Iphone</option>
                        </select>
                    </div>

                    <div class="tentk">
                        <p>Giá</p>
                    </div>
                    <div class="combo-box">
                        <select>
                            <option value="option1">Thấp</option>
                            <option value="option2">Cao</option>
                            <option value="option3">Trung bình</option>
                        </select>
                    </div>
                </div>
            </div>

            <ListSanpham key={1} loai={1}></ListSanpham>
            <Navbar> </Navbar>
            <Footer></Footer>
        </div>
    )
}
export default Trangsp;
import './Admin.css'
import Head from './Component/js/Head';
import Menu from './Component/js/Menu';
import Title from './Component/Component_Child/js/Title'
import ListAdmin from './Component/js/ListAdmin'
import anh1 from './images/T (10).png'
import { Image } from 'antd'
function Admin() {
    return (
        <div>
            <Head></Head>
            <Menu></Menu>
            <Title key={1} de={"TRANG QL"}></Title>
            <div className='container2'>

                <div className='menuleft'>
                    <div className='fix'>
                        <div className='heder'>
                            <Image style={{ with: '200px', height: '200px' }} src={anh1}></Image>
                        </div>
                        <ul>
                            <li>Sản Phẩm</li>
                            <li>Thống kê</li>
                            <li>QL Phiên</li>
                            <li>QL Khach hang</li>
                        </ul>
                    </div>

                </div>
                <div className='ListAdmin'>
                    <ListAdmin ></ListAdmin>
                </div>

            </div>

        </div>


    )
}
export default Admin;
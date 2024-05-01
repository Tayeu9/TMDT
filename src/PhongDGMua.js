import React from 'react';
import { Table, Layout, Input, Button, Typography, Image, Space, InputNumber } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, WalletOutlined, InfoCircleOutlined, SendOutlined } from '@ant-design/icons';
import './css/Phongdaugia.css';
import Head from './Component/js/Head';
import Menu from './Component/js/Menu';
import Footer from './Component/js/Footer';
import Phongkhac from './Component/js/Phongkhac'
import anh from './images/image 4.png';
const { Header, Content } = Layout;
const { Text, Title } = Typography;
const onChange = (value) => {
    console.log('changed', value);
};
const dataSource = [
    { name: 'MR Nam', price: '18750000 vnd', time: '2p ago' },
    { name: 'MR Nam', price: '17500000 vnd', time: '2p ago' },
    { name: 'MR Nam', price: '17000000 vnd', time: '2p ago' },
];
const columns = [
    { title: 'Tên người đấu giá', dataIndex: 'name' },
    { title: 'Giá trị đấu giá', dataIndex: 'price' },
    { title: 'Thời gian đấu giá', dataIndex: 'time' },
];

const logos = [

    'https://baobiphuongnam.com/datafiles/33230/upload/files/LOGO%20PN-01.png',
    'https://cdn.haitrieu.com/wp-content/uploads/2023/06/Logo-Tong-Cong-Ty-319.png',
    'https://namapacking.com/wp-content/uploads/2020/11/logo_nama-300x300.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/2048px-General_Electric_logo.svg.png',
    'https://thietkelogodep.com.vn/wp-content/uploads/2015/07/logo-gia-thinh-02.png',
];

function PhongDGMua() {
    return (
        <Layout className="main-layout"> {/* Wrap in a Layout component */}
            <Head></Head>
            <Menu></Menu>
            <Content className="main-content"> { }
                <div> { }
                    <p className="low-price-text">
                        <Space>
                            <InfoCircleOutlined />
                            <Text>Giá thấp nhất được cập nhật mỗi 5 phút</Text>
                        </Space>
                    </p>
                    <div>
                        <p className="tenphongdg">
                            <Text >PHÒNG ĐẤU GIÁ #12836</Text>
                        </p>

                        <div className="container">

                            <div className="boxx">
                                <div className="product-box">
                                    <p className="tensanpham">
                                        Laptop DELL XXXX
                                    </p>
                                    <Image
                                        width={200}
                                        height={150}
                                        src="https://hoangsonstore.com/wp-content/uploads/2022/08/moi-100-laptop-gaming-dell-g15-5515-ryzen-7-5800h-8gb-512gb-rtx-3050ti-15-6-fhd-120hz-3277-3.jpg" // Replace with your image URL
                                        alt="Product_Image"
                                    />
                                    <div className="button-container"> { }
                                        <Button className='btDG' type="primary">Xác nhận giá</Button>
                                        <Button className='btHuy' type="primary" danger>Huỷ đấu giá</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="time-and-price">
                                <p>Thời gian còn lại</p>
                                <div className="time-container">
                                    <Text strong>05:00:00</Text>
                                </div>
                                <p> Giá trị định giá</p>
                                <div className="price-container">
                                    <Text strong>100.000.000 VNĐ</Text>
                                </div>
                                <p> Giá thấp nhất hiện tại</p>
                                <div className="lowest-price-container">
                                    <Text strong>80.000.000 VNĐ</Text>
                                </div>
                            </div>

                            <div className="boxx">
                                <div className="chat-container"> { }
                                    <div className="message-box"> { }
                                    </div>
                                </div>
                                <div className="chat-input"> { }
                                    <input type="text" placeholder="Type your message..." />
                                    <Button className='icon-button'> <SendOutlined /></Button>
                                </div>
                            </div>

                        </div>

                        <div className="container">

                            <div className="boxx">
                                <div className="nhap-gia">
                                    <div className="price-button">
                                        { }
                                        <Button size="large" style={{ fontWeight: 'bold', height: '60px' }}>Tạo phiên đấu giá khác</Button>
                                        <Button size="large" style={{ fontWeight: 'bold', height: '60px' }}>Cài đặt</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="boxx" style={{ marginTop: '50px' }}>
                                <div className="bang-dau-gia"  >
                                    <Table dataSource={dataSource} columns={columns} />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <Title level={2} style={{ textAlign: 'center' }}>CÁC PHÒNG ĐẤU GIÁ KHÁC</Title>

                <Phongkhac></Phongkhac>

                <Footer></Footer>


            </Content>
        </Layout>
    );
}



export default PhongDGMua;

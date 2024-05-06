import React, { useState } from "react";
import Head from './Component/js/Head';
import Menu from './Component/js/Menu';
import Footer from './Component/js/Footer';
import { Typography, Image, Space, DatePicker, Input, Checkbox, Button } from 'antd'; // Import Typography từ antd
import { InfoCircleOutlined } from '@ant-design/icons';
const { Title, Text } = Typography; // Destructure và lấy ra component Title từ Typography
const { TextArea } = Input;

function Taophien() {
    const [setSelectedColor] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    // Function to handle color click
    const handleColorClick = (color) => {
        setSelectedColor(color);

    };
    return (
        <div>
            <Head></Head>
            <Menu></Menu>
            <Title level={1} style={{ marginBottom: '20px', textAlign: 'center' }}> TẠO PHIÊN ĐẤU GIÁ </Title>


            <div style={{ display: 'flex', justifyContent: 'space-between,', marginLeft: '100px', marginRight: '100px' }}>

                <div style={{ flex: 1 }}>
                    <Space>
                        <InfoCircleOutlined />
                        <Text style={{ color: '#BBB8B8' }}> Vui lòng điền đầy đủ thông tin cần thiết </Text>
                    </Space>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            style={{
                                border: '2px solid #D9D9D9',
                                borderRadius: '0 30px 0 0px',
                                width: '350px',
                                height: '350px',
                            }}
                            src="https://hoangsonstore.com/wp-content/uploads/2022/08/moi-100-laptop-gaming-dell-g15-5515-ryzen-7-5800h-8gb-512gb-rtx-3050ti-15-6-fhd-120hz-3277-3.jpg"
                        />
                    </div>
                </div>

                {/* Hộp chứa thông tin sản phẩm */}
                <div style={{ flex: 2, marginLeft: '200px', padding: '20px', backgroundColor: '#FAFAFA', border: '2px solid #D9D9D9' }}>
                    <div className="product-info">
                        <Text> Mã SP </Text>
                        <Text style={{ marginRight: '100px' }}> AHD1LJG
                        </Text>
                    </div>
                    <div className="product-info">
                        <Text > Tên sản phẩm</Text>
                        <Text style={{ marginRight: '100px' }}> Laptop DELL XXX
                        </Text>
                    </div>
                    <div className="product-info">
                        <Text> Mã người mua</Text>
                        <Text style={{ marginRight: '100px' }}>
                            AHD1LJG
                        </Text>
                    </div>
                    <div className="product-info">
                        <Text> Số điện thoại </Text>
                        <Text style={{ marginRight: '100px' }}>
                            0935089651
                        </Text>
                    </div>
                    <div className="product-info">
                        <Text> Màu </Text>
                        <span style={{ marginRight: '100px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#D9D9D9', marginRight: '10px', cursor: 'pointer' }} onClick={() => handleColorClick('#D9D9D9')}></div>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#D63D3D', marginRight: '10px', cursor: 'pointer' }} onClick={() => handleColorClick('#D63D3D')}></div>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#0E0D0D', marginRight: '10px', cursor: 'pointer' }} onClick={() => handleColorClick('#0E0D0D')}></div>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#2143B9', cursor: 'pointer' }} onClick={() => handleColorClick('#2143B9')}></div>
                            </div>
                        </span>
                    </div>
                    <div className="product-info">
                        <Text> Giá sản phẩm tiêu chuẩn</Text>
                        <Text style={{ marginRight: '100px' }}>
                            18,000,000 VND
                        </Text>
                    </div>
                </div>
                {/* <table style={{ border: 'solid 1px black' }}>
                    <tr>
                        <td>a</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table> */}
            </div>

            <Title level={1} style={{ textAlign: 'center', marginTop: '100px' }}> THÔNG TIN CHI TIẾT </Title>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '300px', marginRight: '300px' }}>
                <Title level={3} style={{ marginBottom: '10px', textAlign: 'left' }}> Thời gian bắt đầu</Title>
                <DatePicker
                    placeholder="Chọn ngày bắt đầu"
                    value={startTime}
                    onChange={(date) => setStartTime(date)}
                    size='large'
                />
                <Title level={3} style={{ marginBottom: '10px', textAlign: 'left' }}> Thời gian kết thúc</Title>
                <DatePicker
                    placeholder="Chọn ngày kết thúc"
                    value={endTime}
                    onChange={(date) => setEndTime(date)}
                    size='large'
                />
                <Title level={3} style={{ marginBottom: '10px', textAlign: 'left' }}> Ghi chú</Title>
                <TextArea
                    placeholder="Nhập ghi chú"
                    rows={6} // Adjust the number of rows for desired height (approx. 150px with 4 rows)
                    style={{ resize: 'none' }} // Disable resizing (optional)
                />
                <Title level={3} style={{ marginBottom: '10px', textAlign: 'left' }}> Cho phép người bán đặt nhiều lần trong một khoản thời gian</Title>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox style={{ marginLeft: '20px', color: '#BBB8B8', fontWeight: 'bold' }}>1 lần mỗi 5 phút</Checkbox>
                    <Checkbox style={{ marginLeft: '80px', color: '#BBB8B8', fontWeight: 'bold' }}>Không giới hạn</Checkbox>
                </div>
                <Title level={3} style={{ marginBottom: '10px', textAlign: 'left' }}> Bước giá thấp nhất</Title>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button style={{ width: '150px', height: '55px', fontWeight: 'bold', color: '#FAFAFA', backgroundColor: '#A5D6F1' }}>Trên 10.000 VNĐ</Button>
                    <Button style={{ width: '150px', height: '55px', fontWeight: 'bold', color: '#FAFAFA', backgroundColor: '#FA7676' }}>Trên 100.000 VNĐ</Button>
                    <Button style={{ width: '150px', height: '55px', fontWeight: 'bold', color: '#FAFAFA', backgroundColor: '#A5D6F1' }}>Trên 500.000 VNĐ</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '30px' }}>
                    <Checkbox style={{ marginLeft: '20px', color: '#BBB8B8', fontWeight: 'bold' }}>Đồng ý với điều khoản của chúng tôi</Checkbox>
                </div>
                <Button style={{
                    marginTop: '20px', backgroundColor: '#A5D6F1', fontWeight: 'bold', color: '#FAFAFA', paddingTop: '20px', paddingBottom: '20px', justifyContent: 'center', display: 'flex', alignItems: 'center', textAlign: 'center',
                }}> Tạo phiên</Button>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Taophien;

import React from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chitiet from './Chitiet';
import Canhan from './Canhan'
import Trangsp from './Trangsp'
import PhongDGMua from './PhongDGMua'
import Phongdaugia from './Phongdaugia'
import Lichsu from './Lichsu'
import Thanhtoan from './Thantoan'
import Admin from './Admin'
import Taophien from './Taophien';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}> </Route>
      <Route path='/chitiet' element={<Chitiet />}></Route>
      <Route path='/canhan' element={<Canhan />}></Route>
      <Route path='/sanpham' element={<Trangsp />}></Route>
      <Route path='/lichsu' element={<Lichsu />}></Route>
      <Route path='/phongdaugiamua' element={<PhongDGMua />}></Route>
      <Route path='/Phongdaugia' element={<Phongdaugia />}></Route>
      <Route path='/Thanhtoan' element={<Thanhtoan />}></Route>
      <Route path='/Admin' element={<Admin />}></Route>
      <Route path='/Taophien' element={<Taophien />}></Route>
    </Routes>


  );
}

export default App;

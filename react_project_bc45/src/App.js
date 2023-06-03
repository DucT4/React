//rcc (react class component)
import React, { Component } from 'react'
import BTHomePage from './Components/BTHomePage/BTHomePage';
import Card from './Components/Card';
import Navigation from './Components/Navigation';
import ComponentWithStyle from './ConponentWithStyle/ComponentWithStyle';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';

//css
import './assets/style/style.css';
import ComponentWithState from './ComponentWithState/ComponentWithState';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTap from './BaiTap/BaiTap';
import DemoProps from './Props/DemoProps/DemoProps';
import ListProduct from './Props/ShoesShop/ListProduct';
import { DataPhone, DataProduct } from './DataProduct';
import Phondetails from './Props/Phondetail/Phondetails';
import BaiTapGioHang from './BaiTapGioHang/BaiTapGioHang';

//cấu hình router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import BaiTapChonXe from './BaiTap/BaiTapChonXe';
import Header from './Components/Header/Header';
import HomeTemPlates from './templates/HomeTemPlates';
import ProductManagement from './pages/DemoForm/ProductManagement';
import LifeCycleDemo from './pages/LifeCycleDemo/LifeCycleDemo';
import DetailsProduct from './pages/LifeCycleDemo/DetailsProduct';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes >
          <Route path='' element={<HomeTemPlates />} >
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="detail" >
              <Route path=':id' element={<DetailsProduct />}> </Route>
            </Route>
            <Route path="form" element={<ProductManagement />}></Route>
            <Route path="giohang" element={<BaiTapGioHang />} ></Route>
            <Route path='lifecycledemo' element={<LifeCycleDemo />}></Route>
          </Route>
          <Route path="*" element={<Navigate to={'/'} />}></Route>

        </Routes>


      </BrowserRouter>
    )
  }
}

import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class DetailsProduct extends Component {

  state = {
    productDetail: {

    }
  }

  render() {
    return (
      <div className='container'>
        <h3>Details product</h3>
        <div className='row mt-2'>
          <div className='col-4'>
            <img src={this.state.productDetail.image} alt="..." />
          </div>
          <div className='col-8'>
            <h4>{this.state.productDetail.name}</h4>
            <p>{this.state.productDetail.description}</p>
          </div>
        </div>
        <h3 className='mt-2'>Relate product</h3>
        <div className='row'>
          {/*
           potional chaining (?): kiểm tra giá trị có, mới làm tiếp không thì cho qua
            */}
          {this.state.productDetail.relatedProducts?.map((item) => {
            return <div className='col-4' key={item.id}>
              <div className='card'>
                <img src={item.image} alt="..." />
                <div className='card-body'>
                  <NavLink onClick={() => {
                    this.getProductDetail(item.id)
                  }} to={`/detail/${item.id}`} className='btn btn-dark'>View datails</NavLink>
                </div>
              </div>

            </div>
          })}
        </div>
      </div>
    )
  }

  componentDidMount() {
    //vừa load lên trang thì lấy tham số call api => setState bởi api content 
    const url = window.location.href.split('/');
    let id = url[url.length - 1];
    //từ id sẽ call api
    this.getProductDetail(id);
  }


  getProductDetail = async (id) => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=
            ${id} `,
      method: 'GET'
    });
    this.setState({
      productDetail: res.data.content
    })
  }


  componentDidUpdate(prevProps, prevState) {


    // const url = window.location.href.split('/');
    // let id = url[url.length - 1];
    // //từ id sẽ call api
    // this.getProductDetail(id);
  }

}

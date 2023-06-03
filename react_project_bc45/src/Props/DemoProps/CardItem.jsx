import React, { Component } from 'react'

export default class CardItem extends Component {
  render() {
    //this.props (đây là thuộc tính có sẳn của react class component).Dung để nhận dữ liệu từ component cha truyền vào
    /*
    props không thể gán lại dữ liệu
    */
    const {hoTen,hinhAnh,tuoi} = this.props;
    return (
      <div className='card'>
        <img src={hinhAnh} alt="..." />
        <div className='card-body'>
            <h3>Name: {hoTen} </h3>
            <p>Age: {tuoi}</p>
        </div>
      </div>
    )
  }
}

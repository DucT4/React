import React, { Component } from 'react'
import CardItem from './CardItem'
import ProductItem from './ProductItem'

export default class DemoProps extends Component {

  product = {
    id: 1,
    name: 'red car',
    price: 100,
    image: './img/red-car.jpg'
  }
renderLike=()=>{
  return <i className='fa fa-heart text-danger'></i>
}
  render() {
    return (
      <div className='container'>
        <input value={123} />
        <div className='w-25'>
          <CardItem hoTen="Nguyen van a" hinhAnh={'https://i.pravatar.cc?u=1'} tuoi={18} />
        </div>
        <div className='w-25'>
          <ProductItem prod={this.product} content={
            <button className='btn btn-danger rounded-circle'>Sale</button>
          } renderLike={this.renderLike}>
            <p>Lorem ipsum dolor sit amet consectetur Blanditiis, quia?</p>
          </ProductItem>
        </div>
      </div>
    )
  }
}

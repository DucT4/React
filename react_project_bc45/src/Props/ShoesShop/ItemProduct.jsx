import React, { Component } from 'react'

export default class ItemProduct extends Component {
  render() {
    const {sp}=this.props;
    return (
      <div className='card'>
         <div className='card'>
            <img src={sp.image} alt="..." />
            <div className='card-body'>
              <h3>{sp.name}</h3>
              <p>price:{sp.price}</p>
              <span>{sp.description}</span>
              <button className='btn btn-dark'>
                <i className='fa fa-plus'></i>
                add to cart
              </button> 
            </div>
          </div>
      </div>
    )
  }
}

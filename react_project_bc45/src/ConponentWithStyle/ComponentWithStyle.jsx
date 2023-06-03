import React, { Component } from 'react'
//Cách 1: import vào file component
// import '../assets/style/style.css';
//Cách 2: import css module
import cssOb from './style.module.css'

export default class ComponentWithStyle extends Component {
  render() {
    return (
      <div className='container'>
         <p className='color-dark-blue'>Lorem ipsum dolor sit amet.</p>
         <p className={`${cssOb['color-red']} fs-3`}>Lorem ipsum dolor sit amet.</p>
         <p style={{fontSize:40,color:'orange', margin:10}}>Lorem ipsum dolor sit amet.</p>
      </div>
     
    )
  }
}

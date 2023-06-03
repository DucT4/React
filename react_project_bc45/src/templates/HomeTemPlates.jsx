import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import {Outlet} from 'react-router-dom'
export default class HomeTemPlates extends Component {
  render() {
    return (
      <>
      <Header/>
      <main id='body' style={{minHeight:700}}>
        <Outlet/> 
        {/* đại diện cho các component route load lên thẻ này */}
      </main>
      <footer className='bg-dark text-white text-center p-5 '>
        Footer cybersoft
      </footer>
      </>
    )
  }
}

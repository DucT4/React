import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleChangeColor = (e)=>{
        e.target.className='btn btn-success';
    }
    
    thayDoiHoTen = (hoTenMoi)=>{
        document.querySelector('#ho-ten-sv').innerHTML = hoTenMoi;
    }
    
    render() {
        return (
            <div className='container '>
                <button className='btn btn-success' onClick={(e)=>{
                    e.target.className='btn btn-danger'
                }}>
                    Click me!!
                </button>

                <button className='btn btn-dark' onClick={this.handleChangeColor}> Change color</button>
               <h3 id='title'>title</h3>
                <input className='my-2 form-control w-25' id='text' onInput={(e)=>{
                    let {value}=e.target;
                    document.querySelector('#title').innerHTML = value;

                }}/>
                <hr />
                <h3>Ho Ten: <span id='ho-ten-sv'></span></h3>
                <div className='form-ground'>
                    <p>Nhap vao ho ten</p>
                    <input id='txt-ho-ten' className='form-control w-25' />
                    <br />

                    <button className='my-2 btn btn-dark' onClick={(e)=>{
                        let {value}= document.querySelector('#txt-ho-ten');
                        //gọi nhiều hàm khác trog sự kiện onclick
                        this.thayDoiHoTen(value);
                    }}> Submit</button>
                </div>
            </div>
        )
    }
}

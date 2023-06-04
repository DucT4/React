import React, { Component } from 'react'
import { connect } from 'react-redux'

/*

B1:xđ giao diện (dàn layout chia component)
B2: xđ dữ liệu thay đổi (state) => object, array , number, string,..
B3:binding state lên giao diện (kết nối với redux lấy state về và hiển thị lên giao diện)
B4: thay đổi state (xử lí thông qua các sự kiện onclick. onchange, blur,...)=> đưa dữ liệu lên redux xử lí 
*/
class DemoRedux extends Component {
    render() {
        return (
            <div className='container'>
                <h3>ex: like picture</h3>
                <div className='w-25 mt-2 card'>
                    <img src={this.props.img} alt="..." className='w-100' />
                </div>
                <div className='card-body'>
                    <button className='btn btn-danger' onClick={() => {
                        const action = {
                            type: 'changeIMG', //nhãn cảu action
                            payload: './img/red-car.jpg',  //dữ liệu gửi lên redux
                        };
                        this.props.dispatch(action);
                        //dùng this.dispatch để đưa dữ liệu lên reducer
                        this.props.dispatch(action);
                    }}>ChangeIMG</button>
                    <i className='fa fa-heart fs-3 text-danger m-2' style={{
                        cursor: 'pointer'
                    }}
                        onClick={() => {
                            //gửi dữ liệu lên redux
                            const action = {
                                type: 'increaseLike', //nhãn of action
                                payload: 1,  //dữ liệu gửi lên redux
                            }
                            //dùng this.dispatch để đưa dữ liệu lên reducer
                            this.props.dispatch(action);
                        }}></i>{this.props.like}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    like: state.likeReducer,
    img: state.imgReducer
})

//  const mapDispatchToProps = (dispatch)=>{
//     return {
//         dispatch1:()=>{

//         }
//     }
//  }
//dùng thư viện connect để tạo ra nội dung component mới có kết nối dữliệu với redux 
const componentWithRedux = connect(mapStateToProps)(DemoRedux);
export default componentWithRedux


import React, { Component } from 'react'

export default class ComponentWithState extends Component {

    //state là 1 thuộc tính có sẳn của react class component, dùng để quản lí các dữ liệu thay đổi trên giao diện của component đó

    state = {
        color: 'green',
        like: 1,
        fontSize: 20,
        login: true






    }
    // handleChangeColor =async () => {
    //     // document.querySelector('p').style.color = 'blue';
    //     /*
    //     this.setState là phương thức mặc định của react class component. Dùng để thay đổi giá trị this.state đồnd thời render lại giao diện
    //     + Lưu ý: phương thức setState là phuongw thứ bất đồng bộ
    //     */
    //  await this.setState({
    //     color:'black'
    //  });
    //  console.log(this.state);
    // }
    handleChangeColor = () => {
        // document.querySelector('p').style.color = 'blue';
        /*
        this.setState là phương thức mặc định của react class component. Dùng để thay đổi giá trị this.state đồnd thời render lại giao diện
        + Lưu ý: phương thức setState là phuongw thứ bất đồng bộ
        */
        this.setState({
            color: 'black'
        }, () => {
            console.log(this.state);
        });
    }
    renderLoginUI = () => {
        if (this.state.login) {
            return <>
            <p>Hi CyberSoft</p>
            <button  className='btn btn-danger' onClick={()=>{
                this.setState({
                    login:false
                })
            }}>Logout</button>
            </>
        }
        return<>
        <p>Hello </p>
         <button className='btn btn-success' onClick={()=>{
            this.setState({
                login:true
            })
        }}>Login</button></>
    }
    render() {
        return (
            <div className='container'>
                <h3>Ex: Change color</h3>
                <p style={{ color: this.state.color }}>Lorem ipsum dolor sit amet.
                </p>
                <button className='btn btn-danger' onClick={() => this.handleChangeColor()}>Change Color</button>
                <hr />
                <h3>Vd: Tăng giảm số lượng</h3>
                <p>{this.state.like} <i className='fa fa-heart text-danger' ></i></p>
                <br />
                <i className='fa fa-heart text-danger fs-3' style={{ cursor: 'pointer' }} onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}></i>
                <hr />
                <h3>VD: Tăng giảm font size </h3>
                <p style={{ fontSize: this.state.fontSize + 'px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='btn btn-dark mx-2' onClick={() => {
                    this.setState({
                        fontSize: this.state.fontSize + 1
                    })
                }}>+</button>
                <button className='btn btn-dark mx-2'
                    onClick={() => {
                        this.setState({
                            fontSize: this.state.fontSize - 1
                        })
                    }}>-</button>

                <hr />
                <h3>VD4: Header login</h3>
                <div className='bg-dark text-end text-white p-3'>
                    {/* {this.state.login === true ? <p>Hi CyberSoft</p> :     <button className='btn btn-success'>Login</button> 
} */}
                    {this.renderLoginUI()}

                </div>



            </div>
        )
    }
}



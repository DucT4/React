import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormRegister extends Component {


    handleChange = (e) => {
        const { value, id } = e.target;
        //tạo action đưa value và id lên redux
        const action = {
            type: 'HANDLE_CHANGE_FORM',
            payload: {
                id: id,
                value: value
            }
        };
        //dùng dispatch gửi lên reducer
        this.props.dispatch(action);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const values = this.props.userRegister;
        //tạo ra dữ liệu action đưa lên reducer
        const action = {
            type: 'REGISTER_FORM',
            payload: values
        };
        this.props.dispatch(action);
    }
        render() {
            const { email, name, password } = this.props.userRegister;
            // console.log('userRegister',userRegister)
            return (
                <form className='frm' onSubmit={this.handleSubmit}>
                    <h3>Register</h3>
                    <div className='form-group'>
                        <p>email</p>
                        <input id='email' className='form-control' value={email} onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <p>name</p>
                        <input id='name' className='form-control' value={name} onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <p>password</p>
                        <input id='password' type={{password}} className='form-control' value={password} onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success' type='submit' onSubmit={()=>{
                            this.handleSubmit()
                        }}>Register</button>
                    </div>
                </form>
            )
        }
    }

    const mapStateToProps = (state) => ({
        userRegister: state.userRegisterReducer
    })


export default connect(mapStateToProps)(FormRegister)
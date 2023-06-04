import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormRegister from './FormRegister'

class DemoRegister extends Component {
    render() {
        return (
            <div className='container'>
                <h3>Demo form</h3>
                <FormRegister />
                <table className='table  mt-2'>
                    <thead className='bg-dark text-white  '>
                        <tr  >
                            <th>email</th>
                            <th>name</th>
                            <th>password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.props.arrUser.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button className='btn btn-outline-danger'><i className='fa fa-close fs-3' onClick={()=>{
                                        const action={
                                            type:'DELETE',
                                            payload:item.email
                                        };
                                        this.props.dispatch(action);

                                    }}></i></button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    arrUser: state.arrUserReducer
})



export default connect(mapStateToProps)(DemoRegister)
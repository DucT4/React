import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div className='container'>
                <h3 className='display-4 mt-w'>
                    <i className='fa fa-cart-plus'></i>
                    Cart</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>Price</th>
                            <th>quanlity</th>
                            <th>total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img src={item.image} alt=",,," width={50} />
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button className='btn btn-primary mx-2' onClick={() => {
                                        const action = {
                                            type: 'cartReducer/changeQuantity',
                                            payload:  {
                                                id:item.id,
                                                quantity:1
                                            }
                                        }
                                        this.props.dispatch(action)
                                    }}>+</button>
                                    {item.quantity}
                                    <button className='btn btn-primary mx-2' onClick={() => {
                                        const action = {
                                            type: 'cartReducer/changeQuantity',
                                            payload: {
                                                id:item.id,
                                                quantity:-1
                                            }
                                        }
                                        this.props.dispatch(action)
                                    }}>-</button>
                                </td>
                                <td>{item.quantity * item.price}</td>
                                <td>
                                    <button className='btn btn-outline-success' onClick={() => {
                                        const action = {
                                            type: 'cartReducer/delItemAction',
                                            payload: item.id
                                        }
                                        this.props.dispatch(action)
                                    }}>
                                        <i className='fa fa-close'></i>
                                    </button>
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
    cart: state.cartReducer.gioHang

})

export default connect(mapStateToProps)(Cart)
import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        const { cart,deleItem,changeQuantity } = this.props;
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return <tr key={item.id}>

                            <td>{item.id}</td>
                            <td>
                                <img src={item.image} width={50} alt="..." />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}$</td>
                            <td>
                                <button className='btn btn-primary mx-2' onClick={()=>{
                                    changeQuantity(item.id,1);
                                }}>
                                    +
                                </button>
                                {item.quantity}
                                <button className='btn btn-primary mx-2' onClick={()=>{
                                    changeQuantity(item.id,-1);
                                }}>
                                    -
                                </button>
                            </td>
                            <td>{item.quantity*item.price}</td>
                            <td><button className='btn btn-danger' onClick={()=>{
                                deleItem(item.id);
                            }}>
                                <i className='fa fa-trash'></i>
                            </button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        )
    }
}

import React, { Component, createRef } from 'react'
import FormProduct from './FormProduct'


export default class extends Component {
    constructor(props) {
        super(props);
        this.childRef = createRef();
        this.state = {
            arrProduct: [
                { id: '11', name: 'iphone', price: 1000, image: './img/applephone.jpg', description: 'iphone 11', type: 'phone' },
                { id: '22', name: 'macbook', price: 2000, image: './img/lt_macbook.png', description: 'macbook m1 pro', type: 'laptop' },
            ],
            // productEdit: {
            //     id: '',
            //     name: '',
            //     price: '',
            //     image: '',
            //     description: ' ',
            //     type: ''
            // },

        }
    }


    //state đặt đâu thì setState đặt đó
    addItem = (prodClick) => {
        let newArrproduct = [...this.state.arrProduct];
        newArrproduct.push({ ...prodClick });
        this.setState({
            arrProduct: newArrproduct
        })
    }

    //delete
    deleteItem = (idClick) => {
        let index = this.state.arrProduct.findIndex(item => item.id === idClick);
        if (index !== -1) {
            this.state.arrProduct.splice(index, 1);
        }
        this.setState({
            arrProduct: this.state.arrProduct
        })
    }
    editProd = (prodClick) => {
        // this.setState({
        //     productEdit:prodClick
        // })
        this.childRef.current.setState({
            values: prodClick
        })
    }
    updateItem = (prodEdit) => {
        prodEdit = { ...prodEdit };
        //Tìm thằng trong mảng => lấy dữ liệu trong mảng gán = productEdit
        let prodInArray = this.state.arrProduct.find(item => item.id == prodEdit.id);
       
        if (prodInArray) {
            for (let key in prodInArray) {
                prodInArray[key] = prodEdit[key];
            }
            this.setState({
                arrProduct: this.state.arrProduct
            })
        }
    }
    renderTableProduct = () => {
        return this.state.arrProduct.map((item) => {
            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.image} width={50} alt="..." /></td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        this.deleteItem(item.id)
                    }}><i className="fa fa-trash"></i></button>
                    <button className="btn btn-primary" onClick={() => {
                        this.editProd(item)
                    }}><i className="fa fa-edit"></i></button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container" >
                <h3>Product Management</h3>
                <FormProduct ref={this.childRef} addItem={this.addItem} productEdit={this.state.productEdit} updateItem={this.updateItem} />
                <table className="table">
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>image</th>
                            <th>price</th>
                            <th> description</th>
                            <th>type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderTableProduct()}

                    </tbody>
                </table>
            </div>
        )
    }
}

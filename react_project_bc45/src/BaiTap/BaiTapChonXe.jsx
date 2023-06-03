import React, { Component } from 'react'

const arrCar = [
    { id: 1, name: 'Red-car', color: 'red', price: 1000, img: './img/red-car.jpg' },
    { id: 2, name: 'Silver-car', color: 'silver', price: 2000, img: './img/silver-car.jpg' },
    { id: 3, name: 'Black-car', color: 'black', price: 3000, img: './img/black-car.jpg' },
    { id: 4, name: 'Steel-car', color: 'steel', price: 4000, img: './img/steel-car.jpg' },
]
/*
yêu cầu 1: xd giao diện reder các objcar thành các card item bootstrap
*/
export default class BaiTapChonXe extends Component {

    state = {
        // img: './img/silver-car.jpg',
        // name:'red car',
        // price:1000
        carDeltails: {
            id: 1,
            name: 'Red car',
            color: 'red',
            price: 1000,
            img: './img/red-car.jpg'

        } 
    }
    renderCar = () => {
        let output = arrCar.map((car) => {
            return <div key={car.index} className='col-3'>
                <div >
                    <img src={car.img} alt={car.name} width={300} height={300} />
                    <div className='card-body'>
                        <h4>{car.name}</h4>
                        <h5> Price:{car.price}$</h5>
                    </div>
                    <button className=' btn btn-success' onClick={() => {
                        this.setState({
                            // img: car.img,
                            // name: car.name,
                            // price: car.price
                            carDeltails:car
                        })
                    }}>View Deltails</button>
                </div>
            </div>
        });
        return output;
    }
    render() {
        const {img,id,name,price,color} = this.state.carDeltails;
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderCar()}
                </div>
                <h4>Car details</h4 >
                <div className='row'>
                    <div className='col-4'>
                        <img src={img} alt="..." className='w-100' />
                    </div>
                    <div className='col-8'>
                        <ul>
                            <li>Model: {name} </li>
                            <li>Price:{price} $</li>
                            <li>Color: {color}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

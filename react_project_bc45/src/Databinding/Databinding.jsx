import React, { Component } from 'react'

export default class Databinding extends Component {

    lopHoc = 'Bootcamp 45';
    renderCard = () => {

        //lưu ý: để binding 1 hàm thì giá trị trả về của hàm đó sẽ là mumber string, bôlean. jsx
        return <div className='card w-25'>
            <img src="http://picsum.photos/200/300" alt="..." />
            <div className='card-body'>
                lớp: {this.lopHoc}
            </div>
        </div>;
    }
    render() {
        const hoTen = 'Nguyen Van A';
        const linkAnh = 'http://picsum.photos/200/200';



        return (
            <div className='container' >
                <h3>Họ tên:{hoTen}</h3>
                <h3>lop hoc: {this.lopHoc}</h3>
                <img className='w-25 mt-2' src={linkAnh} alt="..." />
                <input className='form-control w-25 mt-2' value={hoTen} />
                {this.renderCard()}
            </div>
        )
    }
}

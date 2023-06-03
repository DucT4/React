//rcc
import React, { Component } from 'react'

export default class BTHeader extends Component {
    render() {
        //Tuyệt đối không nên xét chiều width cho component bởi component nay có thể gắn vào các component có nhiều size khác nhau
        return (
            <div className='bg-dark text-center display-4 p-5 text-white'>
                Header component

            </div>
        )
    }
}

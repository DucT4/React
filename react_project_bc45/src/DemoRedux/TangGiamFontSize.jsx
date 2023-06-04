//rcredux

/* 
Khi sử dụng snippet reredux cần lưu ý
  +  xóa chữ export tại class component
  +xóa hàm dispatchToProps ở connect và ở trên chữ connect
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

class TangGiamFontSize extends Component {
    render() {
        const {fontSize} = this.props;
        return (
            <div className='container'>
                <h3>Vi du: tang giam fs</h3>
                <p style={{fontSize:fontSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt sunt, sit doloremque architecto optio suscipit nihil blanditiis.</p>
                <button className='btn btn-dark mx-2' onClick={() => {
                    const action = {
                        type: 'FONT',
                        payload: 1
                    }
                    this.props.dispatch(action);
                }}>+</button>
                <button className='btn btn-dark mx-2' onClick={() => {
                    const action = {
                        type: 'FONT',
                        payload: -1
                    }
                    this.props.dispatch(action);
                }}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fontSize: state.fontSizeReducer

})



export default connect(mapStateToProps)(TangGiamFontSize)
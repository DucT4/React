import React, { Component } from 'react'
//pure component tương tự component tuy nhiên không có lifecycle shouldComponentUpdate (pure sẽ tự xử lí so sánh this và new props ngầm). Sự so sánh this props và new props chỉ là shalow compare (so sánh với các giá trị nguyên thủy như boolean,string, number, null và undefinded)
//Lưu ý: khi sử dụng pure component thì tại các sự kiện THAY ĐỔI reference value state thì cần CLONE object đó ra.
export default class Child extends Component {


  constructor(props) {
    super(props);
    this.state = {

    }
    console.log('constructor child')
  }
  static getDerivedStateFromProps(newState, newProps) {
    console.log('getDerivedStateFromProps child');
    return null;
  }
  // shouldComponentUpdate(newProps,newState) {
  //   console.log('newProps', newProps);
  //   console.log('this props ', this.props);
  //   if(newProps.number !== this.props.number){
  //     return true;//cần component render lại vì props đã thay đổi
  //   }
  //   return false;
  // }
  



  render() {
    console.log('render Child')

    return (
      <div className='bg-dark text-white fs-3 p-3'>
        Child component : {this.props.number.value}
      </div>
    )
  }



  componentDidMount() {
    console.log('componentDidMount child')
  }

componentDidUpdate(){
  //tương tự componenDidMount tuy nhiên hàm này sẽ chạy sau mỗi lần state hoặc props thay đổi, thường dùng để set các page detail. Lưu ý khi setState trong hàm này phải có IF
}


  componentWillUnmount(){
    console.log('componentWillUnmount child ')
  }
}

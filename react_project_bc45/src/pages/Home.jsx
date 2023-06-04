import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
class Home extends Component {

  state = {
    arrProduct: []
  }

  getProductApi = async () => {
    let res = await axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: 'GET'
    });
    console.log('arrProduct', res.data.content)
    this.setState({
      arrProduct: res.data.content,

    })
  }

  componentDidMount() {
    this.getProductApi();
  }

  render() {
    return (
      <div className='container'>
        <h3>Home page</h3>
        <div className='row'>
          {this.state.arrProduct.map((item) => {
            return <div className='col-3' key={item.id}>
              <div className='card'>
                <img src={item.image} alt="..." />
                <div className='card-body'>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <button className='btn btn-dark' onClick={() => {
                    const action = {
                      type: 'cartReducer/addItemAction',
                      payload: item
                    }; //way 1
                    // const action =addItemAction(item) //way 2
                    this.props.dispatch(action);
                  }}>Add to cart <i className='fa fa-cart-plus'></i></button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {}


export default connect(mapStateToProps)(Home)

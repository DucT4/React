import React, { Component } from 'react'

export default class FormProduct extends Component {
    state = {
        values: {
            id: '',
            name: '',
            image: '',
            price: 0,
            description: '',
            type: 'phone'
        },
        errors: {
            id: '(*)',
            name: '(*)',
            image: '(*)',
            price: '(*)',
            description: '(*)',
           
        },
        inValid: true


    }
    //Khi đặt tên của các name id thì mình nên đặt giống nhau 

    handleOninput = (e) => {
        const { id, value } = e.target;
        //xử lí cho values
        let newValues = { ...this.state.values };
        newValues[id] = value;

        //xử lí cho errors

        let dataType = e.target.getAttribute('data-type');
        let dataMinMaxLength = e.target.getAttribute('data-min-max-length');
        let messageError = '';
        if (value.trim() === '') {
            messageError = id + ' can not be blank!!!'
        } else {
            //check validation còn lại
            switch (dataType) {
                case 'number': {
                    let regexNumber = /^[0-9]+$/;
                    if (!regexNumber.test(value)) {
                        messageError = id + ' is numbers.';
                    }
                }; break;
                case 'letter': {
                    let regexLetter = /^[A-Za-z]+$/;
                    if (!regexLetter.test(value)) {
                        messageError = id + ' is letter.'
                    }
                }; break;
            }
            if (dataMinMaxLength) {
                let [min, max] = JSON.parse(dataMinMaxLength);
                if (value.length < min || value.length > max) {
                    messageError = id + ` from ${min} to ${max} letter`
                }
            }

        }


        let newErrors = { ...this.state.errors };
        newErrors[id] = messageError;
        //checkValidForm
        let res = this.checkInValidForm(newErrors);
        //setState
        this.setState({
            values: newValues,
            errors: newErrors,
            inValid:res
        })
    } 
    /**l
     errors: {
                id: '(*)',
                name: '(*)',
                image: '(*)',
                price: '(*)',
                desccription: '(*)',
                //không hợp lệ là đúng thì return true
    
            }
     */
    checkInValidForm = (errors) => {
        let output = false;
        for (let key in errors) {
            if (errors[key] !== '') {
                output = true;
                break;
            }
        }
        return output;
    }

    handleSubmit = (e) => {
        e.preventDefault();//chặn sự kiện reload browser

        // lấy hàm addItem từ component cha
        const {addItem} = this.props;
        addItem (this.state.values);
    }
    render() {
        console.log(this.state)
        const {id, name, price, image, description,type}=this.state.values;
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>
                    <h3>Product info</h3>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>id</p>
                                <input data-min-max-length="[2,6]" data-type='number' className='form-control ' id='id' name='id' onInput={this.handleOninput}  value={id}/>
                                <p className='text-danger'>{this.state.errors.id}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>name</p>
                                <input data-type="letter" className='form-control ' id='name' name='name' onInput={this.handleOninput}  value={name} />
                                <p className='text-danger'>{this.state.errors.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>price</p>
                                <input data-type="number" className='form-control ' id='price' name='price' onInput={this.handleOninput}  value={price} />
                                <p className='text-danger'>{this.state.errors.price}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>image</p>
                                <input className='form-control ' id='image' name='image' onInput={this.handleOninput}   value={image}/>
                                <p className='text-danger'>{this.state.errors.image}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>desccription</p>
                                <input className='form-control ' id='description' name='description' onInput={this.handleOninput}  value={description}/>
                                <p className='text-danger'>{this.state.errors.description}</p>  </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>type</p>
                                <select name="type" id="type" className='form-control' onInput={this.handleOninput}  value={type}>
                                    <option value="phone">phone</option>
                                    <option value="laptop">laptop</option>
                                    <option value="tablet">tablet</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success mx-2' type='submit' disabled={this.state.inValid} >
                        Create
                    </button>
                    <button className='btn btn-primary mx-2' type='button' onClick={()=>{
                        this.props.updateItem(this.state.values)
                    }}>
                        Update
                    </button >
                </div>
            </form>
        )
    }
}

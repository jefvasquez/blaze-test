import React, { Component } from 'react'
import axios from 'axios'


export default class createCustomer extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        editing: false,
        id: ''
    }
    async componentDidMount() {
        // const res = await axios.get('http://localhost:4300/api/customers/');
        // this.setState({customers: res.data});
        if(this.props.match.params.id){
            const res = await axios.get('/api/customers/'+this.props.match.params.id);
            console.log(res.data);
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                phoneNumber: res.data.phoneNumber,
                editing: true,
                id: res.data._id
            });
        }
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const newCustomer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
        }
        if(this.state.editing){
            await axios.put('/api/customers/'+this.state.id, newCustomer);
        } else {
            await axios.post('/api/customers', newCustomer);
            
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            })
            
        }
        
        
        window.location.href = '/';
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            })
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3 mt-4">
                <div className='card card-body'>
                    <h4>Create a Customer</h4>

                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='First Name'
                                name='firstName'
                                size='25'
                                onChange={this.onInputChange}
                                value={this.state.firstName}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Last Name'
                                name='lastName'
                                size='25'
                                onChange={this.onInputChange}
                                value={this.state.lastName}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Email'
                                size='25'
                                name='email'
                                onChange={this.onInputChange}
                                value={this.state.email}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Phone Number'
                                name='phoneNumber'
                                size='9'
                                maxLength='9'
                                onChange={this.onInputChange}
                                value={this.state.phoneNumber}
                                required
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            {(this.state.editing)?'Update': 'Save'}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

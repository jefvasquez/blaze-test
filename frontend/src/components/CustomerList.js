import React, { Component } from 'react'
import DataTable from 'react-data-table-component'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            columns: [
                {
                    selector: '_id',
                    name: 'ID'
                },
                {
                    selector: 'firstName',
                    name: 'First Name'
                },
                {
                    selector: 'lastName',
                    name: 'First Name'
                },
                {
                    selector: 'email',
                    name: 'Email'
                },
                {
                    selector: 'phoneNumber',
                    name: 'Phone Number'
                },
                {
                    name: 'Actions',
                    cell: row => <Link to={`/edit/${row._id}`} className="btn btn-warning">Edit</Link>
                },
                {
                    name: 'Actions',
                    cell: row => <button onClick={() => this.deleteCustomer(row._id)} type="button" className="btn btn-danger">Delete</button>
                }
            ]
        }
    }
    componentDidMount() {
        this.getCustomers();
    }
    async getCustomers() {
        const res = await axios.get('/api/customers');
        this.setState({customers: res.data});
    }
    onChangeCustomer = (e) => {
        console.log(e.target);
    }

    deleteCustomer = async (id) => {
        await axios.delete('/api/customers/' + id);
        this.getCustomers();
    }
    
    render() {
        return (
            <DataTable
                title="Customers"
                columns={this.state.columns}
                data={this.state.customers}
                pagination={true}
            />
        )
    }
}

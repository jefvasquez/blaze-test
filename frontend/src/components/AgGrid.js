import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class AgGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: 'First Name', field: 'firstName' },
        { headerName: 'Last Name', field: 'lastName' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Phone Number', field: 'phoneNumber' },
      ],
      customers: [],
      paginationPageSize: 10,
    };
  }
    async componentDidMount() {
        const res = await axios.get('/api/customers');
        this.setState({customers: res.data});
    }
      render() {
        return (
          <div className="ag-theme-alpine ml-auto mr-auto mt-4" style={ {height: '519px', width: '800px'} }>
            <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.customers}
                pagination={true}
                paginationPageSize={this.state.paginationPageSize}
                
            />
          </div>
        );
      }         
}
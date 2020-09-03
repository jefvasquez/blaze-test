import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import CreateCustomer from './components/CreateCustomer';
import AgGrid from './components/AgGrid';
import CustomerList from './components/CustomerList';
function App() {

  return (
    <Router>
        <Navigation/>
        <Route path='/' exact component={CustomerList}/>
        <Route path='/ag-grid' component={AgGrid}/>
        <Route path='/edit/:id' component={CreateCustomer}/>
        <Route path='/create' component={CreateCustomer}/>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

class Customer extends Component {
  state = {
    customers: [],
    customer: {
      id: "",
      name: "",
      age:  "",
    },
  };

  nameHandler = (event) => {
    const newCustomer = { ...this.state.customer };
    newCustomer.name = event.target.value;
    this.setState({ customer: newCustomer });
  };

  ageHandler = (event) => {
    const newCustomer = { ...this.state.customer };
    newCustomer.age = event.target.value;
    this.setState({ customer: newCustomer });
  };

  customersHandler = (event) => {
    console.log(this.generateId());
    const newCustomer = { ...this.state.customer };
    newCustomer.id = this.generateId;
    const newCustomers = [ ...this.state.customers];
    newCustomers.push(newCustomer);
    this.setState({ customers: newCustomers, customer: { id: "", name: "", age: "" }});
  };

  generateId = () => {
    const today= new Date();
    return '#' + today.getDate() + today.getMonth() + today.getFullYear() + today.getHours() + today.getMinutes() + today.getSeconds()
  }

  render() {
    return (
      <div>
        <CustomerForm
          name = { this.state.customer.name }
          age = { this.state.customer.age }
          nameHandler = { this.nameHandler }
          ageHandler = { this.ageHandler } />
        <button onClick={ (event) => this.customersHandler(event) }>Add</button>
        { this.state.customers.map((customer, index) =>
          <CustomerList
            key={ index }
            name={ customer.name }
            age={ customer.age } />
        )}
      </div>
    );
  };

}

export default Customer;

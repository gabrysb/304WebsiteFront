import React, { Component } from 'react';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);

    }

    handleInputChange(event){

        const target = event.target;
        
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }


    handleLoginClick(event){

        //prevent form submission
        event.preventDefault();
        
        fetch('http://localhost:8080/api/v1.0/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        })
    }

    render() {

        return (
            <div className="loginForm">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleLoginClick}>
                    <div className="container">

                        <label htmlFor="username"><b>Email</b></label>
                        <input type="text" placeholder="Enter email" name="username" onChange={this.handleInputChange} value={this.state.username} />

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="text" placeholder="Enter password" name="password" onChange={this.handleInputChange} value={this.state.password} />

                        <label htmlFor="firstName"><b>First Name</b></label>
                        <input type="text" placeholder="Enter first name" name="firstName" onChange={this.handleInputChange} value={this.state.firstName} />

                        <label htmlFor="lastName"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter last name" name="lastName" onChange={this.handleInputChange} value={this.state.lastName} />

                        <button type="submit">Submit</button> 

                    </div>
                </form>
            </div>
        );
    }
}
export default Signup;
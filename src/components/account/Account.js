import React, { Component } from 'react';
import './Account.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            loginButtonColor:{backgroundColor:this.props.loginButtonColor},
            txtUsername: '',
            txtPassword: '',
            errors : {
                txtUsername: false,
                txtPassword: false
            }
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

        //create new object to assign new error values
        let newErrors = {};

        newErrors.txtUsername = this.state.txtUsername === '' ? true:false;
        newErrors.txtPassword = this.state.txtPassword === '' ? true:false;    
        
       if(newErrors.txtUsername === false && newErrors.txtPassword === false){
            this.props.onSubmit({
                username: this.state.txtUsername,
                password: this.state.txtPassword,
                rememberMe: false
            })
       }
       else{
            this.setState({errors:newErrors});
       }

       
    }

    

    render() {

        return (

            <div class="container">
            THIS PAGE NEEDS AUTH
                <div class="row">
                    <div class="col">
                        <h1>Lists</h1>
                    </div>
                    <div class="col">
                        Pick the list you want to edit
                    </div>
                </div>
                <div class="row">
                    [add list of lists here]
                </div>
                <div class="row">
                    <p></p>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>Following</h1>
                    </div>
                    <div class="col">
                        Users you follow
                    </div>
                </div>
                <div class="row">
                    [add list of users here]
                </div>
            </div>
            
        );
    }
}
export default Account;
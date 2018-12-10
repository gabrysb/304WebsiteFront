import React, { Component } from 'react';
import './Test.css';

class Test extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            loginButtonColor:{backgroundColor:this.props.loginButtonColor},
            testInput: '',
            errors : {
                testInput: false
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

        newErrors.testInput = this.state.testInput === '' ? true:false; 
        
       if(newErrors.testInput === false){
            this.props.onSubmit({
                username: this.state.testInput,
                rememberMe: false
            })
       }
       else{
            this.setState({errors:newErrors});
       }

       
    }

    

    render() {

        return (

            <div className="loginForm">
                <form action="action_page.php">
                    <div className="container">

                        <label htmlFor="testInput"><b>Test</b></label>
                        <input type="text" placeholder="Enter Username" name="testInput" onChange={this.handleInputChange} value={this.state.testInput} />

                        <button type="submit" style={this.state.loginButtonColor} onClick={this.handleLoginClick}>Login</button> 
                        
                        <label>
                            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                        </label>
                    </div>
                    <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                        <span className="psw">Forgot <a href="#signup" onClick={this.props.foobar}>password?</a></span>
                    </div>
                </form>
            </div>
            
        );
    }
}
export default Test;
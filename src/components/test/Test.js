import React, { Component } from 'react';
import './Test.css';

class Test extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            testField: ''
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

        newErrors.testField = this.state.testField === '' ? true:false; 
        
        if(newErrors.testField === false){
            this.props.onSubmit({
                testField: this.state.testField
            })
        }
        else{
            this.setState({errors:newErrors});
        }

       
    }

    render() {

        return (

            <div className="loginForm">
                <form action="submit">
                    <div className="container">

                        <label htmlFor="testField"><b>Test</b></label>
                        <input type="text" placeholder="Enter test" name="testField" onChange={this.handleInputChange} value={this.state.testInput} />

                        <button type="submit" onClick={this.handleLoginClick}>Submit</button> 

                    </div>
                </form>
            </div>
            
        );
    }
}
export default Test;
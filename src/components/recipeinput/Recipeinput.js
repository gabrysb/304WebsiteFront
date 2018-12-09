import React, { Component } from 'react';
import './Recipeinput.css';
import $ from 'jquery';

var max_fields      = 10;
var wrapper         = $(".input_fields_wrap"); 
var add_button      = $(".add_field_button");
var remove_button   = $(".remove_field_button");

$(add_button).click(function(e){
    e.preventDefault();
    var total_fields = wrapper[0].childNodes.length;
    if(total_fields < max_fields){
        $(wrapper).append('<input type="text" name="answer[]" class="field-long" />');
    }
});
$(remove_button).click(function(e){
    e.preventDefault();
    var total_fields = wrapper[0].childNodes.length;
    if(total_fields>1){
        wrapper[0].childNodes[total_fields-1].remove();
    }
});


class Recipeinput extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            loginButtonColor:{backgroundColor:this.props.loginButtonColor},
            recipeName: '',
            recipeDesc: '',
            recipeTags: '',
            recipeIngredients: '',
            recipeCat: '',
            recipeSteps: '',
            recipeImage: '',
            errors : {
                recipeName: false,
                recipeDesc: false
            }
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleInputChange(event){

        const target = event.target;
        
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmitClick(event){

        //prevent form submission
        event.preventDefault();

        //create new object to assign new error values
        let newErrors = {};

        newErrors.recipeName = this.state.recipeName === '' ? true:false;
        newErrors.recipeDesc = this.state.recipeDesc === '' ? true:false;    
        
       if(newErrors.recipeName === false && newErrors.recipeDesc === false){
            this.props.onSubmit({
                username: this.state.recipeName,
                password: this.state.recipeDesc,
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
                        <label htmlFor="recipeImage" ><b>Image</b></label>
                        <p>
                        <input type="file" name="recipeImage" onChange={this.handleInputChange} value={this.state.recipeDesc} /></p>

                        <label htmlFor="recipeName"><b>Recipe Name</b></label>
                        <input type="text" name="recipeName" onChange={this.handleInputChange} value={this.state.recipeName} />

                        <label htmlFor="recipeDesc" ><b>Description</b></label>
                        <input type="text" name="recipeDesc" onChange={this.handleInputChange} value={this.state.recipeDesc} />

                        <label htmlFor="recipeTags" ><b>Tags</b></label>
                        <input type="text"  name="recipeTags" onChange={this.handleInputChange} value={this.state.recipeDesc} />

                        <label htmlFor="recipeIngredients" ><b>Ingredients</b></label>
                        <input type="text"  name="recipeIngredients" onChange={this.handleInputChange} value={this.state.recipeDesc} />

                        {/* add dropdown */}
                        <label htmlFor="recipeCat" ><b>Category</b></label>
                        <input type="text"  name="recipeCat" onChange={this.handleInputChange} value={this.state.recipeDesc} />

                        <label htmlFor="recipeTags" ><b>Tags</b></label>
                        <input type="text"  name="recipeTags" onChange={this.handleInputChange} value={this.state.recipeDesc} />

                        

                        <button type="button" class="add_field_button">Add Field</button>
                        <button type="button" class="remove_field_button">Remove Field</button>
                        <div class="input_fields_wrap">
                        <input type="text" name="answer[]" class="field-long" />
                        <input type="text" name="answer[]" class="field-long" />
                        <input type="text" name="answer[]" class="field-long" />
                        </div>

                        <button type="submit" style={this.state.loginButtonColor} onClick={this.handleSubmitClick}>Submit</button> 
                        
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
export default Recipeinput;
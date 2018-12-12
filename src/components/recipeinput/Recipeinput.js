import React, { Component } from 'react';
import './Recipeinput.css';
import $ from 'jquery';

class Recipeinput extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            recipeName: '',
            recipeDesc: '',
            recipeTags: '',
            recipeIngredients: '',
            recipeCat: '',
            recipeSteps: '',
            recipeImage: '',
            recipeStatus: ''
            /* errors : {
                recipeName: false,
                recipeDesc: false
            } */
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

        if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imgPrev')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(this.files[0]);
        }
    }

    handleSubmitClick(event){

        //prevent form submission
        event.preventDefault();

        var data = {
            'testField': this.state.testField
        }

        var myJSON = JSON.stringify(data);

        fetch('http://localhost:8080/api/v1.0/recipes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.status.recipeName,
                authorId: this.status.recipeDesc,
                description: this.status.recipeDesc,
                ingredients: this.status.recipeIngredients,
                steps: this.status.recipeSteps,
                photo: this.status.recipeImage, 
                keywords: this.status.recipeTags,
                category: this.status.recipeCat,
                status: this.status.recipeName
            })
        })

        /* //create new object to assign new error values
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
       } */

       
    }


    render() {

        return (

            <div className="loginForm">
                <h2>Submit Recipe</h2>
                <form onSubmit={this.handleLoginClick}>
                    <div className="container">
                        <label htmlFor="recipeImage" ><b>Image</b></label>
                        <p>
                        <input type="file" name="recipeImage" onChange={this.handleInputChange} value={this.state.recipeImage} /></p>
                        <img id="imgPrev" src="http://placehold.it/180" alt="your image" />
                        
                        <p></p>
                        <label htmlFor="recipeName"><b>Recipe Name</b></label>
                        <input type="text" name="recipeName" onChange={this.handleInputChange} value={this.state.recipeName} />

                        <label htmlFor="recipeDesc" ><b>Description</b></label>
                        <input type="text" name="recipeDesc" onChange={this.handleInputChange} value={this.state.recipeDesc} />

                        <label htmlFor="recipeSteps" ><b>Tags</b></label>
                        <input type="text" name="recipeSteps" onChange={this.handleInputChange} value={this.state.recipeSteps} />


                        <label htmlFor="recipeTags" ><b>Tags</b></label>
                        <input type="text" name="recipeTags" onChange={this.handleInputChange} value={this.state.recipeTags} />

                        <label htmlFor="recipeIngredients" ><b>Ingredients</b></label>
                        <input type="text" name="recipeIngredients" onChange={this.handleInputChange} value={this.state.recipeIngredients} />

                        {/* add dropdown */}
                        <label htmlFor="recipeCat" ><b>Category</b></label>
                        <input type="text" name="recipeCat" onChange={this.handleInputChange} value={this.state.recipeCat} />

                        <label htmlFor="recipeTags" ><b>Tags</b></label>
                        <input type="text" name="recipeTags" onChange={this.handleInputChange} value={this.state.recipeTags} />

                        <label htmlFor="recipeStatus" ><b>Tags</b></label>
                        <input type="text" name="recipeStatus" onChange={this.handleInputChange} value={this.state.recipeStatus} />


                        <button type="submit">Submit</button> 
                    </div>
                </form>
            </div>
            
        );
    }
}
export default Recipeinput;
import React, { Component } from 'react';
import './Recipeinput.css';
import FileBase64 from 'react-file-base64';

class Recipeinput extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            recipeName: ' ',
            recipeDesc: '',
            recipeTags: '',
            recipeIngredients: '',
            recipeCat: '',
            recipeSteps: '',
            recipeStatus: 'active',
            files: []
            /* errors : {
                recipeName: false,
                recipeDesc: false
            } */
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.getFiles = this.getFiles.bind(this);
    }

    // Callback~
    getFiles(files){
        this.setState({ files: files })
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

        const bas64str = String(this.state.files)
        var fileName = this.state.files.file.name

        console.log(this.props.userId)
        var data = {
            title: this.state.recipeName,
            authorId: this.props.userId,
            description: this.state.recipeDesc,
            ingredients: this.state.recipeIngredients,
            steps: this.state.recipeSteps,
            photo: 'http://localhost:8080/img/'+fileName, 
            keywords: this.state.recipeTags,
            category: this.state.recipeCat,
            status: this.state.recipeName,
            fileName: fileName,
            encodedStr: bas64str
        }

        console.log(data)

        var myJSON = JSON.stringify(data);

        fetch('http://localhost:8080/api/v1.0/recipes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.recipeName,
                authorId: this.props.userId,
                description: this.state.recipeDesc,
                ingredients: this.state.recipeIngredients,
                steps: this.state.recipeSteps,
                photo: 'http://localhost:8080/img/'+fileName, 
                keywords: this.state.recipeTags,
                category: this.state.recipeCat,
                status: this.state.recipeName,
                fileName: fileName,
                encodedStr: bas64str
            })
        
        })
       
    }

    

    render() {

        return (

            <div className="loginForm">
                <h2>Submit Recipe</h2>
                <form onSubmit={this.handleLoginClick}>
                    <div className="container">
                        <label htmlFor="recipeName"><b>Recipe Name</b></label>
                        <input type="text" name="recipeName" onChange={this.handleInputChange} value={this.state.recipeName} />

                        <label htmlFor="recipeDesc" ><b>Description</b></label>
                        <input type="text" name="recipeDesc" onChange={this.handleInputChange} value={this.state.recipeDesc} />

                        <label htmlFor="recipeSteps" ><b>Steps</b></label>
                        <input type="text" name="recipeSteps" onChange={this.handleInputChange} value={this.state.recipeSteps} />

                        <label htmlFor="recipeIngredients" ><b>Ingredients</b></label>
                        <input type="text" name="recipeIngredients" onChange={this.handleInputChange} value={this.state.recipeIngredients} />

                        {/* add dropdown */}
                        <label htmlFor="recipeCat" ><b>Category</b></label>
                        <input type="text" name="recipeCat" onChange={this.handleInputChange} value={this.state.recipeCat} />

                        <label htmlFor="recipeTags" ><b>Tags</b></label>
                        <input type="text" name="recipeTags" onChange={this.handleInputChange} value={this.state.recipeTags} />

                        <label htmlFor="recipeStatus" ><b>Status</b></label>
                        <select className="form-control" value={this.state.recipeStatus} onChange={this.handleInputChange}>
                            <option value="active">Active</option>
                            <option value="hidden">Hidden</option>
                        </select>

                        <label htmlFor="recipeImage" ><b>Image</b></label>
                        
                        {/* <input className="form-control-file" type="file" name="recipeImage" onChange={this.handleInputChange} value={this.state.recipeImage} /></p>
                        <img src={this.state.imageURL} alt="img" /> */}
                        <FileBase64
                            multiple={ false }
                            onDone={this.getFiles} />

                        <button type="submit">Submit</button> 
                    </div>
                </form>
            </div>
            
        );
    }
}
export default Recipeinput;
import React, { Component } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            searchTerm : "",
            headerStyle:{backgroundColor:this.props.backgroundColor}
        };
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.signUpClick = this.signUpClick.bind(this);
        this.logInClick = this.logInClick.bind(this);
        this.recipeInpClick = this.recipeInpClick.bind(this);
        this.recipesClick = this.recipesClick.bind(this);
        this.accountClick = this.accountClick.bind(this);
        this.testClick = this.testClick.bind(this);

    }

    handleTextChange(event){
        this.setState({searchTerm: event.target.value})
    }
    handleSearchSubmit(event){
        
        //prevent the form to be submitted to its action url
        event.preventDefault();
        this.props.onSearchClick(this.state.searchTerm);  
    }

    handleTitleClick(event){

        if(this.props.onClickTitle != null){
            this.props.onClickTitle();
        }
            
    }

    signUpClick(event){

        if(this.props.onClickSignup != null){
            this.props.onClickSignup();
        }
            
    }

    logInClick(event){

        if(this.props.onClickLogIn != null){
            this.props.onClickLogIn();
        }
            
    }

    recipeInpClick(event){

        if(this.props.onClickRecipeInput != null){
            this.props.onClickRecipeInput();
        }
            
    }

    recipesClick(event){

        if(this.props.onClickRecipes != null){
            this.props.onClickRecipes();
        }
            
    }

    accountClick(event){

        if(this.props.onClickAccount != null){
            this.props.onClickAccount();
        }
            
    }

    testClick(event){

        if(this.props.onClickTest != null){
            this.props.onClickTest();
        }
            
    }
  
    render() {

        return (

            //this is JSX code which is very similar to HTML we already know
            <div className="header" style={this.state.headerStyle}>
                <img src={this.props.logo} alt="React logo" /><a href="#default" className="logo" onClick={this.handleTitleClick}> {this.props.title}</a>
                <div className="header-links">
                <button type="button" onClick={this.signUpClick} className="btn btn-light">Sign Up</button>
                <button type="button" onClick={this.logInClick} className="btn btn-light">Log In</button>
                <button type="button" onClick={this.recipeInpClick} className="btn btn-light">Recipe Input</button>
                <button type="button" onClick={this.recipesClick} className="btn btn-light">All Recipes</button>
                <button type="button" onClick={this.accountClick} className="btn btn-light">My Account</button>                </div>
                <div className="header-right">
                    <div className="search-container">
                        <form action="">
                            <input type="text" placeholder="Search.." name="txtSearch" onChange={this.handleTextChange} value={this.state.searchTerm}/>
                            <button type="submit" onClick={(e) =>{ e.preventDefault(); this.props.onSearchClick(this.state.searchTerm)} } className="btn btn-default" aria-label="Search"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
import React, { Component } from 'react';
import './Card.css';
import './tooltip.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class AddCommentForm extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            commentBody: '',
            commentName: this.props.username
        };

        this.processComment = this.processComment.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event){

        const target = event.target;
        
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    processComment(event) {
        event.preventDefault();
        
        

        // 1. Take data from from form
        var commentData = {
            commentName: this.props.username,
            commentBody: this.state.commentBody
        }
        console.log(this.props.username)
        
        // 2. Pass data back to App
        this.props.addComment(commentData);
        
        // 3. Reset the form
        this.refs.commentForm.reset();
        
    }

    render() {


        return (

            <div className="container">
                <h4>Add a Comment</h4>
                <form className="form-group" ref="commentForm" onSubmit={this.processComment}>
                    <input name="commentBody" ref="desc" placeholder="Add your comment here" required className="form-control" onChange={this.handleInputChange} value={this.state.commentBody}/>
                    <div className="spacing">
                    <button id="submit" type="submit" className="btn btn-primary">Add Comment</button>
                    </div>
                </form>
            </div>
           
        );
    }
}
export default AddCommentForm;
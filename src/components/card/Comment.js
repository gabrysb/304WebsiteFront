import React, { Component } from 'react';
import './Comment.css';
import './tooltip.css';
import AddCommentForm from './Commentform';
import NewComment from './Newcomment';
import 'bootstrap/dist/css/bootstrap.min.css';


class Comment extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            comments: {}
        };

        this.addComment = this.addComment.bind(this);
        this.renderComment = this.renderComment.bind(this);

        
    }

    addComment(commentData) {
        console.log(commentData)
        var timeStamp = (new Date()).getTime();
        
        this.state.comments['comment-id' + timeStamp] = commentData;
        this.setState({
          comments: this.state.comments
        });
      }

    renderComment(key) {
        return (
            <li className="">
            <NewComment key={key} index={key} details={this.state.comments[key]} />
            </li>
        )
    }

    render() {


        return (

            //this is JSX code which is very similar to HTML we already know
            //note that when a card has its title clicked it will call the event handler
            //which was passed from the grid to the card
            
            <div className="card">
        
                <ol className="comment-list block-comments">
                    {
                    Object
                        .keys(this.state.comments)
                        // Creating a NEW array
                        .map(this.renderComment)
                    }
                </ol>
                
                <AddCommentForm addComment={this.addComment} username={this.props.username}/>
            
            </div>
           
        );
    }
}
export default Comment;
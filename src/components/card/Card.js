import React, { Component } from 'react';
import './Card.css';
import './tooltip.css';
import FontAwesome from 'react-fontawesome';

class Card extends Component {
  
    constructor(props){
        super(props);

        this.state = {
           cardStyle:{backgroundColor:this.props.backgroundColor},
           bookmarked: false
        };
        
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBookmarkClicked = this.onBookmarkClicked.bind(this);
    }

    onClickHandler(event){

        event.preventDefault();
        this.props.onClick(this.props.id);
    }
    onBookmarkClicked(event){

        let currentValue = this.state.bookmarked;
        this.setState({bookmarked:!currentValue});
    }

    render() {

        let bookkmarkIcon;
        let toolTipMessage;

        if(this.state.bookmarked){
            bookkmarkIcon = <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
            toolTipMessage = "unbookmark this";
        }
        else{
            bookkmarkIcon = <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
            toolTipMessage = "bookmark this";
        }

        return (

            //this is JSX code which is very similar to HTML we already know
            //note that when a card has its title clicked it will call the event handler
            //which was passed from the grid to the card
            
            <div className="card">
                <span className='clickableAwesomeFont tooltip' onClick={this.onBookmarkClicked}>
                    <span className="tooltiptext">{toolTipMessage}</span>
                    {bookkmarkIcon}
                </span>
                <img className="test" src={this.props.image} alt={this.props.imgAlt} style={{width: '100%'}} />
                <div className="container">
                    <button onClick={this.onClickHandler} className="linkButton"><h4><b>{this.props.title}</b></h4></button>
                    <p>{this.props.article}</p> 
                </div>
            </div>
           
        );
    }
}
export default Card;
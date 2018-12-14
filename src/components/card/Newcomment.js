import React, { Component } from 'react';
import './Card.css';
import './tooltip.css';

class NewComment extends Component {
  
    constructor(props){
        super(props);

        this.state = {
           
        };
        
       
    }

    


    render() {
        var h =  {
            getTime: function() {
              var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
              var d = new Date();
              var mon = month[d.getMonth()];
              var day = d.getDate();
              var year = d.getFullYear();
              var dateAll = mon + " " + day + ", " + year;
          
              return dateAll;
            }
          }


        return (

            <div className="container">
                <div className="comment-user">
                    <div className="comment-user-avatar-wrap">
                        <a>
                        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/3/profile/profile-512_29.jpg" className="comment-avatar" alt="" />
                        </a>
                    </div>
                    <div className="comment-user-text">
                        <a href="#0" data-username="cathbailh" className="comment-username">
                            <span className="username">
                            {this.props.details.commentName}
                            </span>
                        </a>
                        
                        <span className="on"> on </span>
                        <a href="#0">
                        <time className="block-comment-time">
                            {h.getTime()}
                        </time>
                        </a>
                    </div>
                </div>

                <div className="comment-text">
                <p>{this.props.details.commentBody}</p>
                </div>
            </div>
           
        );
    }
}
export default NewComment;
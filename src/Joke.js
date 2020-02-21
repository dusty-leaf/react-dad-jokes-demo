import React from 'react';
import './Joke.css';

class Joke extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt){
        // determine which button was clicked
        let target = evt.target.className;

        // call updateSCore based on whether upvote or downvote was clicked
        if(target === 'upvote' || target === 'fas fa-thumbs-up fa-2x'){
            this.props.updateScore(this.props.jokeId, 1);
        } else if (target === 'downvote' || target === 'fas fa-thumbs-down fa-2x'){
            this.props.updateScore(this.props.jokeId, -1);
        }
    }
    
    render(){
        let emoji;
        let s = this.props.score;
        if(s < 2){
            emoji = <i className="far fa-tired fa-2x"></i>
        } else if(s >= 2 && s < 4){
            emoji = <i className="far fa-meh-rolling-eyes fa-2x"></i>
        } else if(s >= 4 && s < 6){
            emoji = <i className="far fa-laugh fa-2x"></i>
        } else if(s >= 6 && s < 8){
            emoji = <i className="far fa-laugh-squint fa-2x"></i>
        } else if(s >= 8){
            emoji = <i className="far fa-grin-squint-tears fa-2x"></i>
        }
            
        return(
            <li className="Joke">
                <span className="wrapper">
                    <span className="Joke-button_container">
                        <button className="upvote" onClick={this.handleClick}><i className="fas fa-thumbs-up fa-2x"></i></button>
                        <p className="score">{this.props.score ? this.props.score : 0}</p>
                        <button className="downvote" onClick={this.handleClick}><i className="fas fa-thumbs-down fa-2x"></i></button>
                    </span>
                    <p className="Joke-content">{this.props.joke}</p>
                </span>
                <span id="rating-icon">
                    {emoji}
                </span>  
            </li>
        )
    }
}

export default Joke;
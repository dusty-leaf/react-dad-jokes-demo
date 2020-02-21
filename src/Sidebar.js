import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
    render(){
        let button;

        if(this.props.isDisabled){
            button = <p>Loading...</p>
        } else {
            button = <button onClick={this.props.getNewJokes}>Get more jokes</button>
        }

        return(
            <div className="Sidebar">
                <h1>Dad Jokes</h1>
                <i className="far fa-grin-squint-tears fa-5x"></i>
                {button}
            </div>
        )
    }
}

export default Sidebar;
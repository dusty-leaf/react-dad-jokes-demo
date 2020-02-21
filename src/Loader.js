import React from 'react';
import './Loader.css';

class Loader extends React.Component {
    render(){
        return(
            <div className="loader">
                <i className="far fa-grin-squint spinning fa-4x"></i>
            </div>
        )
    }
}

export default Loader;
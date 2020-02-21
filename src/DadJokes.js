import React from 'react';
import Loader from './Loader';
import Joke from './Joke';
import Sidebar from './Sidebar';
import axios from 'axios';
import './DadJokes.css';

class DadJokes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            // JSON.parse jokes if any are present, otherwise parse an empty array
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            isLoaded: false
        }

        this.getNewJokes = this.getNewJokes.bind(this);
        this.updateScore = this.updateScore.bind(this);
        
    }

    static defaultProps = {
        numJokesToGet: 10
    }

    componentDidMount(){
        //fetch new jokes if none are saved in local storage, otherwise set the page to loaded
        if(this.state.jokes.length === 0){
            this.getNewJokes();
        } else {
            this.setState({ isLoaded: true });
        }
    }

    async getNewJokes(){

        // display loader while fetching new jokes
        this.setState({ isLoaded: false })

        // new jokes will be stored in newJokes.
        let newJokes = [];

        // create set of old jokes to compare for duplicates
        let oldJokes = new Set();
        for(let joke of this.state.jokes){
            oldJokes.add(joke.id);
        }
        console.log(oldJokes);

        // fetch a new joke, store it in res, then push it to newJokes until the required num of jokes have been fetched
        let res;
        while(newJokes.length < this.props.numJokesToGet){
            res = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json'
                }
            });

            console.log(!oldJokes.has(res.data.id));
            //if newJoke is not already contained in oldJokes, push it into newJokes and also add it
            // to old jokes so we don't get a duplicate during the loop
            if(!oldJokes.has(res.data.id)){
                newJokes.push(res.data);
                oldJokes.add(res.data.id);
            }
        }


        // add newJokes to jokes array in state, toggle loader off, and sync with localStorage
        this.setState(st => ({
            jokes: this.state.jokes.concat(newJokes), isLoaded: true
        }),
        () => {
            window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
        });
            

        
    }


    updateScore(key, change){
        // find the joke whose score is being updated
        let updatedJoke = this.state.jokes.filter(joke => (joke.id === key));

        // put other jokes into new array
        let updatedJokes = this.state.jokes.filter(joke => (joke.id !== key));

        // if score was previously undefined, set it to 0
        if(updatedJoke[0].score === undefined){
            updatedJoke[0].score = 0;
        }

        // add the change (1 or -1) to the score
        updatedJoke[0].score += change;

        // add updatedJoke to updatedJokes
        updatedJokes.push({ id: updatedJoke[0].id, joke: updatedJoke[0].joke, score: updatedJoke[0].score });

        // set state with new jokes array, then sync with localStorage
        this.setState(st => (
            { jokes: updatedJokes }
        ),
        () => {
            window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));   
        });
        
    }

    sortByScore(){
        let jokes = this.state.jokes.slice().sort(function(a, b){ 
            if(a.score === undefined){
                a.score = 0;
            }
            if(b.score === undefined){
                b.score = 0;
            }
            return b.score - a.score });
        return jokes;
    }

    render(){
        let page;
        let jokes = this.sortByScore(); 
        if(this.state.isLoaded){
            //display if jokes have loaded
            page = 
                <div className="main-wrapper">
                    <div className="DadJokes">
                        <div className="DadJokes-sidebar">
                            <Sidebar getNewJokes={this.getNewJokes} isDisabled={false} />
                        </div>
                        <ul className="DadJokes-joke_list">
                            {jokes.map(el => (
                                <Joke 
                                    joke={el.joke} 
                                    jokeId={el.id}
                                    key={el.id} 
                                    score={el.score} 
                                    updateScore={this.updateScore}
                                />))}
                        </ul>
                    </div>
                </div>
        } else {
            //display while jokes are still being fetched
            page =
                <div className="main-wrapper">
                    <div className="DadJokes">
                        <div className="DadJokes-sidebar">
                            <Sidebar getNewJokes={this.getNewJokes} isDisabled={true} />
                        </div>
                        <ul className="DadJokes-joke_list">
                            <Loader />
                        </ul>
                    </div>
                </div>  
        } 
 
        return(
            <div>
                {page}
            </div>
        )
    }
}

export default DadJokes;
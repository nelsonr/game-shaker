import React from "react";
import { genreShaker } from "./Genres";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            randomGenre: genreShaker()
        };
    }

    randomize() {
        this.setState({
            randomGenre: genreShaker()
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Video Game Shaker</h1>

                <main>
                    <div className="genre">{this.state.randomGenre}</div>
                    <div className="randomize">
                        <button onClick={_ => this.randomize()}>Generate</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;

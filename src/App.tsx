
import React, {Component, Fragment} from "react";
import Apptwo from "./Apptwo";
import "./App.scss";
import logo from "./assets/logo.svg";

class App extends Component {

    render() {

        return (

            <Fragment>
            <header className = "header">
            <div>
             <img src={logo} />
            </div>
                <div>
                    <h1>Main Header</h1>
                </div>

                <div>
                    <p>Description: Hello World from webpack and typescript</p>
                </div>

                <Apptwo />

                </header>

            </Fragment>

        );
    }
}

export default App;
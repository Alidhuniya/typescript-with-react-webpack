
import React, {Component, Fragment} from "react";
import Apptwo from "./Apptwo";
import "./App.scss";
import logo from "./assets/logo.svg";

interface Props {
    foo: string;
  }

class App extends Component<Props, {}> {

   
    render() {

        return (

            <Fragment>
            <header className = "header">
                <p>{this.props.foo}</p>
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
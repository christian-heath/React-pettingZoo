import React, { Component } from "react";
import Animal from "./Animal";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  handleMessage(name) {
    const newMessage = `You just pet the ${name}!`;
    this.setState({ message: newMessage });
  }
  render() {
    return (
      <div>
        <h1 className="header">Petting Zoo!</h1>
        <h3 className="message">{this.state.message}</h3>
        <div className="animals">
          <Animal
            className="animal"
            name="Horse"
            onPetAnimal={name => this.handleMessage(name)}
          />
          <Animal
            className="animal"
            name="Goat"
            onPetAnimal={name => this.handleMessage(name)}
          />
          <Animal
            className="animal"
            name="Sheep"
            onPetAnimal={name => this.handleMessage(name)}
          />
        </div>
      </div>
    );
  }
}

export default App;

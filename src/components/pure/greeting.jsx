import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 29,
    };
  }
  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
        <span>tienes ya {this.state.age}</span>
        <div>
          <button onClick={() => this.birthday()}>cumpli años</button>
        </div>
      </div>
    );
  }
  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};

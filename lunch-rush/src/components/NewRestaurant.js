import React, { PropTypes } from "react";
import { database } from "./firebase";
import "./NewRestaurant.css";

/**
 * @class
 * @see https://facebook.github.io/react/docs/react-api.html#react.component
 * @see https://facebook.github.io/react/docs/react-component.html
 */
class NewRestaurant extends React.Component {
  state = {
    name: ""
  };

  handleChange = e => {
    const name = e.target.value;
    this.setState({
      name
    });
  };

  handleSubmit = e => {
    const { name } = this.state;
    e.preventDefault();
    this.restaurantsRef = database.ref("/restaurants");
    this.restaurantsRef.push({ name });
  };

  /**
   * @returns {object}
   */
  render() {
    const { name } = this.state;

    return (
      <form className="NewRestaurant">
        <input
          type="text"
          value={name}
          placeholder="Name of Fine Establishment"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: PropTypes.object
};

export default NewRestaurant;

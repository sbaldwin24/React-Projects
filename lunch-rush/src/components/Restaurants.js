import React, { PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import { database } from './firebase';
import './Restaurants.css';

class Restaurants extends React.Component {
  handleSelect = key => {
    const currentUser = this.props.user;
    database.ref('/restaurants').child(key).child('votes').child(currentUser.uid).set(currentUser.displayName);
  };

  handleDeselect = key => {
    const currentUser = this.props.user;
    database.ref('/restaurants').child(key).child('votes').child(currentUser.uid).remove();
  };

  /**
   * @returns {object}
   */
  render() {
    const { user, restaurants } = this.props;

    return (
      <section className="Restaurants">
        {map(restaurants, (restaurant, key) => (
          <Restaurant
            key={key}
            {...restaurant}
            user={this.props.currentUser}
            handleSelect={() => this.handleSelect(key)}
            handleDeselect={() => this.handleDeselect(key)}
          />
        ))}
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;

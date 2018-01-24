import React, { PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends React.Component {
  /**
   * @returns {object}
   */
  render() {
    const { handleDeselect, handleSelect, name, user, votes } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article className="Restaurant">
        <h3>{name}</h3>
        <ul>{votes && map(votes, (vote, key) => <li key={key}>{vote}</li>)}</ul>
        {userHasSelected
          ? <button className="destructive" onClick={handleDeselect}>
              Nah, nevermind
            </button>
          : <button onClick={handleSelect}>Yeah, I'd go there</button>}
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
